import React from "react";
import "./common.css";
// import img
import Image from "../assets/img/About/Image.gif";
import { Link } from "react-scroll";
import dp from "../assets/img/dp.png"
const bs = {
  border:"1px solid #35B4E2",
  borderRadius:"7%",
  margin:"auto"
}
// import Image from '../assets/img/about.webp';
// const Image = 'https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/coding-freak.gif'
const About = () => {
  return (
    <section className="section bg-tertiary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img style={bs} className="lg:hidden h-full w-[370px]" src={dp} alt={'JC'}/>
          <img
            className=" hidden lg:block object-cover h-full w-[450px] md:mx-auto lg:mx-0 rounded-2xl coderImage"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Sayan Ghosh
              </h2>
              <p className="mb-4 text-accent">Full-Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                 A passionate and experienced Full-Stack Web Developer from Masai School with a strong foundation in the MERN stack.  
                <br /><br />
                Enthusiastic about AI and always eager to explore new technologies to solve real-world problems.  
                <br /><br />
                I thrive in fast-paced environments, love building scalable web apps, and continuously strive to grow as a developer.
              </p>
            </div>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
              to={"contact"}
            >
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
