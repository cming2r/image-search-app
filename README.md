# 圖片搜尋工具

這是一個基於Next.js開發的圖片搜尋應用，允許用戶通過輸入圖片URL或上傳圖片來使用Google、Bing、Yandex等多個搜尋引擎進行反向圖片搜尋。

## 功能特點

- 支持輸入圖片URL進行搜尋
- 支持上傳本地圖片轉換為可搜尋的URL
- 集成多個知名反向圖片搜尋引擎 (Google、Bing、Yandex、TinEye、SauceNAO)
- 圖片預覽功能
- 響應式設計，適配各種設備
- 使用Vercel Blob安全儲存圖片

## 技術棧

- **前端框架**: [Next.js](https://nextjs.org/)
- **樣式**: [TailwindCSS](https://tailwindcss.com/)
- **圖片存儲**: [Vercel Blob Storage](https://vercel.com/docs/storage/vercel-blob)
- **部署**: [Vercel](https://vercel.com/)

## 本地開發

要在本地運行此應用程序：

1. 克隆此儲存庫
```bash
git clone https://github.com/yourusername/image-search-app.git
cd image-search-app
```

2. 安裝依賴
```bash
npm install
```

3. 創建環境變量文件
創建`.env.local`文件並添加以下內容：
```
# 從Vercel控制台獲取Blob存儲令牌
# https://vercel.com/dashboard/stores/blob
BLOB_READ_WRITE_TOKEN=your_blob_token

# 可選：網站基礎URL，用於Schema.org結構化數據
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. 啟動開發伺服器
```bash
npm run dev
```

應用將在 [http://localhost:3000](http://localhost:3000) 運行

## 部署到Vercel

該應用已配置為無縫部署到Vercel平台。

1. [創建Vercel帳戶](https://vercel.com/signup)
2. 在Vercel控制台中創建Blob存儲
   - 進入 [Vercel儀表板](https://vercel.com/dashboard)
   - 選擇 "Storage" > "Create Blob Storage"
   - 按照指示創建Blob存儲
   - 複製生成的`BLOB_READ_WRITE_TOKEN`
3. 在Vercel儀表板中，創建一個新項目並導入此Git儲存庫
4. 在項目設置中配置以下環境變量:
   - `BLOB_READ_WRITE_TOKEN`：你的Blob存儲令牌
   - `NEXT_PUBLIC_BASE_URL`：你的網站URL (例如 https://your-app.vercel.app)
5. 點擊"部署"按鈕

## 使用指南

1. 訪問應用首頁
2. 選擇"輸入圖片網址"或"上傳圖片"選項卡
3. 輸入URL或上傳圖片
4. 查看圖片預覽和生成的公開圖片URL
5. 點擊搜尋引擎按鈕，在新標籤頁中打開搜尋結果

## 注意事項

- 上傳的圖片儲存在Vercel Blob中，永久可用
- 圖片大小限制為5MB
- 支持常見圖片格式：JPG、PNG、GIF、WebP等
- 本應用不儲存搜尋歷史記錄，只提供搜尋功能
- 所有搜尋操作都在相關搜尋引擎網站上進行

## 許可證

[MIT](LICENSE)

## 貢獻

歡迎貢獻！請隨時提交問題或拉取請求。
