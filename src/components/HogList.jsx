import React from 'react'
import HogCard from './HogCard'

function HogList ({hogs}) {
  const hogComponents = hogs.map((hog) => {
    return <HogCard {...hog} />
  })
  return(<div>{hogComponents}</div>)
}

export default HogList
