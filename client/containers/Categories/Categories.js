import React, {PropTypes} from 'react'
// import Carousel from '../../components/Carousel/Carousel'
import CategoryCardList from '../../components/CategoryCardList/CategoryCardList'
import {vimeoCategories} from '../../constants/VimeoTypes'

class Categories extends React.Component {

  static displayName = 'Categories'

  static propTypes = {
    categories: PropTypes.object,
    'fetchVimeoData': PropTypes.func
  }

  componentDidMount() {
    if (this.props.hasOwnProperty(vimeoCategories)) {
      console.log('if (true) {};')
    } else {
      console.log('if (false) {};')

      this.props.fetchVimeoData(vimeoCategories)
    }
  }

  createCategoryList(data, layout) {
    return data.map((item, i) => {
      console.log(item)
      return (
        <CategoryCardList content={data}
          layout={layout.layout} key={i}
          childrenlayout={layout.childrenlayout}/>
      )
    })
  }

  render() {
      const {categories} = this.props
      console.log("PROPS: ", this.props)

      if (!categories) {
        return (<div>Loading...</div>)
      }

      const {data} = categories

      console.log()

      if (!data || data.length === 0) {
        console.log('loadig\\ng')
        return (<div>Loading...</div>)
      } 
      console.log('in categories')

      const cardListCategories = {
          content: data,
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

      // console.log('cat, data: ', data)
      // <pre style={{color: 'white'}}>{JSON.stringify(data, null, 4)}</pre>
      // <Carousel content={data} layout={{'landscape': true}}/>

      return (
        <div className="Categories">
          <CategoryCardList content={cardListCategories.content}
            layout={cardListCategories.layout}
            childrenlayout={cardListCategories.childrenlayout}/>
          {this.createCategoryList(data, cardListCategorySingleLayout)} 
        </div>
      )
    }
}

export default Categories
