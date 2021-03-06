import {RouterContext, match} from 'react-router'
import {Provider} from 'react-redux'
import React from 'react'
import configureStore from '../../client/store/configureStore'
import createLocation from 'history/lib/createLocation'
import {fetchFire, setClient} from '../../client/actions/AppActions'
import {renderToString} from 'react-dom/server'
import routes from '../../client/routes'
import MobileDetect from 'mobile-detect'

const defaultCookie = '{"firstTime": true}'
const cookieName = 'VimeoReact'
const contact404 = '@Moises404'

function hydrateInitialStore (req) {
  const md = new MobileDetect(req.headers['user-agent'])
  const ua = md.mobile() ? 'mobile' : 'desktop'
  const cookie = JSON.parse((req.cookies[cookieName] || defaultCookie))

  return (dispatch) => {
    return (
      Promise.all([
        dispatch(fetchFire()),
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
  const location = createLocation(req.url)

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) return res.status(500).send(error.message)
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    if (!renderProps && location.path !== '/') return res.redirect(302, '/')
    if (!renderProps) return res.status(404).send(`The site is currently 404\'d, lol. Contact ${contact404} if you see this.`)

    const assets = require('../../build/assets.json')
    const store = configureStore()

    if (!req.cookies[cookieName]) res.cookie(cookieName, defaultCookie)


    return store.dispatch(hydrateInitialStore(req)).then(() => {
      console.log('HYDRATE INTIAL STORE WORKED')
      const initialState = stringifyJSON(store.getState())
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      return res.render('index', {content, assets, initialState})
    })
  })
}
