import React from 'react'

function Navbar() {
  return (
    <div className='bg-black h-[50px] -mt-[40px] w-[100vw] text-white relative hidden sm:block'>
    <div><img className='w-[150px] ml-[50px] mt-[40px] ' src="logo.png" alt="" srcset="" /></div>
      <div>
        <ul className='flex gap-6 ml-[500px] -mt-[20px]'>
          
        
          <li>Product</li>
          <li>Pricing</li>
          <li>Industry</li>
          <li>Customer Stories</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <ul className='flex gap-10 justify-end -mt-[30px] mr-4'>
          <li className='text-pink-300'>Login</li>
          <li><button className='cta-button rounded-2xl'>Talk to us</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar