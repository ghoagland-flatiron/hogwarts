/*eslint-disable no-undef*/
import React, { Component } from 'react'

class HogCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    //this.toggleClicked = this.toggleClicked.bind(this)
  }

  toggleClicked = (e) => {
    const clicked = !this.state.clicked
    this.setState({ clicked })
  }

  render() {
    const {
      name,
      specialty,
      greased,
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water' : weightRatio,
      'highest medal achieved' : medal
    } = this.props

    return(
      <div className="ui eight wide column" onClick={this.toggleClicked}>
        <img alt={name} src={`/hog-imgs/${snakeCase(name)}.jpg`} />
        <h2>{name}</h2>
        {this.state.clicked &&
          (<section>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased.toString()}</p>
            <p>Weight as a Ratio of Hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
            <p>Medal: {medal}</p>
          </section>)
        }
      </div>
    )
  }
}

function snakeCase(str) {
  return str.toLowerCase().split(' ').join('_')
}

export default HogCard
