import React from 'react'
import hero from '../assets/hero.jpg'

export default function Hero(){
  return (
    <section className="bg-white rounded shadow overflow-hidden md:flex">
      <div className="p-6 flex-1">
        <h1 className="text-3xl font-bold mb-2">Welcome to Kirehe District (Inspired)</h1>
        <p className="text-gray-600 mb-4">This site is an inspired React + Tailwind layout. Replace placeholders with official content when authorized.</p>
        <div className="space-x-2">
          <a href="/services" className="inline-block px-4 py-2 bg-kireheblue text-white rounded">Our Services</a>
          <a href="/contact" className="inline-block px-4 py-2 border rounded">Contact Us</a>
        </div>
      </div>
      <div className="md:w-1/3">
        <img src={hero} alt="hero" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
