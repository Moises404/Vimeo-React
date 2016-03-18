import React, {PropTypes} from 'react'
import Logo from '../Logo/Logo'
import {Link} from 'react-router'
import cn from 'classnames'

class Navigation extends React.Component {
  static displayName = 'Navigation'

  static propTypes = {
    'actions': PropTypes.object,
    'layout': PropTypes.object,
    'client': PropTypes.object,
    'children': PropTypes.object,
    'db': PropTypes.object
  }

  menuActive(linkLocation, currentLocation) {
    let state
    if (currentLocation === '' && linkLocation === 'watch') {
      state = true
    } else if (linkLocation === currentLocation) {
      state = true
    }
    return state
  }

  render() {
    const {client, actions, layout, children} = this.props
    const {agent} = client

    const btnProps = {
      'className': 'Navigation-menu-btn',
      'onClick': actions.toggleSidebar.bind(this, !layout.sideOpen),
    }

    const logoProps = {
      'to': '/',
      'onClick': actions.toggleSidebar.bind(this, false),
    }

    const currentLocation = children.props.location.pathname.split('/').pop()
    console.log(currentLocation)
    
    const NavWatchLink = cn('Navigation-menu-link', 
            {'--active watch': this.menuActive('watch', currentLocation)})
    const NavStaffPicksLink = cn('Navigation-menu-link', 
            {'--active staffpicks': this.menuActive('staffpicks', currentLocation)})
    const NavCategoriesLink = cn('Navigation-menu-link', 
            {'--active categories': this.menuActive('categories', currentLocation)})
    const NavChannelsLink = cn('Navigation-menu-link', 
            {'--active channels': this.menuActive('channels', currentLocation)})
    const NavGroupsLink = cn('Navigation-menu-link', 
            {'--active groups': this.menuActive('groups', currentLocation)})

    return (
      <nav className="Navigation">
        {agent === 'mobile' ? <div {... btnProps} /> : null}
        <div className="Navigation-ribbon"></div>
        <div className="Navigation-logo">
          <Link {... logoProps}>
            <Logo />
          </Link>
        </div>
        <div className="Navigation-menu-desktop">
          <Link className={NavWatchLink} to="/watch">Watch</Link>
          <Link className={NavStaffPicksLink} to="/staffpicks">Staff Picks</Link>
          <Link className={NavCategoriesLink} to="/categories">Categories</Link>
          <Link className={NavChannelsLink} to="/channels">Channels</Link>
          <Link className={NavGroupsLink} to="/groups">Groups</Link>
        </div>
        <a className="Navigation-github" href="https://github.com/Moises404/Vimeo-React" target="_blank">
          <div className="Navigation-github-icn" />
        </a>
      </nav>
    )
  }
}

export default Navigation
