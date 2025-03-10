# 圖片搜尋工具

這是一個基於Next.js開發的圖片搜尋應用，允許用戶通過輸入圖片URL或上傳圖片來使用Google、Bing、Yandex等多個搜尋引擎進行反向圖片搜尋。

## 功能特點

- 支持輸入圖片URL進行搜尋
- 支持上傳本地圖片轉換為可搜尋的URL
- 集成多個反向圖片搜尋引擎
- 圖片預覽功能
- 響應式設計，適配各種設備

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
BLOB_READ_WRITE_TOKEN=your_blob_token
```

4. 啟動開發伺服器
```bash
npm run dev
```

應用將在 [http://localhost:3000](http://localhost:3000) 運行

## 部署到Vercel

該應用已配置為無縫部署到Vercel平台。

1. [創建Vercel帳戶](https://vercel.com/signup)
2. 在Vercel儀表板中，創建一個新項目並導入此Git儲存庫
3. 在項目設置中配置環境變量
4. 點擊"部署"按鈕

## 使用指南

1. 訪問應用首頁
2. 選擇"輸入圖片網址"或"上傳圖片"選項卡
3. 輸入URL或上傳圖片
4. 查看圖片預覽
5. 點擊搜尋引擎按鈕，在新標籤頁中打開搜尋結果

## 許可證

[MIT](LICENSE)

## 貢獻

歡迎貢獻！請隨時提交問題或拉取請求。# image-search-app
