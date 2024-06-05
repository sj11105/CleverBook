'use client'
import React from 'react';
import { useState } from 'react';
import styles from '../Carousel.module.css';
const SectionFive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg',
    'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg',
    'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-800.png',
    'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <>
    <div className='w-[100vw] h-[700px] bg-gray-100 mt-6'>
      <h1 className='text-2xl bold ml-[600px] mt-[60px] absolute'>Get cleverbook and get</h1>
 
    <div>
   




  
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>❮</button>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
          >
            <div className='text-black flex mt-[120px] bg-white rounded-xl'>
            <div> <img src={image} alt={`Slide ${index}`} className={styles.carouselImage} /></div>
              <h1 className='text-xl text-bold w-[400px]  ml-[150px] md:ml-[560px] mt-[70px] absolute'>Purpose-Built and <br></br> everusing Technology</h1>
              <p className='mt-[150px] -ml-[30px] w-[700px]'>Our demand forecasting engine has been meticulously built while <br></br>our ml engine constantly trains on year of dataand is ever-<br></br> evolving</p>
             
            </div>
            
           
          </div>
          
        ))}
      </div>
      <button onClick={nextSlide} className={styles.arrow}>❯</button>
    </div>


   </div>
   </div>
   </>
   
  )
}

export default SectionFive