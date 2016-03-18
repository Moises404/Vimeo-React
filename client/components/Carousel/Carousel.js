import React, {PropTypes} from 'react'
import CardBanner from '../CardBanner/CardBanner'

class Carousel extends React.Component {
	static displayName = 'Carousel'

	static propTypes = {
		'content': PropTypes.array
	}

	render() {
		const layout = {framed: true}
		const {content} = this.props

		return (
			<section className="Carousel">
				<CardBanner layout={layout} content={content}/>
			</section>
		)
	}
}

export default Carousel
