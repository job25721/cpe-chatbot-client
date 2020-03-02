import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Pages from './pages'
import { GlobalProvider } from './context/GlobalState';
//import Components from './Components'

export default () => (
    <GlobalProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Pages.index} />
                <Route exact path='/app' component={Pages.Chat} />
                <Route exact path='/test' component={Pages.test} />
            </Switch>
        </BrowserRouter>
    </GlobalProvider>
)




