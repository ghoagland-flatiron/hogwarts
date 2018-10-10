import React from 'react'
import HogCard from './HogCard'

function Hoglist(props) {
  console.log(props)
  const hogComponents = props.hogs.map(hog => <HogCard key={hog.name} {...hog} />)
  return (
    <div className="ui grid container">
      { hogComponents }
    </div>
  )
}

export default Hoglist
