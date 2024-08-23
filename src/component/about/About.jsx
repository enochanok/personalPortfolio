import React from 'react'
import './About.css'
import { GoPencil } from "react-icons/go";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { AiOutlineDesktop, AiOutlineThunderbolt } from "react-icons/ai";






const About = () => {
  return (
    <div className='container-about'>
      <h1 className='d-flex justify-content-center align-item-center mx-auto pb-4'>Field of focus and interest.</h1>
      <div className='card-section d-flex justify-content-between align item-center m-2'>
        <div className="card border border-1 px-4">
        <span className='card-icon'><GoPencil /></span>
          <p className='card-title'>UI & UX</p>
          <p className='card-description'>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
        </div>

        <div className="card border border-1 px-4">
        <span className='card-icon'><IoPhonePortraitSharp /></span>
          <p className='card-title'>Web & Mobile App</p>
          <p className='card-description'>Transforming ideas into exceptional web and mobile app experiences.</p>
        </div>

        <div className="card border border-1 px-4">
        <span className='card-icon'><AiOutlineDesktop /></span>
          <p className='card-title'>Design & Creative</p>
          <p className='card-description'>Crafting visually stunning designs that connect with your audience.</p>
        </div>

        <div className="card border border-1 px-4">
        <span className='card-icon'><AiOutlineThunderbolt /></span>
          <p className='card-title'>Development</p>
          <p className='card-description'>Bringing vision to life with the latest technology and design trends.</p>
        </div>
      </div>
    </div>
  )
}

export default About
