import './globals.css';

export const metadata = {
  title: '圖片搜尋工具 | 使用Google、Bing等引擎搜索圖片',
  description: '上傳圖片或輸入圖片網址，一鍵使用Google、Bing、TinEye等多個搜尋引擎進行反向圖片搜尋',
  keywords: ['圖片搜尋', '反向圖片搜尋', 'Google圖片', 'Bing圖片', 'TinEye圖片', 'SauceNAO', '以圖搜圖'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://vvmg.cc'),
  openGraph: {
    title: '圖片搜尋工具 | 使用多引擎進行反向圖片搜尋',
    description: '上傳圖片或輸入圖片網址，一鍵使用Google、Bing、TinEye等進行反向圖片搜尋',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '圖片搜尋工具',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '圖片搜尋工具 | 多引擎反向圖片搜尋',
    description: '上傳圖片或輸入圖片網址，一鍵使用多個搜尋引擎進行反向圖片搜尋',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
              "url": process.env.NEXT_PUBLIC_BASE_URL || "https://vvmg.cc",
              "description": "上傳圖片或輸入圖片網址，一鍵使用Google、Bing、TinEye等搜尋引擎搜索相似圖片",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "圖片搜尋工具團隊"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL || "https://vvmg.cc"}?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
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