import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Pages from './pages'
//import Components from './Components'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Pages.index} />
                <Route exact path='/app' component={Pages.Chat} />
            </Switch>
        </BrowserRouter>
    </Provider>
)




