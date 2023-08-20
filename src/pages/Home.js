import React, { useState, useEffect } from "react"
import {data} from '../data/photos'
// import Carousel from "../components/Carousel"
import { ChevronLeft, ChevronRight } from "react-feather"
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";


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
<div className="p-4 md:p-20 flex flex-col items-center justify-center min-h-screen">
  <div className="fixed left-0 top-1/2 transform -translate-y-1/2 ">
    <a href="https://github.com/Vanessaxb" target='_blank' rel="noreferrer">
      <FaGithub size={40} />
    </a>
    <br/>
    <a href="https://www.linkedin.com/in/vanessa-beattie/" target='_blank' rel="noreferrer">
      <FaLinkedin size={40}/>       
    </a>
  </div>
  <div className="relative mt-8 md:mt-16">
    <div style={{ transform: `translateX(-${prevIndex * 100}%)`}}>
      <img
        className="transition-transform ease-out duration-500 h-[300px] md:h-[600px] w-[240px] md:w-[440px] mx-auto rounded-3xl p-1 shadow bg-white/80"
        src={data[currentPictureIndex]?.urls.small}
        alt="unplash images"
      />
    </div>
        <div className="absolute top-1/2 -left-8 md:-left-12 flex items-center p-4 md:p-8">
          <button onClick={previousPicture} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ChevronLeft size={30} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-8 md:-right-12 flex items-center p-4 md:p-8">
          <button onClick={nextPicture} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
      <div className="pHome mt-6 md:mt-12">
    <p className="font-raleway text-lg md:text-3xl text-center md:text-center">Hi, I'm a Software Engineer. <br/>
    My love for tech, people and travelling is what moves me.</p>
  </div>
  <div className="buttonHome text-center md:text-left p-4">
    <Link className="font-raleway hover:text-red-500 " to='/Portfolio'>View my work</Link>
  </div>

        <section id="Projects">
            {/* <h2>Project</h2> */}
        </section>
    </div>


);
}
