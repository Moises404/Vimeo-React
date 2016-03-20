import {RouterContext, match} from 'react-router'
import {Provider} from 'react-redux'
import React from 'react'
import configureStore from '../../client/store/configureStore'
import createLocation from 'history/lib/createLocation'
import {fetchVimeoData, setClient} from '../../client/actions/AppActions'
import {renderToString} from 'react-dom/server'
import routes from '../../client/routes'
import MobileDetect from 'mobile-detect'

const defaultCookie = '{"firstTime": true}'
const cookieName = 'boiler404'
const contact404 = '@artnotfound'

function hydrateInitialStore (req, pathname) {
  const md = new MobileDetect(req.headers['user-agent'])
  const ua = md.mobile() ? 'mobile' : 'desktop'
  const cookie = JSON.parse((req.cookies[cookieName] || defaultCookie))
  const path = pathname ? pathname.split('/')[1] : null
  const type = path || 'staffpicks'
  console.log('reacgt middleware hydrate: type ', type)

  return (dispatch) => {
    return (
      Promise.all([
        dispatch(fetchVimeoData(type)),
        dispatch(setClient({'cookie': cookie, 'agent': ua}))
      ])
    )
  }
}


function stringifyJSON(data) {
  return JSON.stringify(data, (key, val) => {
     if (/\u2028/.test(val)) {
      return ''
     }
     return val;
  });
}

export default function reactMiddleware (req, res) {
  console.log('    in  reactMiddleware, url: ', req.url)
  const location = createLocation(req.url)

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) return res.status(500).send(error.message)
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    if (!renderProps && location.path !== '/') return res.redirect(302, '/')
    if (!renderProps) return res.status(404).send(`The site is currently 404\'d, lol. Contact ${contact404} if you see this.`)

    const assets = require('../../build/assets.json')
    const store = configureStore()
    if (!req.cookies[cookieName]) res.cookie(cookieName, defaultCookie)
    return store.dispatch(hydrateInitialStore(req, location.pathname)).then(() => {
      const initialState = stringifyJSON(store.getState())
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      console.log('rendering')
      return res.render('index', {content, assets, initialState})
    })
  })
}
