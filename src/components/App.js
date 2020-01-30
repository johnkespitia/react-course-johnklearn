import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgesNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import Home from '../pages/Home';

function App(){
    return (
        
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgesNew} />
                    <Route  component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;