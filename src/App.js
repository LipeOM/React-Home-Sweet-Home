import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import AboutPage from './AboutPage'
import CadPage from './CadPage'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import CasasPage from './CasasPage'
import VenderPage from './VenderPage'
import CasaNumeroUm from './CasaNumeroUm'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path='/' component={CasasPage} />
            <Route path='/casanumeroum' component={CasaNumeroUm} />
            <Route path='/sobre' component={AboutPage} />
            <Route path='/vender' component={VenderPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/cadastrar' component={CadPage} />
            <Route path='/admin' component={AdminPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
