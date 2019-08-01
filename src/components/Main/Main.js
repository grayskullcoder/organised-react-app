import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import UserPage from '../../pages/UserPage/UserPage'

function Main() {
    return(
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/user/:id" exact component={UserPage} />
            </Switch>
        </main>
    )
}

export default Main