import React from 'react'
import './Hero.css'
import utensil from '../Assets/utensil.png'
import polygon1 from '../Assets/left-polygon.png'
import polygon2 from '../Assets/right-polygon.png'

export const Hero = () => {
  return (
    <div>
         <div className='hero'>
                <h2>Transforming</h2>
                <h1>Mess Into Majesty</h1>
                <p>We perform an exceptional thorough cleaning, one  of the most detailed you'll find. <span>98% of our customers are satisfied with our services.</span></p>
                <button className='btn'>See Details</button>
                <div className='uten'>
                <img src={utensil} alt=''/>
                </div> 
                <section className='polygon1'>
                    <img src={polygon1} alt='' first/>
                </section>
                <section className='polygon2'>
                    <img src={polygon2} alt='' first/>
                </section>
            </div>
    </div>
  )
}
