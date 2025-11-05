import React from 'react'
export default function Services(){
  const services = [
    {id:1, name:'Civil Registry', desc:'Documentation services for citizens.'},
    {id:2, name:'Health', desc:'Health programs and clinics information.'},
    {id:3, name:'Agriculture', desc:'Support services for farmers.'},
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Services</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map(s => (
          <div key={s.id} className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">{s.name}</h4>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
