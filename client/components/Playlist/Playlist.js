import React from 'react'

class Playlist extends React.Component {
	static displayName = 'Playlist'

	render() {
		const testSource = 'https://player.vimeo.com/external/76979871.hd.mp4?s=700bf8f30f8f8114cc372e94c4156aaf&profile_id=113'

		return (
			<div className="Playlist">
				<div className="Playlist-banner"></div>
				<div className="Playlist-Video">
					<video>
					  <source src={testSource} type="video/mp4"/>
					</video>
				</div>
				<div className="Playlist-info">
					<div className="Playlist-header">{`WATCH`}</div>
					<div className="Playlist-title">{`PLAYLIST`}</div>
					<div className="Playlist-user-info">
						{`from `}
						<span className="Playlist-username">{`User Name`}</span>
					</div>
				</div>
				<div className="Playlist-background"></div>
			</div>
		)
	}
}

export default Playlist
