import React from 'react'
import Carousel from '../../components/Carousel/Carousel'

class Home extends React.Component {
  static displayName = 'Home'

  render() {
    return (
      <div className="Home">
        <Carousel/>
      </div>
    )
  }
}

export default Home
