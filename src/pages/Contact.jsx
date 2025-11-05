import React from 'react'
export default function Contact(){
  return (
    <div className='bg-white p-6 rounded shadow max-w-2xl'>
      <h2 className='text-2xl font-bold mb-3'>Contact Us</h2>
      <p className='text-gray-700'>Use this page to provide official contact details and an embedded map with permissions.</p>
      <form className='mt-4 space-y-3'>
        <div><label className='block text-sm'>Name</label><input className='mt-1 block w-full rounded border-gray-300 p-2' /></div>
        <div><label className='block text-sm'>Email</label><input className='mt-1 block w-full rounded border-gray-300 p-2' /></div>
        <div><label className='block text-sm'>Message</label><textarea className='mt-1 block w-full rounded border-gray-300 p-2' rows={4}></textarea></div>
        <div><button className='px-4 py-2 bg-kirehegreen text-white rounded'>Send</button></div>
      </form>
    </div>
  )
}
