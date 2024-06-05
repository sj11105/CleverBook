import React from 'react'

function Hero() {
  return (
    <div className='hero w-[420px] md:w-[100vw] h-[1000px] md:h-[700px] text-white absolute '>
      
      <h1 className=' text-3xl md:text-6xl ml-[50px] mt-[70px]'>Every order <br></br><br></br>fulfilled,<span className='span1'> on  </span> <span className='span2'>time</span></h1>
<p className='ml-[30px] mt-[40px]'>Eliminate overstocking and under-stocking with CleverBook. Built by supply-chain experts,<br></br>
 it brings the same technology used by large global brands to power fast-growing <br></br>
 startups. In short, we make supply meet demand, and then help you grow both.</p>
 <p><img className=' ml-[230px] md:ml-[300px] mt-[90px] absolute' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="" srcset="" /></p>
    <div><img className=' ml-[60px] md:ml-[710px]  mt-[200px] md:-mt-[300px] absolute' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="" srcset="" /></div>
    <button className='rounded-2xl mt-[70px] ml-[40px] md:ml-[70px] start '>Get started with CleverBook</button>
    </div>
  )
}

export default Hero