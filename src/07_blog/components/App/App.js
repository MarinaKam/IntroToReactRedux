import React, { Fragment } from 'react';
import PostList from "../PostList/PostList";

const App = () => (
    <Fragment>
        <section className='container'>
            <h1>Posts</h1>
        </section>
        <section className='container'>
            <PostList />
        </section>
    </Fragment>
);

export default App;
