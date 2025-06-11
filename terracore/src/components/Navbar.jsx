import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-matte text-ash border-b border-ash">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-burnt font-bold text-xl">Terracore</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-burnt">Home</Link>
          <Link to="/products" className="hover:text-burnt">Products</Link>
          <Link to="/about" className="hover:text-burnt">About</Link>
          <Link to="/contact" className="hover:text-burnt">Contact</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-ash">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-matte border-t border-ash px-4 pb-4 flex flex-col space-y-2">
          <Link to="/" className="hover:text-burnt" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/products" className="hover:text-burnt" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/about" className="hover:text-burnt" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-burnt" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
