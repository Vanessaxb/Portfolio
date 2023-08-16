import React, { useState, useEffect } from "react"
import {data} from '../data/photos'
// import Carousel from "../components/Carousel"
import { ChevronLeft, ChevronRight } from "react-feather"


export default function Home () {
const [pictures, setPictures] = useState([])
const [currentPictureIndex, setCurrentPictureIndex] = useState(0);



const getPictures = async () => {
    try{
        // const response = await fetch(`https://api.unsplash.com/collections/kpSoldTUxrI/photos?client_id=3kwIgCi1EOghLM6FjKr4fwz6uqHAIz9zUm3KLMhehn8&count=27`)
        // const response = await fetch(`https://api.unsplash.com/collections/kpSoldTUxrI/photos?client_id=${process.env.REACT_APP_PORTFOLIO_KEY}`)
        // const response = await fetch(`https://api.unsplash.com/photos/random?collections=kpSoldTUxrI&client_id=${process.env.REACT_APP_PORTFOLIO_KEY}&count=27`)
        const response = await fetch(`https://api.unsplash.com/photos/random?collections=kpSoldTUxrI&client_id=3kwIgCi1EOghLM6FjKr4fwz6uqHAIz9zUm3KLMhehn8&count=27`)
        console.log(process.env.REACT_APP_PORTFOLIO_KEY);
        const dataArr = await response.json()
        // const data = dataArr
        console.log(dataArr);
        setPictures(dataArr)
    }

catch(e) {
    console.error(e);
    }}

useEffect (() => {
getPictures()
}, [])

const [prevIndex, setPrevIndex] = useState(0)
const nextPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

const previousPicture = () => {
setCurrentPictureIndex((prevIndex) =>
    prevIndex === 0 ? data.length - 1 : prevIndex - 1
);
  };

  //Slide carrousel working
  useEffect(() => {
    const slideInterval = setInterval(nextPicture, 3000)
    return () => clearInterval(slideInterval)
  }, [])

return (
<div className="bg-#616161">
<div className="flex items-center justify-center min-h-screen relative ransition-transform ease-out duration-500"
    style={{ transform: `translateX(-${prevIndex * 100}%)` }}>
  <div >
    <img
      className="h-[600px] w-[450px] mx-auto"
      src={data[currentPictureIndex]?.urls.small}
      alt="unplash images"
    />
   <div className="relative inset-0 flex items-center justify-center gap-14">
    <button onClick={previousPicture}className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
        <ChevronLeft size={30} />
       </button>
    <button onClick={nextPicture}className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
    <ChevronRight size={30} />
    </button>
  </div>
  </div>
</div>
</div>
);
}