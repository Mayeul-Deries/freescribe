import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
      <h1 className='font-semibold'>
        Free<span className='text-blue-400 bold'>Scribe</span>
      </h1>
      <button className='specialBtn px-3 py-2 text-sm rounded-lg  text-blue-400 flex items-center gap-2'>
        <p>New</p>
        <i className='fa-solid fa-plus'></i>
      </button>
    </header>
  )
}
