import React from "react";
import "./common.css";
// import AOS from 'aos';
import "aos/dist/aos.css";
import dp from "../assets/img/dp.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-20">
          <div className="flex-1 flex flex-col items-start scale-up-center">
            <p className="text-accent text-4xl  mb-[18px]">
              Hey, I'm Sayan Ghosh! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[10px] ">
              Full-Stack Web Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"></p>
            <a
              href="https://drive.google.com/file/d/1QvC9PkYhvNrW88w0cZiNFyV74Ksqb39g/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
                Resume
              </button>
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full ">
            <img className="slide-up-center imageJW" src={dp} alt="JC" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
