import React from 'react'

import { Switch, Route } from 'react-router-dom'
import routes from './routes.js'
import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'

export class RootCmp extends React.Component {
    render() {
        return (
            <div className='all-container' >
                <div className='header-container'>
                    <AppHeader />
                </div>
                <main className='main-container'>
                    <Switch>
                        {routes.map(route => <Route key={route.path} exact={route.exact} component={route.component} path={route.path} />)}
                    </Switch>
                </main>
                <div className='footer-container'>
                    <AppFooter />
                </div>

            </div>
        )
    }
}
