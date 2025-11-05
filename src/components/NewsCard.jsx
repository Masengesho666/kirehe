import React from 'react'
export default function NewsCard({title, excerpt, date}){
  return (
    <article className="bg-white p-4 rounded border shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{excerpt}</p>
      <div className="text-xs text-gray-400 mt-2">{date}</div>
    </article>
  )
}
