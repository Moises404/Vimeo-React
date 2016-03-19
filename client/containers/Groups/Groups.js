import React, {PropTypes} from 'react'
import CardList from '../../components/CardList/CardList'

class Groups extends React.Component {
  static displayName = 'Groups'

  static propTypes = {
    'data': PropTypes.array
  }

  render() {
    const {data} = this.props
  	const cardList1 = { content: data, childrenlayout: {full: true}}

    return (
      <div className="Groups">
        <CardList content={cardList1.content} childrenlayout={cardList1.childrenlayout}/>
      </div>
    )
  }
}

export default Groups
