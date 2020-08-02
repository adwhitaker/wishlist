import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROUTES } from './routes'
import Group from '../Group'
import Home from '../Home'
import List from '../List'

export const Navigator = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route path={ROUTES.LIST_PARAM}>
                    <List/>
                </Route>
                <Route path={ROUTES.GROUP_PARAM}>
                    <Group/>
                </Route>
                <Route path={ROUTES.HOME}>
                    <Home/>
                </Route>
            </Switch>
        </React.Fragment>
    )
}


export default Navigator