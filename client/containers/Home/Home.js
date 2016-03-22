import React, {PropTypes} from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CardList from '../../components/CardList/CardList'
import CategoryCardList from '../../components/CategoryCardList/CategoryCardList'
import CardsLayout from './HomeCardListLayout'


class Home extends React.Component {
  static displayName = 'Home'

  static propTypes = {
    'staffpicks': PropTypes.object, 
    'categories': PropTypes.object, 
    'channels': PropTypes.object, 
    'groups': PropTypes.object
  }

  render() {
    const {staffpicks, categories, channels, groups} = this.props

    return (
      <div className="Home">
        <Carousel content={staffpicks} layout={{'framed': true}}/>
        
        <CardList 
          content={staffpicks.data}
          cardListContext={CardsLayout[0].context}
          header={CardsLayout[0].header} 
          childrenlayout={CardsLayout[0].childrenlayout}/>

        <CardList content={staffpicks.data}
          cardListContext={CardsLayout[1].context}
          header={CardsLayout[1].header} 
          childrenlayout={CardsLayout[1].childrenlayout}/>

        <CardList content={channels.data} 
          cardListContext={CardsLayout[2].context}
          header={CardsLayout[2].header} 
          childrenlayout={CardsLayout[2].childrenlayout}/>

        <CategoryCardList content={categories.data}
          cardListContext={CardsLayout[3].context}
          header={CardsLayout[3].header} 
          childrenlayout={CardsLayout[3].childrenlayout}/>

        <CardList content={groups.data} 
          cardListContext={CardsLayout[4].context}
          header={CardsLayout[4].header} 
          childrenlayout={CardsLayout[4].childrenlayout}/>
      </div>
    )
  }
}

export default Home
