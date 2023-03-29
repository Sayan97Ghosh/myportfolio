// import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';
import React from 'react';
import "./Github.css";


const Github = () => {
  return (
    <>
     <div className='rdx ' >
         <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block mt-6">
                Github Stats & Calender
              </h2>
      <div className='cards'>
      <img src="https://github-readme-stats.vercel.app/api?username=Sayan97Ghosh&show_icons=true&locale=en&theme=radical" alt="sayan97ghosh" height="139" />
       
       <img src="https://github-readme-streak-stats.herokuapp.com/?user=Sayan97Ghosh&show_icons=true&locale=en&theme=radical" alt="sayan97ghosh" />
      </div>
      <div className='second'>
      <GitHubCalendar className="usecase" username="Sayan97Ghosh" year={new Date().getFullYear()} />
      </div>
       
      
    </div>
    </>
   

          
    
    
     
  )
}

export default Github