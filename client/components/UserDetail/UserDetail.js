import React, {PropTypes} from 'react'
import CardList from '../CardList/CardList'

class UserDetail extends React.Component {
	static displayName = 'UserDetail'

	static propTypes = {
		'staffpicks': PropTypes.object
	}

	render() {
		const {staffpicks} = this.props

		const cardList1 = {
		  layout: {noheader: true},
		  childrenlayout: {
		  	full: true,
		  	fullWidth: true
		  }
		}

		return (	
			<div className="UserDetail">
				<div className="UserDetail-wrapper">
					<div className="UserDetail-header">
						<div className="UserDetail-title">{`${staffpicks.data[0].user.name}`}</div>
						<div className="UserDetail-subtitle">{`${staffpicks.data[0].user.location}`}</div>
					</div>
					<div className="UserDetail-profile-content-wrapper">
						<div className="UserDetail-profile">
							<div className="UserDetail-profile-image">
								<img src={`${staffpicks.data[0].user.pictures.sizes[3].link}`}/>
							</div>
							<div className="UserDetail-profile-info">
								{`${staffpicks.data[0].user.bio}`}
							</div>
						</div>
						<div className="UserDetail-info">
							<div className="UserDetail-stats">
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`67`}</span>
									<span className="UserDetail-stat-type">{`Videos`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`409`}</span>
									<span className="UserDetail-stat-type">{`Likes`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`78`}</span>
									<span className="UserDetail-stat-type">{`Following`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`7`}</span>
									<span className="UserDetail-stat-type">{`Groups`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`16`}</span>
									<span className="UserDetail-stat-type">{`Channels`}</span>
								</span>
								<span className="UserDetail-stat">
									<span className="UserDetail-stat-num">{`6`}</span>
									<span className="UserDetail-stat-type">{`Albums`}</span>
								</span>
							</div>
							<div className="UserDetail-videos">
								<CardList content={staffpicks.data} 
									layout={cardList1.layout}
									cardListContext={'videos'}
									header={{}} 
									childrenlayout={cardList1.childrenlayout}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UserDetail
