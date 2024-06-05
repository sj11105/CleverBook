'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import styles from '../MobileNav.module.css';

function MobileNavigattion(){ 
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};
  
  
      // components/MobileNav.js

 

  return (
    <div className='block sm:hidden'>
    <nav className={styles.nav}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.bar1 : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar2 : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar3 : ''}`}></div>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ''}`}>
        <li>
          <Link href="/">Product</Link>
        </li>
        <li>
          <Link href="/about">Pricing</Link>
        </li>
        <li>
          <Link href="/services">Industry</Link>
        </li>
        <li>
          <Link href="/contact">Customer Stories</Link>
        </li>
        <li>
          <Link href="/contact">About</Link>
        </li>
        <li>
          <Link href="/contact">Blog</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default MobileNavigattion;
