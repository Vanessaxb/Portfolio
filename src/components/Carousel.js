import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import {data} from '../data/photos'

export default function Carrousel({
  children: data,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
const [curr, setCurr] = useState(0)
const prev = () =>
setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1))
const next = () =>
setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1))

useEffect(() => {
if (!autoSlide) return
const slideInterval = setInterval(next, autoSlideInterval)
return () => clearInterval(slideInterval)
}, [])
return (
<div className="overflow-hidden relative">
  <div
    className="flex transition-transform ease-out duration-500"
    style={{ transform: `translateX(-${curr * 100}%)` }}
  >
    {data}
  </div>
  <div className="absolute inset-0 flex items-center justify-between p-4">
    <button
      onClick={prev}
      className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
    >
      <ChevronLeft size={40} />
    </button>
    <button
      onClick={next}
      className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
    >
    <ChevronRight size={40} />
    </button>
  </div>

  <div className="absolute bottom-4 right-0 left-0">
    <div className="flex items-center justify-center gap-2">
      {data.map((_, i) => (
        <div
          className={`
          transition-all w-3 h-3 bg-white rounded-full
          ${curr === i ? "p-2" : "bg-opacity-50"}
        `}
        />
      ))}
    </div>
  </div>
</div>
)
}


<div className="bg-black flex items-center justify-center min-h-screen">
<div className="ftext-center overflow-hidden relative">
  <div  className="h-[600px] w-[450px] transition-transform duration-3 ease-in-out transform"
          style={{
            transform: `translateX(-${currentPictureIndex * 450}px)`, // Slide transition
          }}
        >
          {pictures.map((picture, index) => (
            <img
              key={index}
              className="h-[600px] w-[450px] inline-block"
              src={picture.urls?.small}
              alt={`unplash image ${index}`}
            />
          ))}
    
   <div className="relative inset-0 flex items-center justify-center gap-14">
    <button onClick={previousPicture}className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
        <ChevronLeft size={40} />
       </button>
    <button onClick={nextPicture}className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
    <ChevronRight size={40} />
    </button>
  </div>
  </div>
</div>
</div>
);
}