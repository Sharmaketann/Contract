import React from 'react'
import './service.css'
import sectionImage from '../../assets/welder.png'

const Services = () => {
  return (
    <section id='about-us' className='features-section'>
      <div className='container'>
        <ul className='features-list'>
          <li>15+ Years of Experience</li>
          <li>Active in Multiple Sectors</li>
          <li>Renowned Quality Centric Organization</li>
          <li>Quality is Our Prior Aim</li>
          <li>Planning, Designing and Constructing</li>
          <li>
            Providing Skilled, Unskilled, Experienced & Non-Experienced Workers.
          </li>
        </ul>

        <img src={sectionImage} alt='Welder' />
      </div>
    </section>
  )
}

export default Services
