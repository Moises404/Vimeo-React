import React from 'react'

class CardPreview extends React.Component {
	static displayName = 'CardPreview'

	render() {
		const testSource = 'https://player.vimeo.com/external/76979871.hd.mp4?s=700bf8f30f8f8114cc372e94c4156aaf&profile_id=113'

		return (
			<div className="CardPreview">
				<div className="CardPreview-Video">
					<video>
					  <source src={testSource} type="video/mp4"/>
					</video>
				</div>
				<div className="CardPreview-info">
					<div className="CardPreview-header">{`WATCH`}</div>
					<div className="CardPreview-title">{`VIMEO VIDEO PLAYER`}</div>
					<div className="CardPreview-user-info">
						{`from `}
						<span className="CardPreview-username">{`User Name`}</span>
					</div>
				</div>
				<div className="CardPreview-background"></div>
			</div>
		)
	}
}

export default CardPreview
