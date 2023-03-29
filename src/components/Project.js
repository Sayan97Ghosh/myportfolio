import React from 'react';

const Project = ({ item }) => {
  return (
    <div   key={item.id} className='flex flex-col items-center text-center drop-shadow-lg  p-3 rounded '>
      <div className='mb-4 h-2xl   '>
        <img className='rounded-2xl w-300 ease-in-out duration-300 h-xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-md mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3 p-2'>{item.name}</h3>
      <p  className='text-base max-w-md capitalize text-black '>
      {item.despo}
      </p>
      <div className='flex flex-row items-center text-center'>
        <button className='mt-16 mr-5 py-3 px-5' style={{"backgroundColor":"green" ,"borderRadius":"10px","color":"#fff"}}><a href={item.source} target="_blank">Source code</a></button>
        <button className='mt-16 mr-5 py-3 px-5' style={{"backgroundColor":"red","borderRadius":"10px","color":"#fff"}}><a href={item.live} target="_blank">Live demo</a></button>
      </div>
    </div>
  );
};

export default Project;