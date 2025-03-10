'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import SearchButtons from './SearchButtons';

export default function ImageForm() {
  const [imageUrl, setImageUrl] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('url'); // 'url' 或 'upload'
  const fileInputRef = useRef(null);

  const handleUrlInput = (e) => {
    setImageUrl(e.target.value);
    // 清除先前的錯誤
    setError('');
  };

  const handleSubmitUrl = (e) => {
    e.preventDefault();
    
    // 基本的URL驗證
    if (!imageUrl) {
      setError('請輸入圖片URL');
      return;
    }
    
    // 檢查是否為圖片URL (簡單檢查)
    const urlPattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/i;
    if (!urlPattern.test(imageUrl)) {
      setError('請輸入有效的URL');
      return;
    }
    
    // 此處我們將用戶輸入的URL直接設為搜尋用URL
    setUploadedImageUrl(imageUrl);
    setError('');
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // 檢查文件是否為圖片
    if (!file.type.startsWith('image/')) {
      setError('請上傳圖片文件');
      return;
    }
    
    // 檢查文件大小 (不超過5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('圖片大小不能超過5MB');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // 顯示本地預覽 (先讓使用者看到上傳的圖片)
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
      
      // 創建FormData
      const formData = new FormData();
      formData.append('file', file);
      
      // 發送到上傳API
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '上傳失敗');
      }
      
      const data = await response.json();
      
      // 釋放本地預覽URL
      URL.revokeObjectURL(objectUrl);
      
      // 設置上傳後的圖片URL
      setUploadedImageUrl(data.url);
    } catch (err) {
      console.error('上傳錯誤:', err);
      setError(err.message || '圖片上傳失敗，請稍後再試');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setImageUrl('');
    setUploadedImageUrl('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* 選項卡切換 */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('url')}
          className={`py-2 px-4 font-medium border-b-2 ${
            activeTab === 'url'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          輸入圖片網址
        </button>
        <button
          onClick={() => setActiveTab('upload')}
          className={`py-2 px-4 font-medium border-b-2 ${
            activeTab === 'upload'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          上傳圖片
        </button>
      </div>

      {/* URL輸入表單 */}
      {activeTab === 'url' && (
        <form onSubmit={handleSubmitUrl} className="mb-6">
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700 mb-2">
              圖片網址
            </label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={handleUrlInput}
              placeholder="https://example.com/image.jpg"
              className="input-field"
            />
          </div>
          <div className="flex space-x-3">
            <button
              type="submit"
              className="btn-primary"
              disabled={isLoading}
            >
              {isLoading ? '處理中...' : '搜尋此圖片'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
            >
              重置
            </button>
          </div>
        </form>
      )}

      {/* 圖片上傳表單 */}
      {activeTab === 'upload' && (
        <div className="mb-6">
          <div className="mb-4">
            <label htmlFor="imageUpload" className="block text-gray-700 mb-2">
              選擇圖片
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleUpload}
              ref={fileInputRef}
              className="block w-full text-gray-700 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-500 text-xs mt-1">支援 JPG, PNG, GIF 等格式，最大5MB</p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary"
            disabled={isLoading}
          >
            重置
          </button>
        </div>
      )}

      {/* 錯誤訊息 */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* 圖片預覽 */}
      {uploadedImageUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">圖片預覽</h3>
          <div className="border rounded p-2 mb-4 bg-gray-50 flex justify-center">
            <div className="relative w-full max-w-md h-64">
              <Image
                src={uploadedImageUrl}
                alt="搜尋圖片"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-700 text-sm break-all">圖片網址: {uploadedImageUrl}</span>
          </div>
          
          {/* 搜尋按鈕組 */}
          <SearchButtons imageUrl={uploadedImageUrl} />
        </div>
      )}

      {/* 未上傳狀態的搜尋按鈕組 */}
      {!uploadedImageUrl && <SearchButtons imageUrl="" />}
    </div>
  );
}