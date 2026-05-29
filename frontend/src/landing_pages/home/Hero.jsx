import React from 'react'
import HeroImage from '.././../assets/images/homeHero.png'

const Hero = () => {
  return (
    <div className='container hero-section p-4 p-md-5 mb-5'>
      <div className='row text-center'>
        <img src={HeroImage} alt='heroImage' className='hero-image mb-4 mb-md-5'/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform invest in stocks, derivatives, mutual funds, and more  </p>
        <button className='btn btn-primary p-2 mb-5 landing-cta-btn'>Signup now</button>
      </div>
    </div>
  )
}

export default Hero
