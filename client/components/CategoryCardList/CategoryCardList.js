import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import cn from 'classnames'
import CategoryCardPreview from '../CategoryCardPreview/CategoryCardPreview'

class CategoryCardList extends React.Component {
	static displayName = 'CategoryCardList'

	static propTypes = {
		'content': PropTypes.array,
		'layout': PropTypes.object,
		'childrenlayout': PropTypes.object
	}

	static defaultProps = {
		'content': {},
		'layout': {},
		'childrenlayout': {}
	}

	createCards(content, layout) {
		return content.map((tC, i) => 
			<CategoryCardPreview layout={layout} content={content[i]} key={i}/>)
	}

	render() {
		const {layout, content, childrenlayout} = this.props

		console.log('CONTENT', content)
		console.log('CHILDREN-LAYOUT: ', childrenlayout)
		const CategoryCardListCN = cn('CategoryCardList', {
			'--mixgrid': layout.mixgrid,
			'--noheader': layout.noheader,
			'--header-left': layout.headerLeft
		})

		if (!content) return null

		return (
			<div className={CategoryCardListCN}>
				<div className="CategoryCardList-header">
					<Link className="CategoryCardList-profile" to={`${content[0].uri}`}>
						<img src={`${content[0].pictures.sizes[3].link}`}/>
					</Link>
					<Link className="CategoryCardList-title" to={`${content[0].uri}`}>
						{`${content[0].name}`}	
					</Link>
					<span className="CategoryCardList-info">
						{`${content[0].subcategories[0].name}`}
					</span>
				</div>
				<div className="CategoryCardList-grid">
					{this.createCards(content, childrenlayout)}
				</div>
			</div>
		)
	}
}

export default CategoryCardList
