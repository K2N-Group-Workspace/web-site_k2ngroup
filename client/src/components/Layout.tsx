import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useState, useEffect } from 'react';
import { Spinner } from './spinner';
import Header from './header/Header';

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(time);
  }, []);

  return (
    <div className="min-h-screen bg-bg-gradient">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Spinner />
      </div>
      ):(
      <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      </>)}
    </div>
  )
} 