import React from 'react'
import './Hero.css'

// import Photo-Grid from '../images/photo-grid.png'
import Photo from '../images/photo-grid.png'


/*Build the hero component */

export default function Hero() {
    return (
      
        /* style section as generic in index.css 
        so that it apples to other section components.
        But classname hero--page styles the image alone.
        
        */
      <section className='hero--page'>
          
          <img src={Photo} alt="" className='hero--photo' />
          
          <h1 className='hero--header'>Online Experience</h1>
            <p className='hero--text'>Join a unique interactive training and
                learning platform. We train individuals and groups
               from beginner's level to advance.
          </p>
    </section>
  )
}
