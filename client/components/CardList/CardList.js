import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import cn from 'classnames'
import CardPreview from '../CardPreview/CardPreview'
import {standardizeCards} from '../../helpers/standardizeCardData' 

class CardList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			standardizedData: standardizeCards(this.props.cardListContext, this.props.content)
		}
	}

	static displayName = 'CardList'

	static propTypes = {
		'header': PropTypes.object,
		'content': PropTypes.array,
		'layout': PropTypes.object,
		'childrenlayout': PropTypes.object,
		'cardListContext': PropTypes.string
	}

	static defaultProps = {
		'content': {},
		'layout': {},
		'childrenlayout': {},
		'cardListContext': ''
	}

	createCards(content, layout) {
		return content.map((item, i) => 
			<CardPreview layout={layout} 
				content={item} key={i} />)
	}

	render() {
		const {header, layout, content, childrenlayout, cardListContext} = this.props

		const standardizedData = standardizeCards(cardListContext, content)
		console.log('STANDARDIZED-DATA: ', standardizedData)

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
					{this.createCards(this.state.standardizedData, childrenlayout)}
				</div>
			</div>
		)
	}
}

export default CardList
