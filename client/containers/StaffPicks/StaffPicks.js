import React, {PropTypes} from 'react'
import Playlist from '../../components/Playlist/Playlist'

class StaffPicks extends React.Component {
  static displayName = 'StaffPicks'

  static propTypes = {
  	'staffpicks': PropTypes.object
  }

  render() {
  	const {staffpicks} = this.props
  	console.log('STAFF-PICKS-PROPS: ', staffpicks)

    return (
      <div className="StaffPicks">
        <Playlist/>
      </div>
    )
  }
}

export default StaffPicks
