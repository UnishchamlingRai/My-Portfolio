import React from 'react'
import CommonHead from './commonHead'
import MyProjectbox from './MyProjectbox'
import { myProjectData } from '../data'

const MyProject = () => {
  return (
    <div id='projects' className='flex flex-col gap-10 py-[50px] mb-[20px] items-center'>
        <CommonHead head="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" subhead={"MY PROJECTS"}/>
        <div className='sm:grid flex flex-col sm:grid-flow-rows gap-12 grid-cols-2 lg:grid-cols-3 '>
            {myProjectData.map((data,index)=>{
                return(
               
                    <MyProjectbox img={data.img} title={data.title} dis={data.dis} key={index} projectLink={data.projectLink} githubLink={data.githubLink} />
               
                )
            })}
        </div>

    </div>
  )
}

export default MyProject