import SnakeGrid from '@/Components/SnakeGrid'
import React from 'react'

const page = () => {
  return (
      <div className='mt-8'>
    <div className="flex justify-center items-center text-4xl text-green-700 font-extrabold m-6">Snake Game

    </div>
    <div className='flex justify-center items-center'>
    <SnakeGrid/>
    </div>
    </div>
  )
}

export default page