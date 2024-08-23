import React from 'react'
import './Footer.css'
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div class="footer-section ">
         <div >
      <hr className='line' />
    </div>
		<div class="container d-flex justify-content-between align-item-center py-3">
			<div class="copyright">
                     © 2024 All rights reserved.
            </div>
            <div className='d-flex justify-content-between'>
            <p className='px-2'><a href="">Linkedin</a></p>
          <p>/</p>
          <p className='px-2'><a href="">Github</a></p>
          <p>/</p>
          <p className='px-2'><a href="">Instagram</a></p>
           
            <button onClick={scrollToTop}>
        <FaArrowUp />
      </button>
      </div>
		</div>
   
	</div>
  )
}

export default Footer
