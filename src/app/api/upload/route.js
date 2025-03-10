import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    // FormData 解析
    const formData = await req.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { error: '沒有提供文件' },
        { status: 400 }
      );
    }
    
    // 檢查是否為圖片
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: '只支持圖片文件' },
        { status: 400 }
      );
    }
    
    // 檢查文件大小
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: '文件大小不能超過5MB' },
        { status: 400 }
      );
    }
    
    // 生成唯一檔名
    const uniqueId = uuidv4();
    const fileType = file.type.split('/').pop(); // 從MIME類型獲取擴展名 (如 image/jpeg -> jpeg)
    const uniqueFileName = `image-${uniqueId}.${fileType}`;
    
    // 使用 Vercel Blob 上傳
    const blob = await put(uniqueFileName, file, {
      access: 'public',
      contentType: file.type,
      cacheControl: 'public, max-age=31536000, immutable', // 1年快取，因為URL是唯一的
    });
    
    return NextResponse.json({
      url: blob.url,
      success: true
    });
  } catch (error) {
    console.error('上傳錯誤:', error);
    return NextResponse.json(
      { error: '文件上傳失敗', details: error.message },
      { status: 500 }
    );
  }
}