import React from 'react'

function Footer
() {
  return (
    <div className='w-[100vw] -mt-[80px] h-[800px] bg-black '>
      <div className='flex'>
        <ul className='flex'>
          <li><div>
            <h1><img className='ml-[60px] w-[300px] md:w-[240px]' src="logo.png" alt="" srcset="" /></h1>
            <p className='hidden sm:block text-white mt-[50px] ml-[60px] '>cleverbook is an AI-powered supply chain software that provides <br></br>
            companies tools for demand forecasting,inventory planning<br></br>
            and more. this helps them have the right amountof stock,<br></br>
            optimise space and fulfil every order</p>
            </div></li>
          <li><div className='flex'><div className='text-white -ml-[180px] md:ml-[380px] mt-[50px] md:mt-[25px] absolute '><ul>
            <li className=' -ml-[150px] mt-10 md:mt-6'>Explore</li>
            <li className='-ml-[150px] mt-10 md:mt-6'>Product</li>
            <li  className='-ml-[150px] mt-10 md:mt-6'>Pricing</li>
            <li  className='-ml-[150px] mt-10 md:mt-6'>Customer stories</li>
            <li  className='-ml-[150px] mt-10 md:mt-6'>Career</li></ul></div>
            <div className='text-white   -ml-[60px] md:ml-[450px] mt-[90px] md:mt-[45px] absolute'><ul><li>Learn</li>
            <li className='mt-6'>About Us</li>
            <li className='mt-6'>Blog</li></ul>
              </div> </div>
            </li>
            
          <li><div className='text-white  mt-[500px] md:mt-[50px] '>
            <ul className=' -ml-[340px] md:ml-[600px]  '>
              <li className='mt-8'>Contact cleverbook</li>
              <li className='mt-6'>sales@getcleverbook.ai</li>
              <li className='mt-6'>Registered office:
                1507,Incubex,11 cross road,<br>
                </br>19th Main Road,Bengaluru,<br></br>
                India,560102
              </li>
              <li className='mt-6'>Corporate Office:
                291,All time space,4th floor, <br></br>15 A cross,Sector-6<br></br>
                HSR Layout,Bengaluru,<br></br>
                India.560102
              </li>
              </ul></div></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer
