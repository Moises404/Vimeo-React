import React, {PropTypes} from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CardList from '../../components/CardList/CardList'

class Home extends React.Component {
  static displayName = 'Home'

  static propTypes = {
    'data': PropTypes.array, 
  }

  render() {
    const {data} = this.props

    const cardList1 = {content: data, layout: {full: true}}
    const cardList2 = {content: data, layout: {portrait: true}}
    const cardList3 = {content: data, layout: {full: true}}
    const cardList4 = {content: data, layout: {category: true}}
    const cardList5 = {content: data, layout: {full: true}}

    return (
      <div className="Home">
        <Carousel content={data}/>
        <CardList content={cardList1.content} layout={cardList1.layout}/>
        <CardList content={cardList2.content} layout={cardList2.layout}/>
        <CardList content={cardList3.content} layout={cardList3.layout}/>
        <CardList content={cardList4.content} layout={cardList4.layout}/>
        <CardList content={cardList5.content} layout={cardList5.layout}/>
      </div>
    )
  }
}

export default Home
