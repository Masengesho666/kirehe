import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-kireheblue text-white mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h4 className="font-semibold text-lg">Kirehe District</h4>
          <p className="text-sm">Official district information and public services (inspired layout)</p>
        </div>
        <div className="text-sm">
          <p>Contact: +250 788 000 000</p>
          <p>Email: info@kirehe.example</p>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Kirehe District - Inspired</p>
        </div>
      </div>
    </footer>
  )
}
