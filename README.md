# 圖片搜尋工具

一個方便的網頁應用，讓用戶上傳圖片或輸入圖片URL，然後使用各大搜尋引擎如Google、Bing、TinEye和SauceNAO進行反向圖片搜尋。

## 功能特點

- 支持圖片URL輸入
- 支持本地圖片上傳 (最大5MB)
- 上傳的圖片自動轉換為可搜尋的URL
- 一鍵使用多種搜尋引擎進行反向圖片搜尋
- 響應式設計，適配桌面和移動設備
- 簡潔直觀的用戶界面

## 技術棧

- **前端**: Next.js, React, Tailwind CSS
- **圖片存儲**: Vercel Blob Storage
- **部署**: Vercel
- **自動化**: Vercel Cron Jobs（每日清理過期圖片）

## 開發設置

### 前置條件

- Node.js 18+ 
- npm 或 yarn
- Vercel CLI (可選)
- Vercel 帳號 (用於Blob Storage和部署)

### 環境變數

在開始開發前，請設置以下環境變數:

- `BLOB_READ_WRITE_TOKEN`: Vercel Blob Storage的讀寫令牌
- `NEXT_PUBLIC_BASE_URL`: 您的應用URL (開發時為 `http://localhost:3000`)
- `CRON_SECRET`: 用於保護Cron API端點的密鑰

可以參考 `.env.example` 文件並創建 `.env.local` 文件。

### 安裝依賴

```bash
npm install
# 或
yarn install
```

### 運行開發服務器

```bash
npm run dev
# 或
yarn dev
```

然後打開 [http://localhost:3000](http://localhost:3000)

## 部署

### 部署到Vercel

1. 在Vercel上創建新項目
2. 連接GitHub存儲庫
3. 添加必要的環境變數
4. 點擊部署

### 設置Vercel Blob Storage

1. 在Vercel控制台中啟用Blob Storage
2. 獲取讀寫令牌
3. 將令牌添加到環境變數

### 設置Cron Jobs

應用包含每日圖片清理的Cron Job。部署到Vercel後，會根據`vercel.json`配置自動運行，每天凌晨4點執行清理。

## 授權

[MIT](LICENSE)