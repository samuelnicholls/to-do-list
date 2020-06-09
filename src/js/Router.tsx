import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './pages/App'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/to-do-list' component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
