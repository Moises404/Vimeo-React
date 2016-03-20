import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import cn from 'classnames'

class CategoryCardPreview extends React.Component {
	static displayName = 'CategoryCardPreview'

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

		// console.log(content)
		
		const CategoryCardPreviewCN = cn('CategoryCardPreview', {
			'--full': layout.full,
			'--full-width': layout.fullWidth,
			'--portrait': layout.portrait,
			'--category': layout.category,
			'--mixgrid': layout.mixgrid,
			'--right': layout.right,
			'--left': layout.left,
			'--mid': layout.mid
		})

		const catURL = '/categories/'
		const CategoryCardPreviewOverlayImgCN = cn('CategoryCardPreview-overlay-img --icon', {
			'--animation': content.uri === `${catURL}animation`,
			'--art': (content.uri === `${catURL}art`),
			'--cameratechniques': (content.uri === `${catURL}cameratechniques`),
			'--comedy': (content.uri === `${catURL}comedy`),
			'--documentary': (content.uri === `${catURL}documentary`),
			'--experimental': (content.uri === `${catURL}experimental`),
			'--fashion': (content.uri === `${catURL}fashion`),
			'--food': (content.uri === `${catURL}food`),
			'--instructionals': (content.uri === `${catURL}instructionals`),
			'--music': (content.uri === `${catURL}music`),
			'--narrative': (content.uri === `${catURL}narrative`),
			'--personal': (content.uri === `${catURL}personal`),
			'--journalism': (content.uri === `${catURL}journalism`),
			'--sports': (content.uri === `${catURL}sports`),
			'--talks': (content.uri === `${catURL}talks`),
			'--travel': (content.uri === `${catURL}travel`)
		})

		const CategoryCardPreviewImgStyle = {
			backgroundImage: `url(${content.pictures.sizes[2].link})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center'
		}

		return (
			<div className={CategoryCardPreviewCN}>
				<Link className="CategoryCardPreview-image" to={`${content.uri}`}>
					<div style={CategoryCardPreviewImgStyle} className="CategoryCardPreview-img"></div>
					<div className="CategoryCardPreview-overlay">
						<span className="CategoryCardPreview-overlay-text">{`${content.name}`}</span>
						<span className={CategoryCardPreviewOverlayImgCN}></span>
					</div>
				</Link>
				<div className="CategoryCardPreview-info">
					<Link className="CategoryCardPreview-title-wrapper" to={`${content.uri}`}>
						<span className="CategoryCardPreview-title">
							{`${content.name}`}
						</span>
					</Link>
					<span className="CategoryCardPreview-user-info">
						{`from`}
						<Link className="CategoryCardPreview-username" to={`${content.uri}`}>
							{`${content.name}`}
						</Link>
					</span>
				</div>
			</div>
		)
	}
}

export default CategoryCardPreview
