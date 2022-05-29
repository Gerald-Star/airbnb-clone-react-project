import React from 'react'
import './Card.css'

import Katie from '../images/katie-zaferes.png'

import Star from  '../images/star.png'

export default function Card() {
  return (
      <div className='card'>
          <img src={Katie} alt="" className='card--image' />
          
          <div className='card--span'>
              <img src={Star} alt="star" className='card--star'/>
              <span className=''>5.0</span>
              <span className='gray'>(6) . </span>
              <span className='gray'>USA</span>

          </div>

          <p>Life lessons with Katie Zaferes</p>
          <p><span className='bold'>From $136</span> / person</p>

    </div>
  )
}
