import React, {PropTypes} from 'react'
import CardBanner from '../CardBanner/CardBanner'

class Carousel extends React.Component {
	static displayName = 'Carousel'

	static propTypes = {
		'content': PropTypes.array,
		'layout': PropTypes.object
	}

	render() {
		const {layout, content} = this.props

		return (
			<section className="Carousel">
				<CardBanner layout={layout} content={content}/>
			</section>
		)
	}
}

export default Carousel
