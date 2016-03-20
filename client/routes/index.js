import React from 'react'
import {Route, Router, browserHistory, IndexRoute} from 'react-router'
import App from '../containers/App/App'
import Home from '../containers/Home/Home'
import StaffPicks from '../containers/StaffPicks/StaffPicks'
import Categories from '../containers/Categories/Categories'
import Channels from '../containers/Channels/Channels'
import Groups from '../containers/Groups/Groups'

import VideoDetail from '../components/VideoDetail/VideoDetail'
import UserDetail from '../components/UserDetail/UserDetail'
import ChannelDetail from '../components/ChannelDetail/ChannelDetail'
import CategoriesDetail from '../components/CategoriesDetail/CategoriesDetail'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="watch" component={Home}/>
      <Route path="staffpicks" component={StaffPicks}/>
      <Route path="categories" component={Categories}/>
      <Route path="categories/:categoriesID" component={CategoriesDetail}/>
      <Route path="channels" component={Channels}/>
      <Route path="groups" component={Groups}/>
      
      <Route path="videoDetail" component={VideoDetail}/>
      <Route path="userDetail" component={UserDetail}/>
      <Route path="channelDetail" component={ChannelDetail}/>
      <Route path="videos/:videoID" component={VideoDetail}/>
      <Route path="users/:userID" component={UserDetail}/>
      <Route path="channels/:channelID" component={ChannelDetail}/>
      <Route path=":videoID" component={VideoDetail}/>
    </Route>
  </Router>
)
