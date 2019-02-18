import React, { Component, Fragment } from 'react';
import SongList from "../SongList/SongList";
import SongDetail from "../SongDetail/SongDetail";

class App extends Component {
    render() {
        return(
            <Fragment>
                <section className='container'>
                    <h1>List of Songs</h1>
                </section>
                <section className='container'>
                    <div className="row">
                        <SongList />
                        <SongDetail/>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default App;
