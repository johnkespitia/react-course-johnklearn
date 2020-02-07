import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgesNew from '../pages/BadgeNew';
import BadgesDetails from '../pages/BadgesDetailsContainers';
import BadgesEdit from '../pages/BadgeEdit';
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
                    <Route exact path="/badges/:badgeId" component={BadgesDetails} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgesEdit} />
                    <Route  component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;