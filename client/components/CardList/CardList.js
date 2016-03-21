import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import cn from 'classnames'
import CardPreview from '../CardPreview/CardPreview'

class CardList extends React.Component {
	static displayName = 'CardList'

	static propTypes = {
		'header': PropTypes.object,
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
			<CardPreview layout={layout} content={content[i]} key={i}/>)
	}

	render() {
		const {header, layout, content, childrenlayout} = this.props

		const CardListCN = cn('CardList', {
			'--mixgrid': layout.mixgrid,
			'--noheader': layout.noheader
		})

		if (!content) return null

		return (
			<div className={CardListCN}>
				<div className="CardList-header">
					<Link className="CardList-profile" to={`${content[0].uri}`}>
						<img src={header.image}/>
					</Link>
					<Link className="CardList-title" to={`${content[0].uri}`}>
						{header.title}	
					</Link>
					<span className="CardList-info">
						{header.subtitle}
					</span>
				</div>
				<div className="CardsList-grid">
					{this.createCards(content, childrenlayout)}
				</div>
			</div>
		)
	}
}

export default CardList
