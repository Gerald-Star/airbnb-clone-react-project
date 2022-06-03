import React from 'react'
import './Card.css'

// import Katie from '../images/katie-zaferes.png

// import Star from  '../images/star.png'

//pass the props to Card component
// from the props in APP.js, pass these props here. 
//As another method of passing props.

export default function Card(props) {
  return (
      <div className='card'>

      
          {/* <img src={Katie} alt="" className='card--image' /> */}
          {/* passing props with template literal method with $ sign
           */}

          <img src={`../images/${props.img}`} alt="" className="card--image" />
      
          <div className='card--span'>
              <img src='../images/star.png' alt="star" className='card--star'/>
             <span>{props.rating}</span>
        
              <span className='gray'>{props.reviewCount} . </span>
              <span className='gray'>{props.country}</span>

          </div>

          <p>{props.title }</p>
          <p><span className='bold'>From ${props.price}</span> / person</p>

    </div>
  )
}
