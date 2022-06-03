import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
 

/* Challenge: Pass the props to the Card component and display the data.

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

  First method: Passing of props as normal NavBar, Hero and Card.

 Pass all these as props in card.js- 
 second way of passing props
*/
export default function App() {
  return (
    <div>
      
      <NavBar />
      <Hero />
      <Card 
       
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="Germany"
        title="Life Lessons with Katie Zaferes"
        price={136}
        
      
      />
    
    </div>
  )
}

