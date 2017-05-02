import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { home } from '../module/home'
import { checkout } from '../module/checkout'

export default combineReducers({
  home,
  checkout,
  routing
})
