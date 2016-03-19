import React, {PropTypes} from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CardList from '../../components/CardList/CardList'
// import CardBanner from '../../components/CardBanner/CardBanner'


class CategoriesDetail extends React.Component {

  static displayName = 'CategoriesDetail'

  static propTypes = {
    'data': PropTypes.array
  }

  render() {
      const {data} = this.props

      const cardList1 = {
        content: data,
        layout: {
          mixgrid: true,
          noheader: true
        },
        childrenlayout: {
          mixgrid: true,
          right: true
        }
      }

      const cardList2 = {
        content: data,
        layout: {
          mixgrid: true,
          noheader: true
        },
        childrenlayout: {
          mixgrid: true,
          noheader: true,
          mid: true
        }
      }

      const cardList3 = {
        content: data,
        layout: {
          mixgrid: true,
          noheader: true
        },
        childrenlayout: {
          mixgrid: true,
          left: true
        }
      }

      return (
        <div className="CategoriesDetail">
          <Carousel content={data} layout={{'landscape': true}}/>
          <CardList content={cardList1.content} 
            childrenlayout={cardList1.childrenlayout} 
            layout={cardList1.layout}/>
          <CardList content={cardList2.content} 
            childrenlayout={cardList2.childrenlayout} 
            layout={cardList2.layout}/>
          <CardList content={cardList3.content} 
            childrenlayout={cardList3.childrenlayout} 
            layout={cardList3.layout}/>
        </div>
      )
    }
}

export default CategoriesDetail
