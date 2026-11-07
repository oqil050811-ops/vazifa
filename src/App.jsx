
import React, { use, useState } from 'react'
import Image from '../src/assets/image 1 (5).png'

function App() {
  const [count, setCount] = useState(0)
  const [showComponent, setComponent] = useState(false)
const [text, setText] = useState('')

  return (
    <div className='py-5 px-5'>

      <h1 className='text-center text-3xl mb-3'>Counter</h1>

      <div className='flex items-center gap-5 mb-20'>

        <button
          className='bg-red-700 py-2 px-3 w-10 font-bold text-white text-3xl cursor-pointer rounded-2xl'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <p className='text-2xl'>{count}</p>

        <button
          className='bg-blue-700 py-2 px-3 font-bold text-white text-3xl cursor-pointer rounded-2xl'
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

      </div>

      <hr />

      <h1 className='text-2xl my-5'>Hidden Component</h1>

      <div>

        <button
          className='px-2 py-4 bg-blue-600 text-white ml-5 mr-5 rounded-2xl'
          onClick={() => setComponent(false)}
        >
          Hidden
        </button>

        <button
          className='px-2 py-4 bg-black text-white ml-5 mr-5 rounded-2xl'
          onClick={() => setComponent(true)}
        >
          Show
        </button>

        {showComponent && (
          <div className='mt-5'>
            <img src={Image} alt="Rasm" className='w-64 rounded-xl' />
          </div>
        )}

      </div>

      <hr />

        <div className='p-5'>

      <h1 className='text-2xl font-bold mb-4'>
        Input Change
      </h1>

      <input
        type="text"
        placeholder="Cristiano Ronaldo"
        className='border border-black rounded-xl px-3 py-1 outline-none w-64'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className='mt-5 text-lg'>
        <b>Your Text:</b> {text}
      </p>

    </div>

    </div>
  )
}

export default App
