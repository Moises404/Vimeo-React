import React, {PropTypes} from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CardList from '../../components/CardList/CardList'

class Home extends React.Component {
  static displayName = 'Home'

  static propTypes = {
    'staffpicks': PropTypes.object
  }

  render() {
    const {staffpicks: {data}} = this.props

    console.log(this.props)

    const cardList1 = {content: data, childrenlayout: {full: true}}
    const cardList2 = {content: data, childrenlayout: {portrait: true}}
    const cardList3 = {content: data, childrenlayout: {full: true}}
    const cardList4 = {content: data, childrenlayout: {category: true}}
    const cardList5 = {content: data, childrenlayout: {full: true}}

    return (
      <div className="Home">
        <Carousel content={data} layout={{'framed': true}}/>
        <CardList content={cardList1.content} childrenlayout={cardList1.childrenlayout}/>
        <CardList content={cardList2.content} childrenlayout={cardList2.childrenlayout}/>
        <CardList content={cardList3.content} childrenlayout={cardList3.childrenlayout}/>
        <CardList content={cardList4.content} childrenlayout={cardList4.childrenlayout}/>
        <CardList content={cardList5.content} childrenlayout={cardList5.childrenlayout}/>
      </div>
    )
  }
}

export default Home
