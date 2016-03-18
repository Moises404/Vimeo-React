import React, {PropTypes} from 'react'
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
		// const test = {'key': 'value'}
		// const testContent = [test, test, test, test, test, test, test, test]

		return content.map((tC, i) => <CardPreview layout={layout} content={content[i]} key={i}/>)
	}

	render() {
		const {layout} = this.props
		let {content} = this.props

		content = shuffle(content)
		console.log(content)
		// console.log('CARD-LIST: ', content)
		if (!content) return null

		return (
			<div className="CardList">
				<div className="CardList-header">
					<span className="CardList-profile">
						<img src={`${content[0].user.pictures.sizes[3].link}`}/>
					</span>
					<span className="CardList-title">{`Staff Picks`}</span>
					<span className="CardList-info">
						{` Carefully curated videos, handpicked by the Vimeo staff.`}
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
