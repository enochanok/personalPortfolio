import React from 'react';
import './Home.css'
import heroSectionImage from '../../assets/heroSection.png'
import { MdWavingHand } from "react-icons/md";
import { CiMail } from "react-icons/ci";



const Home = () => {
  return (
    <div className='font container-fluid d-flex flex-column'>
      <div className='navigation d-flex justify-content-between p-1'>
        <div className='d-flex align-item-center justify-content-center'>
          
        <span className='mailbox'><CiMail/></span>
       <a href="#"> <p>hanoktamang03@gmail.com</p></a>
        
       </div>
        <div className='d-flex justify-content-between '>
          <p className='px-2'><a href="">Linkedin</a></p>
          <p>/</p>
          <p className='px-2'><a href="">Github</a></p>
          <p>/</p>
          <p className='px-2'><a href="">Instagram</a></p>
        </div>
      </div>
      <div >
      <hr className='line' />
    </div>
        <div></div>
        <div className="hero-section d-flex justify-content-center align-item-center">
        <div className="img-container width-100 d-flex flex-column justify-content-center align-item-center">
         
            <img src={heroSectionImage} className="mx-auto picture img-fluid rounded-circle border border-1" alt="img" />
            <p className='p-2'>I'm Hanok Tamang <span className='handwave'><MdWavingHand/></span></p>
            <h1 className='mx-auto'>Developing software to transform brand experiences.</h1>
          </div>
        
        </div>
       
    </div>
    
  );
};

export default Home;
