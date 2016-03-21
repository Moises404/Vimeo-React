import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import cn from 'classnames'

class CardBanner extends React.Component {
	static displayName = 'CardBanner'

	static propTypes = {
		'layout': PropTypes.object,
		'content': PropTypes.array
	}

	static defaultProps = {
		'layout': {},
		'content': {}
	}

	render() {
		const {layout, content} = this.props

		console.log('CARD-BANNER-PROPS', content)

		const CardBannerCN = cn('CardBanner', {
			'--framed': layout.framed,
			'--landscape': layout.landscape
		})

		const CardBannerBackgroundStyle = {
			backgroundImage: `url(${content[0].pictures.sizes[4].link})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}

		const CardBannerVideoStyle = {
			backgroundImage: `url(${content[0].pictures.sizes[4].link})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}

		return (
			<div className={CardBannerCN}>
				<div className="CardBanner-header">
					<span className="CardBanner-header-title">{`Categories`}</span>
					<span className="CardBanner-header-info">
						{`Discover top-notch videos, creators, and collections
						 related to your interests, hand-selected by our 100-percent
						 human curation team`}
					</span>
				</div>
				<div className="CardBanner-wrapper">
					<Link className="CardBanner-video-wrapper" to={`${content[0].uri}`} >
						<div className="CardBanner-video" 
							style={CardBannerVideoStyle}>
						</div>
					</Link>
					<div className="CardBanner-info">
						<div className="CardBanner-info-header">{`WATCH`}</div>
						<Link className="CardBanner-title" to={`${content[0].uri}`}>
							{`${content[0].name}`}
						</Link>
						<div className="CardBanner-user-info">
							{`from `}
							<Link className="CardBanner-username" to={`${content[0].uri}`}>
								{`${content[0].name}`}
							</Link>
						</div>
					</div>
				</div>
				<div style={CardBannerBackgroundStyle} className="CardBanner-background"></div>
				<div className="CardBanner-gradient"></div>
			</div>
		)
	}
}

export default CardBanner
