import React from 'react'
import HogCard from './HogCard'

function HogList ({hogs}) {
  const hogComponents = hogs.map((hog) => {
    return <HogCard key={hog.name} {...hog} />
  })
  return(<div className='ui grid container'>{hogComponents}</div>)
}

export default HogList
