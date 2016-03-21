import React, {PropTypes} from 'react'
import CardBanner from '../CardBanner/CardBanner'

class Carousel extends React.Component {
	static displayName = 'Carousel'

	static propTypes = {
		'content': PropTypes.object,
		'layout': PropTypes.object
	}

	render() {
		const {layout, content} = this.props

		// console.log('CAROUSEL-PROPS', content)

		return (
			<section className="Carousel">
				<CardBanner layout={layout} content={content.data}/>
			</section>
		)
	}
}

export default Carousel
