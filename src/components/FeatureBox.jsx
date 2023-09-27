import React from 'react'

const FeatureBox = ({icon,title,des}) => {
  return (
   <div className='h-[400px] bg-gradient-to-r shadow-shadowOne cursor-pointer rounded-md p-10 hover:bg-gradient-to-b hover:bg-black from-bodyColor to-[#202327] hover:from-black hover:to-[#1e2024] transition-all duration-1000'>
     <div className='group flex flex-col gap-4 h-[250px] overflow-y-hidden translate-y-5 hover:translate-y-0 hover:h-[300px] transition-all duration-1000'>
        <span className='font-bold text-[40px] text-designColor'><i className={icon}></i></span>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p>{des}</p>

        <div className='text-designColor font-bold text-[30px] mt-3'>
        <i class="bi bi-arrow-right"></i>
        </div>
    </div>
   </div>
  )
}
export default FeatureBox