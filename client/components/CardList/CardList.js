import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import CardPreview from '../CardPreview/CardPreview'
import {shuffle} from 'lodash'

class CardList extends React.Component {
	static displayName = 'CardList'

	static propTypes = {
		'content': PropTypes.array,
		'layout': PropTypes.object
	}

	static defaultProps = {
		'content': {},
		'layout': {}
	}

	createCards(content, layout) {
		return content.map((tC, i) => <CardPreview layout={layout} content={content[i]} key={i}/>)
	}

	render() {
		const {layout} = this.props
		let {content} = this.props

		content = shuffle(content)

		if (!content) return null

		return (
			<div className="CardList">
				<div className="CardList-header">
					<Link className="CardList-profile" to={`${content[0].user.uri}`}>
						<img src={`${content[0].user.pictures.sizes[3].link}`}/>
					</Link>
					<Link className="CardList-title" to={`${content[0].user.uri}`}>
						
					</Link>
					<span className="CardList-info">
						{`${content[0].user.bio}`}
					</span>
				</div>
				<div className="CardsList-grid">
					{this.createCards(content, layout)}
				</div>
			</div>
		)
	}
}

export default CardList
