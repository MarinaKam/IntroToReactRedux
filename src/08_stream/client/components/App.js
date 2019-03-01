import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./Header";
import StreamShow from "./Streams/StreamShow";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete from "./Streams/StreamDelete";

const HomePage = () => <div>Home Page!</div>;

const App = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <main className='container'>
                <Route path='/' exact component={HomePage}/>
                <Route path='/streams/show' component={StreamShow}/>
                <Route path='/streams/new' component={StreamCreate}/>
                <Route path='/streams/edit' component={StreamEdit}/>
                <Route path='/streams/delete' component={StreamDelete}/>
            </main>
        </Fragment>
    </BrowserRouter>
);

export default App;
