import './globals.css';

export const metadata = {
  title: '圖片搜尋工具 | 使用Google、Bing等引擎搜索圖片',
  description: '上傳圖片或輸入圖片網址，一鍵使用Google、Bing、Yandex等多個搜尋引擎進行反向圖片搜尋',
  keywords: ['圖片搜尋', '反向圖片搜尋', 'Google圖片', 'Bing圖片', 'Yandex圖片', '以圖搜圖'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "圖片搜尋工具",
              "url": process.env.NEXT_PUBLIC_BASE_URL || "https://example.com",
              "description": "上傳圖片或輸入圖片網址，一鍵使用Google、Bing、Yandex等搜尋引擎搜索相似圖片",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}