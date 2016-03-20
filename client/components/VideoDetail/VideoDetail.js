import React, {PropTypes} from 'react'

class VideoDetail extends React.Component {
	static displayName = 'VideoDetail'

	static propTypes = {
		data: PropTypes.array
	}

	render() {
		const {data} = this.props
		// console.log(data)

		return (
			<div className="VideoDetail">
				<div className="VideoDetail-video"></div>
				<div className="VideoDetail-info-wrapper">
					<div className="VideoDetail-info">
						<div className="VideoDetail-header">
							<div className="VideoDetail-title">
								{`${data[0].name}`}
							</div>
							<div className="VideoDetail-subtitle-wrapper">
								{`from`}
								<span className="VideoDetail-subtitle">
									{`${data[0].user.name}`}
								</span>
							</div>
							<div className="VideoDetail-image">
								<img src={`${data[0].user.pictures.sizes[1].link}`}/>
							</div>
						</div>
						<div className="VideoDetail-header-2">
							<div className="VideoDetail-stats-wrapper">
								<div className="VideoDetail-stat">{`${data[0].stats.plays}`}</div>
								<div className="VideoDetail-stat">{`${data[0].stats.plays}`}</div>
								<div className="VideoDetail-stat">{`${data[0].stats.plays}`}</div>
								<div className="VideoDetail-stat">{`${data[0].stats.plays}`}</div>
							</div>
							<p className="VideoDetail-header-2-text">
								{`${data[0].description}`}
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default VideoDetail
