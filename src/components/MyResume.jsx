import React, { useState } from 'react'
import CommonHead from './commonHead'
import { ResumeData } from './ResumeItmes/ResumeData'
import EducationAndThree from './ResumeItmes/EducationAndThree'
import ProfessionalSkills from './ResumeItmes/ProfessionalSkills'

const MyResume = () => {
    const[change,setChange]=useState("Education")
    const CatagoriesResume=()=>{
        if(change==="Education"){
           return(
            <>
             <EducationAndThree leftHead={"1998-2010"} leftSubhead={"Education Quality"} rightHead={"2010-2022"} rightSubhead={"Job Experience"} />
            </>
           )
        }else if(change==="Experience"){
           return(
            <>
             <EducationAndThree leftHead={"2010-2022"} leftSubhead={"Job Experience"} rightHead={"2001-2020"} rightSubhead={"Trainer Experience"} />
            </>
           )
        }
        else if(change==="Achievements"){
            return(
                <>
                <EducationAndThree leftHead={"2007-2010"} leftSubhead={"Company Experience"} rightHead={"2007-2010"} rightSubhead={"Job Experience"} />
                </>
            )
        }
        else if(change==="Professional Skills"){
            return(
                <>
                <ProfessionalSkills leftHead={"2007-2010"} leftSubhead={"Company Experience"} rightHead={"2007-2010"} rightSubhead={"Job Experience"} />
                </>
            )
        }
    }
  return (
    <div id='resume' className='flex flex-col gap-10'>
        <div className='m-auto'>
        <CommonHead head={"+2 YEARS OF EXPERIENCE"} subhead={"My Resume"} />
        </div>
        <div className='grid sm:grid-flow-row sm:grid-cols-4 w-full list-none p-0 rounded-md bg-[#1a1d20] gap-0'>
            {ResumeData.map((data)=>{
                return(
                    <>
                    <li onClick={()=>setChange(data.topic)} className={`border-[1px] border-solid p-8 text-center hover:bg-[#141618] cursor-pointer  rounded-md ${change===data.topic?"border-designColor":"border-none"}`}>{data.topic}</li>
                    </>
                )
            })}
        </div>
       
       <CatagoriesResume />
       
        
    </div>
  )
}

export default MyResume