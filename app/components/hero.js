import React from 'react'
import Image from 'next/image';
import bottomRight from '../../public/banner/bottomRight.png'
import bottomLeft from '../../public/banner/bottomLeft.png'

function Hero() {
  return (
     <section className='my-5 md:sesOneMainH'>
<div className='  sOneMain mx-auto '>
    <div className='flex'>
        <div className='bg-red-200 w-full'>One</div>
     </div>
     {/* bottom image */}
     <Image className='imageRight'   src={bottomRight}
        alt="Description of the image"
        width={100}  
        height={100}/>  
        <Image className='imageLeft' src={bottomLeft}
        alt="Description of the image"
        width={100}  
        height={100}/> 
</div>
      </section>
  )
}

export default Hero