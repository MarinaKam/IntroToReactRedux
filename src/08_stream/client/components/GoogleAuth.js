import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const clientId = '197588885262-6eoii5s3kqlpcou10s28ktembgs9eu7g.apps.googleusercontent.com';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId,
                scope: 'email'
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                    // console.log(this.auth.currentUser.get().getId());
                });
        });
    }

    onAuthChange = isSignedIn => isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();

    onSignInClick = () => this.auth.signIn();

    onSignOutClick = () => this.auth.signOut();

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if(this.props.isSignedIn) {
            return(
                <button
                    onClick={this.onSignOutClick}
                    className='btn btn-outline-warning'>
                    <i className="fab fa-google mr-2"></i>
                    Sign Out
                </button>
            )
        } else {
            return(
                <button
                    onClick={this.onSignInClick}
                    className='btn btn-outline-warning'>
                    <i className="fab fa-google mr-2"></i>
                    Sign In with Google
                </button>
            )
        }
    }


    render() {
        return <Fragment>{this.renderAuthButton()}</Fragment>;
    }
}

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);