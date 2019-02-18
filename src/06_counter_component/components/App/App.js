import React, { Component, Fragment } from 'react';
import Counter from "../Counter/Counter";

class App extends Component {
    render() {
        return(
            <Fragment>
                <section className='container'>
                    <h1>Counter Component</h1>
                </section>
                <section className='container'>
                    <Counter />
                </section>
            </Fragment>
        );
    }
}

export default App;
