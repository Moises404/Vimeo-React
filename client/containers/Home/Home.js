import React, {PropTypes} from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CardList from '../../components/CardList/CardList'
import CategoryCardList from '../../components/CategoryCardList/CategoryCardList'

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
    // categories, channels, groups
    const cardList1 = {
      context: 'videos',
      header: {
        image: 'https://f.vimeocdn.com/images_v6/icons/icon_staffpicks_lg.png',
        title: 'Staff Picks', 
        subtitle: 'Carefully curated videos, handpicked by the Vimeo staff.'
      }, 
      childrenlayout: {
        full: true
      }
    }

    const cardList2 = {
      context: 'videos',
      header: {
        image: 'https://rachshnier.files.wordpress.com/2015/10/current-buzzfeed.jpg',
        title: 'Trending', 
        subtitle: `Discover and buy incredible titles directly 
                   from creators, who take home 90% of revenue 
                   after transaction costs`
      }, 
      childrenlayout: {
        portrait: true
      }
    }

    const cardList3 = {
      context: 'channels',
      header: {
        image: 'https://f.vimeocdn.com/images_v6/icons/icon_vod_lg.png',
        title: 'Channels', 
        subtitle: `Channels are a simple, beautiful way to showcase
                   and watch videos. You can create Channels around
                   common themes and easily share what you love with 
                   others.`
      }, 
      childrenlayout: {
        portrait: true
      }
    }

    const cardList4 = {
      context: 'categories',
      header: {
        image: 'https://f.vimeocdn.com/images_v6/icons/icon_categories_lg.png',
        title: 'Categories', 
        subtitle: `Discover top-notch videos, creators, and collections
                   related to your interests, hand-selected by our 
                   100-percent-human curation team.`
      },
      layout: {mixgrid: true},
      childrenlayout: {
        category: true
      }
    }

    const cardList5 = {
      context: 'groups',
      header: {
        image: 'http://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/512/Group-icon.png',
        title: 'Groups', 
        subtitle: `Groups are communities and conversations around videos
                   and other things that people like. You can create your
                   own Groups or contribute to the Groups of others.`
      },
      childrenlayout: {
        full: true
      }
    }

    return (
      <div className="Home">
        <Carousel content={staffpicks} layout={{'framed': true}}/>
        
        <CardList 
          content={staffpicks.data}
          cardListContext={cardList1.context}
          header={cardList1.header} 
          childrenlayout={cardList1.childrenlayout}/>

        <CardList content={staffpicks.data}
          cardListContext={cardList2.context}
          header={cardList2.header} 
          childrenlayout={cardList2.childrenlayout}/>

        <CardList content={channels.data} 
          cardListContext={cardList3.context}
          header={cardList3.header} 
          childrenlayout={cardList3.childrenlayout}/>

        <CategoryCardList content={categories.data}
          cardListContext={cardList4.context}
          header={cardList4.header} 
          childrenlayout={cardList4.childrenlayout}/>

        <CardList content={groups.data} 
          cardListContext={cardList5.context}
          header={cardList5.header} 
          childrenlayout={cardList5.childrenlayout}/>
      </div>
    )
  }
}

export default Home

// <CardList content={channels} childrenlayout={cardList3.childrenlayout}/>
// <CardList content={categories} childrenlayout={cardList4.childrenlayout}/>
// <CardList content={groups} childrenlayout={cardList5.childrenlayout}/>
