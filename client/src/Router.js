import React, {useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Pages from './pages'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { setUserSessionId, setUserName } from './redux/actions/user';
import { setResponseMessage } from './redux/actions/message';

export default () => {

    // initial things...
    useEffect(()=>{
        store.dispatch(setUserSessionId());
        store.dispatch(setUserName("guest", "https://image.flaticon.com/icons/svg/145/145867.svg"));
        store.dispatch(setResponseMessage(`สวัสดี ${store.getState().user.user_name} ฉันคือ Bot ของ CPE-Chatbot มีอะไรให้ช่วย😄 <br>หากมีคำถามที่ฉันตอบไม่ได้พิมพ์ "ฉันต้องการเพิ่มคำถาม"`));
    }, []);

    useEffect(()=>{
        store.subscribe(()=>{
            console.log(store.getState().user);
        })
    })

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Pages.index} />
                    <Route exact path='/app' component={Pages.Chat} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}




