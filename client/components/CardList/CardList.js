import React from 'react'

class CardList extends React.Component {
	static displayName = 'CardList'

	render() {
		const testSource = 'https://player.vimeo.com/external/76979871.hd.mp4?s=700bf8f30f8f8114cc372e94c4156aaf&profile_id=113'

		return (
			<div className="CardList">
				<div className="CardList-Video">
					<video>
					  <source src={testSource} type="video/mp4"/>
					</video>
				</div>
				<div className="CardList-info">
					<div className="CardList-header">{`WATCH`}</div>
					<div className="CardList-title">{`CARD LIST`}</div>
					<div className="CardList-user-info">
						{`from `}
						<span className="CardList-username">{`User Name`}</span>
					</div>
				</div>
				<div className="CardList-background"></div>
			</div>
		)
	}
}

export default CardList
