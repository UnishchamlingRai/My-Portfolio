import React from 'react'
import { FaGithub } from 'react-icons/fa'


const MyProjectbox = ({img,title,dis,projectLink,githubLink}) => {
  return (
    <div className='group flex flex-col gap-6 rounded-md bg-gradient-to-r shadow-shadowOne hover:bg-gradient-to-b hover:from-gray-900 p-10 hover:gray-900 transition-all duration-1000'>
        <a href={projectLink}><img src={img} alt="" className='rounded-md h-[250px] w-[300px] group-hover:skew-x-3 transition-all duration-1000'/></a>
        <div className='flex justify-between items-center'>
      <a href={projectLink}>  <h1 className='text-designColor cursor-pointer hover:underline'>{title}</h1></a>
        <ul className='list-none flex gap-4'>
            <li className='py-2 px-2 bg-black rounded-full hover:text-designColor cursor-pointer'><a href={githubLink}><FaGithub /></a></li>
           
        </ul>
        </div>
      <p>
      {dis}
      </p>
    </div>
  )
}

export default MyProjectbox