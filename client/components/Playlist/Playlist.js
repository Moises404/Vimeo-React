import React from 'react'

class CardBanner extends React.Component {
	static displayName = 'CardBanner'

	render() {
		const testSource = 'https://player.vimeo.com/external/76979871.hd.mp4?s=700bf8f30f8f8114cc372e94c4156aaf&profile_id=113'

		return (
			<div className="CardBanner">
				<div className="CardBanner-Video">
					<video>
					  <source src={testSource} type="video/mp4"/>
					</video>
				</div>
				<div className="CardBanner-info">
					<div className="CardBanner-header">{`WATCH`}</div>
					<div className="CardBanner-title">{`PLAYLIST`}</div>
					<div className="CardBanner-user-info">
						{`from `}
						<span className="CardBanner-username">{`User Name`}</span>
					</div>
				</div>
				<div className="CardBanner-background"></div>
			</div>
		)
	}
}

export default CardBanner
