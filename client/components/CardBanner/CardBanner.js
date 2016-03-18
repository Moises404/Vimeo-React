import React, {PropTypes} from 'react'
import {shuffle} from 'lodash'
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
		// const {layout, content} = this.props
		const {layout} = this.props
		let {content} = this.props

		content = shuffle(content)

		console.log(content)

		const CardBannerCN = cn('CardBanner', {
			'--framed': layout.framed,
			'--landscape': layout.landscape
		})

		// const testSource = 'https://player.vimeo.com/external/76979871.hd.mp4?s=700bf8f30f8f8114cc372e94c4156aaf&profile_id=113'

		const CardBannerBackgroundStyle = {
			backgroundImage: `url(${content[0].pictures.sizes[5].link})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}

		const CardBannerVideoStyle = {
			backgroundImage: `url(${content[0].pictures.sizes[5].link})`,
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
					<div className="CardBanner-video-wrapper">
						<div className="CardBanner-video" style={CardBannerVideoStyle}></div>
					</div>
					<div className="CardBanner-info">
						<div className="CardBanner-info-header">{`WATCH`}</div>
						<div className="CardBanner-title">{`${content[0].name}`}</div>
						<div className="CardBanner-user-info">
							{`from `}
							<span className="CardBanner-username">{`${content[0].user.name}`}</span>
						</div>
					</div>
				</div>
				<div style={CardBannerBackgroundStyle} className="CardBanner-background"></div>
				<div className="CardBanner-gradient"></div>
			</div>
		)
	}
}
// <video>
//   <source src={testSource} type="video/mp4"/>
// </video>

export default CardBanner
