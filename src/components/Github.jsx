// import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';
import React from 'react';
import "./Github.css";


const Github = () => {
  return (
  <>
    <div className='rdx px-4 py-6'>
      <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6 relative before:content-about before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block mt-6">
        Github Stats & Calendar
      </h2>

      {/* Stats & Streak Section */}
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 mb-6'>
        <img
          className='w-full max-w-[350px]'
          src="https://github-readme-stats.vercel.app/api?username=Sayan97Ghosh&show_icons=true&locale=en&theme=radical"
          alt="GitHub Stats"
        />

        <img
          className='w-full max-w-[350px]'
          src="https://github-readme-streak-stats.herokuapp.com/?user=Sayan97Ghosh&show_icons=true&locale=en&theme=radical"
          alt="GitHub Streak"
        />
      </div>

      {/* Calendar Section */}
      <div className='flex justify-center'>
        <div className='w-full'>
          <GitHubCalendar
            className="usecase w-full"
            username="Sayan97Ghosh"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </div>
  </>
);

}

export default Github