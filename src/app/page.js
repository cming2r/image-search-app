import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageForm from '@/components/ImageForm';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-3">圖片搜尋工具</h1>
            <p className="text-gray-600">
              輸入圖片網址或上傳圖片，使用各大搜尋引擎查找相似圖片
            </p>
          </div>
          
          <ImageForm />
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">如何使用此工具？</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>輸入圖片的網址，或是點擊「上傳圖片」按鈕選擇本地圖片</li>
              <li>系統會將上傳的圖片轉換為可搜尋的網址</li>
              <li>點擊「Google圖片搜尋」、「Bing圖片搜尋」等按鈕，跳轉至對應的搜索引擎</li>
              <li>搜索引擎將使用此圖片尋找網路上的相似或相關圖片</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}