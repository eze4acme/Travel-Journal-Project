import React from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import data from './data'

function App() {
  const cardElment = data.map(item => {
   return <Card {...item} key={item.googleMapsUrl}/>
  })

  return (
    <div>
      <Navbar />
      {cardElment}
    </div>
  )
}

export default App