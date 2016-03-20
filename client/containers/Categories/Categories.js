import React, {PropTypes} from 'react'
// import Carousel from '../../components/Carousel/Carousel'
// import CardList from '../../components/CardList/CardList'
import {vimeoCategories} from '../../constants/VimeoTypes'
// import CardBanner from '../../components/CardBanner/CardBanner'


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

  render() {
      const {categories} = this.props
      console.log("PROPS: ", this.props)

      if (!categories) {
        return (<div>Loading...</div>)
      }

      const {data} = categories;

      if (!data || data.length === 0) {
        console.log('loadig\\ng')
        return (<div>Loading...</div>)
      } 
      console.log('in categories')
      // const cardList1 = {
      //   content: data,
      //   childrenlayout: {category: true}
      // }

      // const cardList2 = {
      //   content: data,
      //   layout: {mixgrid: true},
      //   childrenlayout: {
      //     mixgrid: true,
      //     right: true
      //   }
      // }

      // const cardList3 = {
      //   content: data,
      //   layout: {mixgrid: true},
      //   childrenlayout: {
      //     mixgrid: true,
      //     right: true
      //   }
      // }

      // const cardList4 = {
      //   content: data,
      //   layout: {mixgrid: true},
      //   childrenlayout: {
      //     mixgrid: true,
      //     right: true
      //   }
      // }
      console.log('cat, data: ', data)
      // <Carousel content={data} layout={{'landscape': true}}/>
      // <div className="Categories">
      //   <CardList content={cardList1.content} childrenlayout={cardList1.childrenlayout}/>
      //   <CardList content={cardList2.content} 
      //     childrenlayout={cardList2.childrenlayout} 
      //     layout={cardList2.layout}/>
      //   <CardList content={cardList3.content} 
      //     childrenlayout={cardList3.childrenlayout} 
      //     layout={cardList3.layout}/>
      //   <CardList content={cardList4.content} 
      //     childrenlayout={cardList4.childrenlayout} 
      //     layout={cardList4.layout}/>
      // </div>
      return (
        <pre style={{color: 'white'}}>{JSON.stringify(data, null, 4)}</pre>
     
      )
    }
}

export default Categories
