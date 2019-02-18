import React, { Component, Fragment } from 'react';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    render() {
        return (
         <Fragment>
                 {this.state.errorMessage && !this.state.lat ? <div>Error: {this.state.errorMessage}</div> :
                     !this.state.errorMessage && this.state.lat ? <SeasonDisplay lat={this.state.lat}/> :
                         <Spinner message='Please accept location request'/> }
         </Fragment>
        );
    }
}

export default App;
