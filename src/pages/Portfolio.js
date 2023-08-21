import "../App.css";
import { FaGithub } from "react-icons/fa";
import ReactPlayer from "react-player";

export default function Portfolio() {
  return (
    <div className="flex-col ">
      <h1 className="flex justify-center mt-10 md:mt-36 font-black text-gray-500 text-3xl md:text-6xl font-raleway text-center ">
        PROJECTS
      </h1>
      <div className=" items-center p-20 mt-6 md:mt-20 ">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="rounded-3xl p-1 shadow bg-gray-200/80 md:mr-4 mb-4 md:mb-0">
            <ReactPlayer
              url={require("../images/MemoryGameVideo.MP4")}
              controls={true}
              width="480px"
              height="420px"
            />
          </div>
          <div className="md:w-1/2 mt-2 md:mt-0">
            <h1 className=" text-2xl md:text-4xl text-green-500 font-raleway mb-3 md:mb-5 text-center ">
              Memory Game
            </h1>
            <p className="font-raleway text-base md:text-lg text-center mb-4">
              This kid's memory game features: a Win state, <br /> a Lose state,
              Timer, Multiple Rounds, <br /> a Reset-Button and a Click-Counter.{" "}
              <br />
              It was built with CSS with FlexBox and JavaScript.
            </p>
            <div className="flex justify-center p-8 mr:8 md:mr-16 ">
              <a
                href="https://github.com/Vanessaxb/Memory-Game.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={48} />
              </a>
              <a
                className="p-3 ml-3 rounded-xl  text-white bg-green-500 font-raleway hover:text-red-500 mt-2 md:mt-0 "
                href="https://vanessaxb.github.io/Memory-Game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Version
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-14 md:mt-28 ml-4 md:ml-28">
          <div className="md:w-1/2">
            <img
              className="h-[350px] md:h-[700] w-full md:w-[490px] rounded-3xl p-1 shadow bg-gray-200/80"
              src={require("../images/StockApp.png")}
              alt="Stock App"
            />
          </div>
          <div className="md:w-1/2 md:mr-52 mt-2 md:mt-0">
            <h1 className=" text-2xl md:text-4xl text-green-500 font-raleway mb-3 md:mb-5 text-center md:text-center">
              Stocks App
            </h1>
            <p className="font-raleway text-base md:text-lg text-center mb-2">
              If you'd like to check live rates for your <br />
              favorite stocks, look no further. <br /> This was school
              assignment was lots of fun. <br/> It was built with
              CSS with FlexBox and JavaScript.
            </p>
            <div className="flex justify-center p-8">
              <a
                href="https://github.com/Vanessaxb/stocks-app.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={48} />
              </a>
              <a
                className="p-3 ml-3 rounded-xl  text-white bg-green-500 font-raleway hover:text-red-500 mt-2 md:mt-0 "
                href="https://vanessab.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Version
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
