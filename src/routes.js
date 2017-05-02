import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from './layouts/CoreLayout/CoreLayout'
import { HomeView } from './module/home'
import { CheckoutView } from './module/checkout'

export default (store) => (
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={HomeView} />
      <Route path='/checkout'component={CheckoutView} />
    </Route>
)
