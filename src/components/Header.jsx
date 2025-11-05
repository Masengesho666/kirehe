import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({to, children}) => (
  <NavLink to={to} className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-kireheblue text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
    {children}
  </NavLink>
)

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-kireheblue text-white flex items-center justify-center font-bold">KD</div>
          <div>
            <Link to="/" className="text-xl font-semibold text-gray-800">Kirehe District</Link>
            <p className="text-xs text-gray-500">Local Government & Services</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/news">News</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} className="p-2 rounded" aria-label="menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 flex flex-col space-y-1">
            <Link to="/" onClick={()=>setOpen(false)} className="px-3 py-2 rounded">Home</Link>
            <Link to="/about" onClick={()=>setOpen(false)} className="px-3 py-2 rounded">About</Link>
            <Link to="/services" onClick={()=>setOpen(false)} className="px-3 py-2 rounded">Services</Link>
            <Link to="/news" onClick={()=>setOpen(false)} className="px-3 py-2 rounded">News</Link>
            <Link to="/contact" onClick={()=>setOpen(false)} className="px-3 py-2 rounded">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
