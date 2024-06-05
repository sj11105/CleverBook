import React from 'react'

function SectionFour() {
  return (
    <div className='flex-row md:flex-col'>
      <ul>
        <li>      <h1 className='mt-[500px] md:mt-[250px] ml-[60px] md:ml-[360px] text-bold text-2xl md:text-3xl w-[350px] md:w-[800px]'>Things Your Spreadsheet wishes it could do</h1></li>
        <li><div className=' w-[300px] md:w-[700px]  h-[500px] md:h-[750px]  ml-[40px] md:ml-[680px] mt-[50px] md:mt-[80px] rounded-2xl box absolute'>
         <img className=' w-[600px] md:w-[650px]  mt-[150px] md:mt-[200px] ml-[10px] md:ml-[40px] absolute' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1080.webp" alt="" srcset="" />
      </div></li>
        <li> <div>
        <h2 className=' ml-[60px] md:ml-[80px]  mt-[600px] md:mt-[100px] text-3xl info'>Accurate Demand Forecasting</h2>
        <p className=' ml-[50px] md:ml-[70px] mt-[30px] text-gray-900'>Dynamically predict future demand across all channels,with high<br></br>
          accuracyand lowerst granularity.cleverbook takes into account<br></br>
          what traditional forecast don't tends,real-time market signals,<br></br>
          promotional activities,and even logistics disruptions.<br></br>
          </p>
          <button className='mt-5 ml-[70px] info'>Learn more</button>
      </div></li>
      <li>
      <div  className='w-[500px] '>
      <ul >
           
        <li className='mt-[40px] ml-[40px] text-2xl text-bold border-b-2  '>Helix:Workflow automation</li>
        <li className='mt-[50px] text-2xl ml-[40px] text-bold border-b-2'>Automated Purchase Planning</li>
        <li className='mt-[50px] text-2xl ml-[40px]  text-bold border-b-2'>Automated Distribution Planning</li>
        <li className='mt-[50px] text-2xl ml-[40px]  text-bold border-b-2'>Easy Integration</li>
        <li className='mt-[50px] text-2xl  ml-[40px] text-bold border-b-2'>Custom Dashboard</li>
        <li className='mt-[50px] text-2xl  ml-[40px] text-bold border-b-2'>Consensus Planning</li>
      </ul>
      </div></li>
     
      <li><button className='rounded-full features  ml-[100px] md:ml-[600px] mt-[50px] border p-4'>View All Features</button></li>
      </ul>

     
      
      
    </div>
  )
}

export default SectionFour