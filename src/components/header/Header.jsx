import React from 'react'
import './header.css'
const Header = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='left-col'>
          <p className='subhead'>CONTRACTOR ENGINEER</p>
          <h1>Building The Future On A Foundation Of Excellence</h1>
          <p>Create. Enhance. Sustain</p>

          <div className='hero-cta'>
            <a href='/' className='primary-cta'>
              Contact Us
            </a>
          </div>
        </div>

        <img
          src='https://source.unsplash.com/rHzv5r-_CE8'
          className='hero-img'
          alt='BG Construction'
        />
      </div>
    </section>
  )
}

export default Header
