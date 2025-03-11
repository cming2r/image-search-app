'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  
  const handleLogoClick = (e) => {
    e.preventDefault();
    // 重新整理頁面
    window.location.href = '/';
  };
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" onClick={handleLogoClick} className="text-xl font-bold text-blue-600 flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            以圖搜圖
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" onClick={handleLogoClick} className="text-gray-600 hover:text-blue-600 transition-colors">
                  首頁
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}