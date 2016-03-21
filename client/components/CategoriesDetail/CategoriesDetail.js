import React, {PropTypes} from 'react'
import Carousel from '../../components/Carousel/Carousel'
import CategoryCardList from '../../components/CategoryCardList/CategoryCardList'

class CategoriesDetail extends React.Component {

  static displayName = 'CategoriesDetail'

  static propTypes = {
    categories: PropTypes.object
  }

  render() {
      const {categories} = this.props

      console.log('CATEGORY-DETAIL-PROPS: ', categories)

      const cardList1 = {
        content: categories.data,
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
        content: categories.data,
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
        content: categories.data,
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
          <Carousel content={categories} layout={{'landscape': true}}/>
          <CategoryCardList content={cardList1.content}
            header={{}}
            childrenlayout={cardList1.childrenlayout} 
            layout={cardList1.layout}/>
          <CategoryCardList content={cardList2.content} 
            header={{}}
            childrenlayout={cardList2.childrenlayout} 
            layout={cardList2.layout}/>
          <CategoryCardList content={cardList3.content}
            header={{}}
            childrenlayout={cardList3.childrenlayout} 
            layout={cardList3.layout}/>
        </div>
      )
    }
}

export default CategoriesDetail
