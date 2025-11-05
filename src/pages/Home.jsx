import React from 'react'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'

const news = [
  {id:1, title:'Community Meeting Announced', excerpt:'Community meeting scheduled for local leaders. Details to follow.', date:'2025-10-12'},
  {id:2, title:'Road Improvement Works', excerpt:'Work on the main road continues to improve connectivity.', date:'2025-09-30'}
]

export default function Home(){
  return (
    <div className="space-y-8">
      <Hero />
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Latest News</h2>
            <div className="space-y-3">
              {news.map(n => <NewsCard key={n.id} {...n} />)}
            </div>
          </div>
        </div>
        <aside className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>Services</li>
            <li>Departments</li>
            <li>Contact</li>
          </ul>
        </aside>
      </section>
    </div>
  )
}
