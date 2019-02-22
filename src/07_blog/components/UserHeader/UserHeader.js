import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
    render() {
        const { user } = this.props;
        if(!user) return (
            <div className="spinner-border spinner-border-sm text-primary" style={{opacity: '0.5'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
        return (
            <p className="text-primary">{user.name}</p>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ user: state.users.find(el => el.id === ownProps.userId)});

export default connect(mapStateToProps )(UserHeader);