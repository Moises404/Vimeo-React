import React, {PropTypes} from 'react'
import cn from 'classnames'

class CardPreview extends React.Component {
	static displayName = 'CardPreview'

	static propTypes = {
		'layout': PropTypes.object,
		'content': PropTypes.object
	}

	static defaultProps = {
		'layout': {},
		'content': {}
	}

	render() {
		const {layout, content} = this.props
		const CardPreviewCN = cn('CardPreview', {
			'--full': layout.full,
			'--portrait': layout.portrait,
			'--category': layout.category
		})

		const CardPreviewImgStyle = {
			backgroundImage: `url(${content.pictures.sizes[2].link})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}

		// console.log('CARD: ', content)

		return (
			<div className={CardPreviewCN}>
				<div className="CardPreview-image">
					<div style={CardPreviewImgStyle} className="CardPreview-img"></div>
					<div className="CardPreview-overlay">
						<span className="CardPreview-overlay-text">{`Watch`}</span>
					</div>
				</div>
				<div className="CardPreview-info">
					<span className="CardPreview-title-wrapper">
						<span className="CardPreview-title">{`${content.name}`}</span>
					</span>
					<span className="CardPreview-user-info">
						{`from`}
						<span className="CardPreview-username">{`${content.user.name}`}</span>
					</span>
				</div>
			</div>
		)
	}
}

export default CardPreview
