import React, {PropTypes} from 'react'
import CategoryCardList from '../../components/CategoryCardList/CategoryCardList'
import Carousel from '../../components/Carousel/Carousel'

class Categories extends React.Component {

  static displayName = 'Categories'

  static propTypes = {
    categories: PropTypes.object
  }

  createCategoryList(data, layout) {
    return data.map((item, i) => {
      console.log(item)
      return (
        <CategoryCardList content={data}
          header={{title: 'Category', subtitle: 'Category subtitle info'}}
          layout={layout.layout} key={i}
          childrenlayout={layout.childrenlayout}/>
      )
    })
  }

  render() {
      const {categories} = this.props
      console.log("CATEGORIES-PROPS: ", categories)

      if (!categories) return (<div>Loading...</div>)

      const cardListCategories = {
          content: categories.data,
          layout: {headerLeft: true},
          childrenlayout: {category: true}
      }

      const cardListCategorySingleLayout = {
        layout: {mixgrid: true},
        childrenlayout: {
          mixgrid: true,
          right: true
        }
      }

      return (
        <div className="Categories">
          <Carousel content={categories} layout={{'landscape': true}}/>
          <CategoryCardList content={cardListCategories.content}
            header={{}}
            layout={cardListCategories.layout}
            childrenlayout={cardListCategories.childrenlayout}/>
          {this.createCategoryList(categories.data, cardListCategorySingleLayout)} 
        </div>
      )
    }
}

export default Categories
