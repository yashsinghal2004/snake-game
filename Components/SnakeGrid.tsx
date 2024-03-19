"use client"

import { useState } from "react";

const GRID_SIZE=20;

type Point={
    x:number,
    y:number
}

export default function SnakeGrid() {
    const [snake,setSnake]=useState<Point[]>([
        {y:0,x:2},
        {y:0,x:1},
        {y:0,x:0},
    ]);
    const [food,setFood]=useState<Point>({x:0,y:0});

    const generatefood=()=>{
        const x=Math.floor(Math.random()*GRID_SIZE);
        const y=Math.floor(Math.random()*GRID_SIZE);
        setFood({x,y});
    }

  return (
    <div className="grid grid-cols-20 grid-rows-20 border border-black ">
        {Array.from({length:GRID_SIZE}).map((_,y)=>(
            <div key={y} className="flex">
                {Array.from({length:GRID_SIZE}).map((_,x)=>(
                    <div key={x} className={`w-5 h-5 border border-gray-300
                    ${snake.some((snakePart)=>snakePart.x===x && snakePart.y===y)&& "bg-green-600"}
                    ${food.x===x && food.y===y && "bg-red-600"}
                    `}>

                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}
