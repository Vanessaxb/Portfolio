import '../App.css';
import { FaGithub } from "react-icons/fa";
import ReactPlayer from 'react-player'

export default function Portfolio () {
    return (
        <div className='flex-col '>
            <h1 className="mt-36 font-black text-gray-500 text-6xl font-raleway">PROJECTS</h1>
            <div className='flex-col items-center p-20 mt-28 '>
                <div className='flex justify-start'>
                    <div className='rounded-3xl p-1 shadow bg-gray-200/80'>   
                        <ReactPlayer         
                        url={require("../images/MemoryGameVideo.MP4")}
                        controls={true}
                        width="500px"
                        height="450px"   
                                             
                        />
                       
                    </div>
                    <div className='rightContainer'>
                        <h1 className=' text-4xl text-green-500 font-raleway mb-5'>Memory Game</h1>            
                        <p className='font-raleway text-lg ml-7'>This kid's memory game features: a Win state, <br/> a Lose state, Timer, Multiple Rounds, <br/> a Reset-Button and a Click-Counter. <br/>It was built with CSS with FlexBox and JavaScript.</p>
                        <div className='flex justify-center p-8 '>
                            <a href="https://github.com/Vanessaxb/Memory-Game.git" target='_blank' rel="noreferrer">
                                <FaGithub size={48} />
                            </a>
                            <a className=" p-2 ml-3 rounded-xl text-white bg-green-500 font-raleway hover:text-red-500 "href="https://vanessaxb.github.io/Memory-Game/" target='_blank'  rel="noopener noreferrer">
                            See Live Version
                            </a>
                        </div>
                    </div>    
                </div>
                <div className='flex justify-end mr-2 mt-24 '>
                    <div className='p-3'>
                        <h1 className=' text-4xl text-green-500 font-raleway mb-5 mt-0'>Stocks App</h1>            
                        <p className='font-raleway text-lg mr-7'>If you'd like to check live rates for your <br/>favorite stocks, look no further. <br/> This was a school assignment that I had lots of fun with. <br/> It was built with CSS with FlexBox and JavaScript.</p>
                        <div className='flex justify-center p-8'>
                            <a href="https://github.com/Vanessaxb/stocks-app.git" target='_blank' rel="noreferrer">
                                <FaGithub size={48} />
                            </a>
                            <a className="p-2 ml-3 rounded-xl text-white bg-green-500 font-raleway hover:text-red-500 "href="https://vanessaxb.github.io/Memory-Game/" target='_blank'  rel="noopener noreferrer">
                            See Live Version
                            </a>
                        </div>
                    </div>    
                    <div className='p-0'>            
                        <img className="h-[350px] w-[500px] rounded-3xl p-1 shadow bg-gray-200/80" 
                            src={require("../images/StockApp.png")}
                            alt="Stock App"
                        />
                    </div>
                </div>
         </div>
    </div>  
        
    )
}