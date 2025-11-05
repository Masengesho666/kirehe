import React from 'react'
import NewsCard from '../components/NewsCard'
const news = [
  {id:1, title:'Community Meeting Announced', excerpt:'Community meeting scheduled for local leaders. Details to follow.', date:'2025-10-12'},
  {id:2, title:'Road Improvement Works', excerpt:'Work on the main road continues to improve connectivity.', date:'2025-09-30'}
]
export default function News(){ return (
  <div className='space-y-4'>
    <h2 className='text-2xl font-bold'>News</h2>
    <div className='grid md:grid-cols-2 gap-4'>
      {news.map(n => <NewsCard key={n.id} {...n} />)}
    </div>
  </div>
)}
