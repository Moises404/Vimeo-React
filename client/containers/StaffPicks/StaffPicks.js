import React from 'react'
import Playlist from '../../components/Playlist/Playlist'

class StaffPicks extends React.Component {
  static displayName = 'StaffPicks'

  render() {
    return (
      <div className="StaffPicks">
        <Playlist/>
      </div>
    )
  }
}

export default StaffPicks
