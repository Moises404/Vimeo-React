import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import cn from 'classnames'
import CardPreview from '../CardPreview/CardPreview'

class CardList extends React.Component {
	static displayName = 'CardList'

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
			<CardPreview layout={layout} content={content[i]} key={content[i].resource_key}/>)
	}

	render() {
		const {layout, content, childrenlayout} = this.props

		console.log('CHILDREN-LAYOUT: ', childrenlayout)
		const CardListCN = cn('CardList', {
			'--mixgrid': layout.mixgrid,
			'--noheader': layout.noheader
		})

		if (!content) return null

		return (
			<div className={CardListCN}>
				<div className="CardList-header">
					<Link className="CardList-profile" to={`${content[0].user.uri}`}>
						<img src={`${content[0].user.pictures.sizes[3].link}`}/>
					</Link>
					<Link className="CardList-title" to={`${content[0].user.uri}`}>
						{`${content[0].user.name}`}	
					</Link>
					<span className="CardList-info">
						{`${content[0].user.bio}`}
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
