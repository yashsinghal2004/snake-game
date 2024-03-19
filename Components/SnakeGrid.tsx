"use client"
const GRID_SIZE=20;

type Point={
    x:number,
    y:number
}

export default function SnakeGrid() {
  return (
    <div className="grid grid-cols-20 grid-rows-20 border-black">
        {Array.from({length:GRID_SIZE}).map((_,y)=>(
            <div key={y} className="flex">
                {Array.from({length:GRID_SIZE}).map((_,x)=>(
                    <div key={x} className="w-5 h-5 border border-gray-300">

                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}
