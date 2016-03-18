import React from 'react'
import CardBanner from '../../components/CardBanner/CardBanner'
import CardList from '../../components/CardList/CardList'

class Categories extends React.Component {
  static displayName = 'Categories'

  render() {
  	const layout = {landscape: true}
  	const cardList1 = {content: {type: 'channel'}, layout: {full: true}}

    return (
      <div className="Categories">
        <CardBanner layout={layout}/>
        <CardList content={cardList1.content} layout={cardList1.layout}/>
      </div>
    )
  }
}

export default Categories
