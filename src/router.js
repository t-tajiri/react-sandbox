import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './pages/App'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ App } />
      </Switch>
    </BrowserRouter>
  )
}
