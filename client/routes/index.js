import React from 'react'
import {Route, Router, browserHistory, IndexRoute} from 'react-router'
import App from '../containers/App/App'
import Home from '../containers/Home/Home'
import StaffPicks from '../containers/StaffPicks/StaffPicks'
import Categories from '../containers/Categories/Categories'
import Channels from '../containers/Channels/Channels'
import Groups from '../containers/Groups/Groups'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="watch" component={Home}/>
      <Route path="staffpicks" component={StaffPicks}/>
      <Route path="categories" component={Categories}/>
      <Route path="channels" component={Channels}/>
      <Route path="groups" component={Groups}/>
    </Route>
  </Router>
)
