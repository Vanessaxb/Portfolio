import React, { useState, useEffect } from "react"
import {data} from '../data/photos'
// import Carousel from "../components/Carousel"
import { ChevronLeft, ChevronRight } from "react-feather"
import { Link } from "react-router-dom";


export default function Home () {
const [pictures, setPictures] = useState([])
const [currentPictureIndex, setCurrentPictureIndex] = useState(0);



// const getPictures = async () => {
//     try{
//         // const response = await fetch(`https://api.unsplash.com/collections/kpSoldTUxrI/photos?client_id=3kwIgCi1EOghLM6FjKr4fwz6uqHAIz9zUm3KLMhehn8&count=27`)
//         // const response = await fetch(`https://api.unsplash.com/collections/kpSoldTUxrI/photos?client_id=${process.env.REACT_APP_PORTFOLIO_KEY}`)
//         // const response = await fetch(`https://api.unsplash.com/photos/random?collections=kpSoldTUxrI&client_id=${process.env.REACT_APP_PORTFOLIO_KEY}&count=27`)
//         const response = await fetch(`https://api.unsplash.com/photos/random?collections=kpSoldTUxrI&client_id=3kwIgCi1EOghLM6FjKr4fwz6uqHAIz9zUm3KLMhehn8&count=27`)
//         console.log(process.env.REACT_APP_PORTFOLIO_KEY);
//         const dataArr = await response.json()
//         // const data = dataArr
//         console.log(dataArr);
//         setPictures(dataArr)
//     }

// catch(e) {
//     console.error(e);
//     }}

// useEffect (() => {
// getPictures()
// }, [])

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

console.log(data.length);
return (
<div >
    <div className="overflow-hidden relative my-20">
        <div
        style={{ transform: `translateX(-${prevIndex * 100}%)` }}>
            <img
            className="flex items-center justify-center ransition-transform ease-out duration-500 h-[600px] w-[440px] mx-auto rounded-3xl p-1 shadow bg-white/80"
            src={data[currentPictureIndex]?.urls.small}
            alt="unplash images"
            />
        
        </div>
            <div className="absolute inset-0 flex items-center justify-between p-80 mx-3">
                <button onClick={previousPicture}className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white ml-32">
                    <ChevronLeft size={30} />
                </button>
                <button onClick={nextPicture}className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white mr-32">
                    <ChevronRight size={30} />
                </button>
            </div>
    </div>
    <div className="pHome">
        <p className="font-raleway">Hi, I'm a Software Engineer. <br/>
        My love for tech, people and travels is what moves me.</p>
    </div>
    <div className="buttonHome">
        <Link className="font-raleway hover:text-red-500 " to='/Portfolio'>View my work</Link>
         
        
    </div>
    <section id="Projects">
        {/* <h2>Project</h2> */}
    </section>
</div>

);
}
