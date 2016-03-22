import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import cn from 'classnames'

class CardPreview extends React.Component {
	static displayName = 'CardPreview'

	static propTypes = {
		'layout': PropTypes.object,
		'content': PropTypes.object,
	}

	static defaultProps = {
		'layout': {},
		'content': {}
	}

	render() {
		const {layout, content} = this.props
		
		const CardPreviewCN = cn('CardPreview', {
			'--full': layout.full,
			'--full-width': layout.fullWidth,
			'--portrait': layout.portrait,
			'--category': layout.category,
			'--mixgrid': layout.mixgrid,
			'--right': layout.right,
			'--left': layout.left,
			'--mid': layout.mid
		})

		const CardPreviewImgStyle = {
			backgroundImage: `url(${content.image})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}

		return (
			<div className={CardPreviewCN}>
				<Link className="CardPreview-image" to={`${content.link}`}>
					<div style={CardPreviewImgStyle} className="CardPreview-img"></div>
					<div className="CardPreview-overlay">
						<span className="CardPreview-overlay-text">{`Watch`}</span>
					</div>
				</Link>
				<div className="CardPreview-info">
					<Link className="CardPreview-title-wrapper" to={`${content.link}`}>
						<span className="CardPreview-title">
							{`${content.title}`}
						</span>
					</Link>
					<span className="CardPreview-user-info">
						{`from`}
						<Link className="CardPreview-username" to={`${content.link}`}>
							{`${content.subtitle}`}
						</Link>
					</span>
				</div>
			</div>
		)
	}
}

export default CardPreview
