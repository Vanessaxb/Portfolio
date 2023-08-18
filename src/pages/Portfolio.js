// import { Link } from 'react-feather';
import '../App.css';
import { FaGithub } from "react-icons/fa";
import ReactPlayer from 'react-player'

export default function Portfolio () {
    return (
        <div className='flex-col '>
            <h1 className="my-36 font-black text-gray-500 text-5xl font-raleway">PROJECTS</h1>
            <div className='flex-col items-center p-20 '>
                <div className='flex justify-start'>
                    <div className='leftContainer'>   
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
                        <div className='flex justify-center p-8'>
                            <a href="https://github.com/Vanessaxb/Memory-Game.git" target='_blank' rel="noreferrer">
                                <FaGithub size={48} />
                            </a>
                            <a className=" p-2 ml-3 rounded-xl text-white bg-green-500 font-raleway hover:text-red-500 "href="https://vanessaxb.github.io/Memory-Game/" target='_blank'  rel="noopener noreferrer">
                            See Live Version
                            </a>
                        </div>
                    </div>    
                </div>
                <div className='flex justify-end mr-32 '>
                    <div className='p-3'>
                        <h1 className=' text-4xl text-green-500 mb-5'>Memory Game</h1>            
                        <p className='font-raleway text-lg ml-7'>This kid's memory game features: a Win state, <br/> a Lose state, Timer, Multiple Rounds, <br/> a Reset-Button and a Click-Counter. <br/>It was built with CSS with FlexBox and JavaScript.</p>
                        <div className='flex justify-center p-8'>
                            <a href="https://github.com/Vanessaxb/Memory-Game.git" target='_blank' rel="noreferrer">
                                <FaGithub size={48} />
                            </a>
                            <a className=" p-2 ml-3 rounded-xl text-white bg-green-500 font-raleway hover:text-red-500 "href="https://vanessaxb.github.io/Memory-Game/" target='_blank'  rel="noopener noreferrer">
                            See Live Version
                            </a>
                        </div>
                    </div>    
                    <div className='p-3'>            
                        <img className="h-[300px] w-[250px] rounded-3xl p-1 shadow bg-white/80" 
                            src={require("../images/memoryGame.png")}
                            alt="Stock App"
                        />
                    </div>
                </div>
         </div>
    </div>  
        
    )
}