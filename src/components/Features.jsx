import React from 'react'

import { featuresData } from '../data'
import FeatureBox from './FeatureBox'
import CommonHead from './commonHead'
const Features = () => {
  return (
    <section id='features' className='flex flex-col gap-[30px] mt-[50px] py-10 border-b-[1px] border-black border-solid'>
<CommonHead head="Features" subhead="What I Do"/>
        <div className='sm:grid flex flex-col sm:grid-flow-rows gap-10 grid-cols-2 lg:grid-cols-3'>
            {featuresData.map((data)=>{
                return(
                    <>
                    <FeatureBox key={data.id} icon={data.icon} des={data.des} title={data.title}/>
                    </>
                )
            })}

        </div>
    </section>
  )
}

export default Features