import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg-gradient">
      {/* Ajoutez votre header ici */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
} 