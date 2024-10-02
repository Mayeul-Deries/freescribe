import React, { useState } from 'react'
import Transcription from './Transcription'
import Translation from './Translation'

export default function Information(props) {
  const { output } = props
  console.log(output)
  const [tab, setTab] = useState('transcription')

  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center text-center pb-20 max-w-prose w-full mx-auto'>
      <h1 className='whitespace-nowrap font-semibold text-4xl sm:text-5xl md:text-6xl '>
        Your <span className='text-blue-400 bold'>Transcription</span>
      </h1>
      <div className='grid grid-cols-2 sm:mx-auto bg-white rounded-full overflow-hidden items-center blueShadow border-[2px] border-solid border-blue-300'>
        <button
          onClick={() => setTab('transcription')}
          className={
            'px-4 duration-200 py-1 ' +
            (tab === 'transcription' ? ' bg-blue-300 text-white' : ' text-blue-400 hover:text-blue-600')
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab('translation')}
          className={
            'px-4 duration-200 py-1  ' +
            (tab === 'translation' ? ' bg-blue-300 text-white' : ' text-blue-400 hover:text-blue-600')
          }
        >
          Translation
        </button>
      </div>

      {tab === 'transcription' ? (
        <Transcription {...props} /> ) :
        (<Translation {...props} />)
      }
    </main>
  )
}
