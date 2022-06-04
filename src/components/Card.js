import React from 'react'
import './Card.css'

// import Katie from '../images/katie-zaferes.png

// import Star from  '../images/star.png'

//pass the props to Card component
// from the props in APP.js, pass these props here. 
//As another method of passing props.

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  }


  return (
    <div className='card'>
      {/* 2. Better method conditional rendering. To show whwn each card is online/sold out withouthard coding it.
      Use the If/else method */}

      {badgeText && <div className='card--badge'>{ badgeText}</div> }


      {/* I. using simple JS conditional rendering */}
      {/* {props.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>} */}
      
      {/* <img src={Katie} alt="" className='card--image' /> */}
      {/* passing props with template literal method with $ sign
           */}

          <img src={`../images/${props.img}`} alt="" className="card--image" />
      
          <div className='card--stats'>
              <img src='../images/star.png' alt="star" className='card--star'/>
             
              <span>{props.rating}</span>
              <span className='gray'>({props.reviewCount}) . </span>
              <span className='gray'>{props.location}</span>

          </div>

          <p className='card--title'>{props.title }</p>
          <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>

    </div>
  )
}
