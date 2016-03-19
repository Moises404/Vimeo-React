import React, {PropTypes} from 'react'
import CardList from '../../components/CardList/CardList'

class Channels extends React.Component {
  static displayName = 'Channels'

  static propTypes = {
    'data': PropTypes.array
  }

  render() {
    const {data} = this.props
  	const cardList1 = { content: data, childrenlayout: {full: true}}

    return (
      <div className="Channels">
        <CardList content={cardList1.content} childrenlayout={cardList1.childrenlayout}/>
      </div>
    )
  }
}

export default Channels
