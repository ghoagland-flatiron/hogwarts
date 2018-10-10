import React from 'react'

function HogCard (props) {
  const {
    name,
    specialty,
    greased,
    'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water' : weightRatio,
    'highest medal achieved' : medal
  } = props

  return(
    <div className="ui eight wide column">
      <img alt={name} src={`/hog-imgs/${snakeCase(name)}.jpg`} />
      <h2>{name}</h2>
      <p>Specialty: {specialty}</p>
      <p>Greased: {greased.toString()}</p>
      <p>Weight as a Ratio of Hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
      <p>Medal: {medal}</p>
    </div>
  )
}

function snakeCase(str) {
  return str.toLowerCase().split(' ').join('_')
}
export default HogCard
