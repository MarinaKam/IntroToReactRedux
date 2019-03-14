import React, { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';

import Header from "./Header";
import StreamShow from "./Streams/StreamShow";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete from "./Streams/StreamDelete";
import StreamList from "./Streams/StreamList";
import history from '../history';

const App = () => (
           <Router history={history}>
               <Fragment>
                   <Header />
                   <main className='container'>
                       <Route path='/' exact component={StreamList}/>
                       <Route path='/streams/show' component={StreamShow}/>
                       <Route path='/streams/new' component={StreamCreate} />
                       <Route path='/streams/edit/:id' component={StreamEdit}/>
                       <Route path='/streams/delete/:id' component={StreamDelete}/>
                   </main>
               </Fragment>
           </Router>
);

export default App;
