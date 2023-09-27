import React, { useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-scroll'
import { navLinksdata } from '../constants'
import { motion } from 'framer-motion'

const Navbar = () => {
    
    // const[navActive,setNavActive]=useState("Home")
    const[toggle,setToggle]=useState(false)


    const navVarients={
        hidden:{
            x:"-100vh"
        },
        visible:{
            x:0,
            transition:{
               delay:0.5,
               when:"beforeChildren",//by adding this object the children will appare before the parent
               staggerChildren:0.4
            }
        }
    }
    
    const listVarients={
        hidden:{
            x:-200,
            opacity:0
        },
        visible:{
            x:0,
            opacity:1
        }
    }


  return (
   
        <div className='py-2 px-8 flex justify-between items-center font-titleFont z-10 border-b-[1px] border-b-gray-600 bg-bodyColor sticky top-0'>
            <motion.div className='flex gap-2 items-center justify-center font-semibold' variants={navVarients} initial='hidden' animate='visible'>
                <img className='h-[50px] w-[50px]' src={logo} alt="logo" /><p>Unish Rai</p>
            </motion.div>

            <motion.ul className='gap-8 sm:flex hidden' variants={navVarients} initial='hidden' animate='visible'>
                {navLinksdata.map((link,index)=>{
                    return(
                        <motion.li variants={listVarients} key={index} className={`cursor-pointer hover:text-designColor`}>
                           {/* <a href={`#${link.link}`}>{link.title}</a> */}
                           <Link 
                           activeClass='active'
                           to={link.link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>{link.title}</Link>
                        </motion.li>
                    )
                })}
            </motion.ul>
{/* mobile responsive */}
            <motion.ul className={`gap-8 sm:hidden flex flex-col bg-gray-900 absolute right-[10%] top-[100%] p-10 rounded-2xl w-[300px]  ${toggle?"flex":"hidden"}`}>
                {navLinksdata.map((link,index)=>{
                    return(
                        <motion.li variants={listVarients} key={index} className={`cursor-pointer hover:text-designColor`}>
                        {/* <a href={`#${link.link}`}>{link.title}</a> */}
                        <Link 
                        activeClass='active'
                        to={link.link}
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}>{link.title}</Link>
                     </motion.li>
                    )
                })}
            </motion.ul>

           <motion.div variants={navVarients} initial='hidden' animate='visible' className='sm:hidden flex' >
           {toggle?<h1 onClick={()=>setToggle(!toggle)} className='text-[30px] bg-black text-designColor py-2 px-4 rounded-full'><i class="bi bi-x-lg"></i></h1>:<h1  onClick={()=>setToggle(!toggle)} className='text-[30px] bg-black text-designColor py-2 px-4 rounded-full'><i class="bi bi-list"></i></h1>
}
           </motion.div >
        
        </div>

  )
}

export default Navbar