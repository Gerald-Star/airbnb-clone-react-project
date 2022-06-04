import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import { Data } from './components/data'
import './App.css'

/* Challenge 1: Pass the props to the Card component and display the data.

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



/*
Challenge 2:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/


export default function App() {

  const cards = Data.map(item => {

    return (
      <Card 
        
        // Method 1, of mapping data objects to be passed as props - more explicit 
        key= {item.id}
        img= {item.coverImg}
        rating= {item.stats.rating}
        reviewCount= {item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      
      // Method 2, reduces the lengthy code
      // To reduce the lenghty components to simplier, as it is becoming bigger.
      // Simply add item={item}. This reduces the the lenghty components.
      // PASS OBJECTS AS PROPS.
      // Go to the Card.js and add item to all props. eg props.item.
      // secondly, since the data has its own object names,
      //set all objects to its data unique name eg.coverImg
      // to be props.item.coverImg / props.item.openSpots
      // props.item.stats.rating......

        
      //Method 3, passing as spread operator/using spread syntax objec.literals
      // key = {item.id}
      // {...item} then on the card.js, remove all items inside every props.
      />
        
      )

  })


  return (
    <div>
      
      <NavBar />
      <Hero />
      <section className='cards-list'>

       {cards} 
      </section>
      
      
      
      
      
      
      {/* <Card
       
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        location="Germany"
        title="Life Lessons with Katie Zaferes"
        price={136}
        
        This was remove here to top by using the .map()method.
        Which is necessary because of updating of data from the data.js
      
      /> */}
    
    </div>
  )
}

