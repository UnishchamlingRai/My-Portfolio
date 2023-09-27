import React from "react";
import { MyResume, bannerImg } from "../assets";
import { commonStyle } from "../style";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import { FaFacebook, FaLinkedin,  FaReact, FaTwitter,FaFigma} from 'react-icons/fa';

import { SiTailwindcss} from "react-icons/si";




const Hero = () => {
  const [text] = useTypewriter({
   words:["Coder.","Frontend Developer","UI Designer"],
   loop:true,
   typeSpeed:10,
   delaySpeed:2000
  })
  return (
    <section id="home" className="gap-10 flex mt-10 justify-between items-center lg:flex-row flex-col border-solid border-black border-b-[1px] py-6">
      <div className="flex flex-col gap-10 flex-1">
        <div className="flex gap-2 flex-col">
          <p>WELCOME TO MY WORLD</p>
          <h1 className="text-6xl text-white font-bodyFont font-semibold">
            Hi, I'm<span className="text-designColor"> Unish Rai</span>
          </h1>
          <span className="text-2xl text-white font-semibold">a {text}<Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f"/></span>
          

          <p className="font-titleFont text-[15px]">
          Hey there, welcome to my Portfolio !

I'm Unish, a highly motivated and dedicated React Frontend Developer with strong knowledge of JavaScript, CSS, HTML, Tailwind CSS, Bootstrap, Redux, Redux Toolkit, and Framer Motion. Skilled in UI/UX design with expertise in Figma and Photoshop. Seeking an opportunity to leverage my skills and knowledge to contribute to a dynamic development team while continuously enhancing my expertise.
          </p>
        </div>

        <div className="flex justify-between sm:flex-row flex-col gap-10">
          

          <div className="flex flex-col gap-3">
            <p>FIND ME IN</p>
            <ul className="flex gap-4">
              <li className={`${commonStyle.bannerIcons}`}>
              <a href="https://www.facebook.com/profile.php?id=100087187351831"><FaFacebook /></a>
              </li>
              <li className={`${commonStyle.bannerIcons}`}>
              <a href="https://www.linkedin.com/in/unish-rai-4a1b4324b/"><FaLinkedin /></a>
              </li>
              <li className={`${commonStyle.bannerIcons}`}>
              <a href="https://twitter.com/UnishRai14"><FaTwitter /></a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p>BEST SKILL IN</p>
            <ul className="flex gap-3">
              <li className={`${commonStyle.bannerIcons}`}>
                <FaReact />
              </li>
              <li className={`${commonStyle.bannerIcons}`}>
                <FaFigma />
            
              </li>
               <li className={`${commonStyle.bannerIcons}`}>
                <SiTailwindcss />
              </li>
             
            </ul>
          </div>

        </div>

       
<a href={MyResume} download="Resume" className={`w-90 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300`} >
  Click Here To  Download My Resume
</a>
      </div>

      <div className="flex flex-1">
        
        <div className="lg:block hidden bg-gradient-to-r rounded-2xl shadow-shadowOne h-[608px] w-[580px] absolute z-[0] top-[50%]">
       
        </div>
        <img src={bannerImg} alt="" className="z-[2]"/>
      </div>
    </section>
  );
};

export default Hero;
