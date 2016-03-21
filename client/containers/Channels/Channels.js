import React, {PropTypes} from 'react'
// import CardList from '../../components/CardList/CardList'

class Channels extends React.Component {
  static displayName = 'Channels'

  static propTypes = {
    'channels': PropTypes.object
  }

  render() {
    const {channels} = this.props
    console.log('CHANNELS-PROPS: ', channels)
    // const cardList1 = { content: data, childrenlayout: {full: true}}

    return (
      <div className="Channels">
        <h2>Channels Response Data</h2>
        <pre>{JSON.stringify(channels, null, 4)}</pre>
      </div>
    )
  }
}

// <CardList content={cardList1.content} childrenlayout={cardList1.childrenlayout}/>

export default Channels
