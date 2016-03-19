import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

const apiLocal = 'http://localhost:3000/api'

export function setClient(client) {
  return (dispatch) => (
     dispatch({
      'type': types.SET_CLIENT,
      client,
    })
  )
}

export function toggleSidebar(sideOpen) {
  return (dispatch) => (
    dispatch({
      'type': types.TOGGLE_SIDEBAR,
      sideOpen,
    })
  )
}

export function fetchFireSuccess(json) {
  return {
    'type': types.FETCH_FIRE_SUCCESS,
    'fire': json,
  }
}

export function fetchVimeoSuccess(json) {
  return {
    'type': types.FETCH_VIMEO_SUCCESS,
    'fire': json,
  }
}

export function fetchFire() {
  const API = process.env.API || apiLocal

  return (dispatch) => (
    fetch(`${API}/getDB`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchFireSuccess(json)))
      .catch((error) => console.log(error))
  )
}

export function fetchWatch() {
  const API = process.env.API || apiLocal
  return (dispatch) => (
    fetch(`${API}/getWatch`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchVimeoSuccess(json)))
      .catch((error) => console.log(error))
  )
}

export function fetchStaffPicks() {
  const API = process.env.API || apiLocal
  return (dispatch) => (
    fetch(`${API}/getStaffPicks`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchVimeoSuccess(json)))
      .catch((error) => console.log(error))
  )
}

export function fetchCategories() {
  const API = process.env.API || apiLocal
  return (dispatch) => (
    fetch(`${API}/getCategories`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchVimeoSuccess(json)))
      .catch((error) => console.log(error))
  )
}

export function fetchChannels() {
  const API = process.env.API || apiLocal
  return (dispatch) => (
    fetch(`${API}/getChannels`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchVimeoSuccess(json)))
      .catch((error) => console.log(error))
  )
}

export function fetchGroups() {
  const API = process.env.API || apiLocal
  return (dispatch) => (
    fetch(`${API}/getGroups`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchVimeoSuccess(json)))
      .catch((error) => console.log(error))
  )
}
