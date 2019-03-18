import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

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
                       <Switch>
                           <Route path='/' exact component={StreamList}/>
                           <Route path='/streams/new' exact component={StreamCreate} />
                           <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                           <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                           <Route path='/streams/:id' exact component={StreamShow}/>
                       </Switch>
                   </main>
               </Fragment>
           </Router>
);

export default App;
