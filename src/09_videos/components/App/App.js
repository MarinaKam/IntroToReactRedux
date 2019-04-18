import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {PATH_POPULAR, PATH_TOP_RATED, PATH_UPCOMING } from '../../actions/types';

import Main from "../Main/Main";
import Header from "../Header/Header";
import Discover from "../Discover/Discover";
import MovieItem from "../MovieItem/MovieItem";

const App = () => (
    <BrowserRouter>
        <Fragment>
            <header style={{zIndex: "101", position: 'fixed', top: 0, right: 0, left: 0, width: "100%"}}>
                <Header />
            </header>
            <section>
                <Switch>
                    <Route exact path='/' render={() => <Discover title='Discover' />}/>
                    <Route exact path='/popular' render={() => <Main title='Popular' section={PATH_POPULAR} />}/>
                    <Route exact path='/top-rated' render={() => <Main title="Top Rated" section={PATH_TOP_RATED} />}/>
                    <Route exact path='/coming-soon' render={() => <Main title="Coming Soon" section={PATH_UPCOMING} />}/>
                    <Route exact path='/movie/:id' component={MovieItem}/>
                    {/*//        render={props => (*/}
                    {/*//     <MovieItem {...props} id={props.match.params.id}/>*/}
                    {/*// ) }/>*/}
                </Switch>
            </section>
        </Fragment>
    </BrowserRouter>
);

export default App;
