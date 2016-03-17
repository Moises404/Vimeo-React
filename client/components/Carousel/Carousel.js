import React from 'react'
import CardBanner from '../CardBanner/CardBanner'

class Carousel extends React.Component {
	static displayName = 'Carousel'

	render() {
		return (
			<section className="Carousel">
				<CardBanner/>
			</section>
		)
	}
}

export default Carousel
