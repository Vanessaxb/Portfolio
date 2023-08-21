import React, { useState, useEffect } from "react"
import {data} from '../data/photos'
import { ChevronLeft, ChevronRight } from "react-feather"
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home () {
const [pictures, setPictures] = useState([])
const [currentPictureIndex, setCurrentPictureIndex] = useState(0);



const getPictures = async () => {
    try{
        
        const response = await fetch(`https://api.unsplash.com/photos/random?collections=kpSoldTUxrI&client_id=${process.env.REACT_APP_PORTFOLIO_KEY}&count=27`)
        const dataArr = await response.json()
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

console.log(data.length);
return (
<div className="p-4 md:p-20 flex flex-col items-center justify-center min-h-screen mt-3 md:mt-6">
  <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ">
    <a href="https://github.com/Vanessaxb" target='_blank' rel="noreferrer">
      <FaGithub size={40} />
    </a>
    <br/>
    <a href="https://www.linkedin.com/in/vanessa-beattie/" target='_blank' rel="noreferrer">
      <FaLinkedin size={40}/>       
    </a>
  </div>
  <div className="relative mt-10">
    <div style={{ transform: `translateX(-${prevIndex * 100}%)`}}>
      <img
        className="transition-transform ease-out duration-500 h-[300px] md:h-[600px] w-[240px] md:w-[440px] mx-auto rounded-3xl p-1 shadow bg-white/80"
        src={data[currentPictureIndex]?.urls.small}
        alt="unplash images"
      />
    </div>
        <div className="absolute top-1/2 -left-8 md:-left-12 flex items-center p-4 md:p-8">
          <button onClick={previousPicture} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white ml-3 md:ml-7">
            <ChevronLeft size={30} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-8 md:-right-12 flex items-center p-4 md:p-8">
          <button onClick={nextPicture} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white mr-3 md:mr-7">
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

<section>
  <div className="relative max-w-screen-xl mx-auto ">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover opacity-70 z-0"
      src={require("../images/HomeBackground.jpg")}
      alt="Background"
    />
  </div>
  <div className="flex flex-col items-center mt-28 font-raleway ">
    <img
      className="h-[300px] w-[245px] rounded-full shadow p-1 bg-gray-200/80 text-gray-800 z-20"
      src={require("../images/profile.jpg")}
      alt="Profile Picture"
    />
    <div className="bg-gray-600/20 p-4 shadow-md rounded-md mt-4 backdrop-blur z-10">
      <h2 className="mt-4 text-3xl md:text-6xl mb-4 z-20 text-red-500">Vanessa Beattie</h2>
      <p className="font-raleway text-base md:text-lg text-center p-2 md:p-4 z-20 text-white">
       
        Proficient across a spectrum of technologies, including <span className="text-green-400">HTML, CSS, Tailwind,
        JavaScript, MVC Framework, React/Redux, Express JS, Node JS, MERN, SQL, PostgreSQL
        Restful Routes-API, Express Mongoose and MongoDB</span>, I'm committed to delivering 
        innovative solutions that meets the user needs with cuttting-edge technology. 
        My journey in the tech industry is complemented by my academic
        accomplishments: <span className="text-green-400">a
        degree in Electronics Engineering and an MBA</span>.
        
        <br />
        <br />
        With professional experience spanning Telecom, Humanitarian Aid, and
        Finances, I bring a diverse background to the world of software
        engineering. Fluent in three languages— <span className="text-green-400">Portuguese, Spanish, and
        English</span>—I've had the privilege of working across more than ten
        different countries. <br/>In these dynamic environments, I've led
        transcultural teams and managed multi-million-dollar project budgets,
        honing my adaptability and communication skills.
      </p>
    </div>
  </div>
</div>
</section>
</div>

);
}
