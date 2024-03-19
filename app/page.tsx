import SnakeGrid from '@/Components/SnakeGrid'
import React from 'react'

const page = () => {
  return (
      <div className='mt-14'>
    <div className="flex justify-center items-center text-2xl font-bold m-3">Snake Game
    
    </div>
    <div className='flex justify-center items-center'>
    <SnakeGrid/>
    </div>
    </div>
  )
}

export default page