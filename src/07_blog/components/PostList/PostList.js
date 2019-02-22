import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../../actions';
import UserHeader from "../UserHeader/UserHeader";

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        const capitalize = s => (
            typeof s !== 'string' ? s : s.charAt(0).toUpperCase() + s.slice(1));
        return this.props.posts.map(({id, title, body, userId}) => (
            <li className="list-group-item list-group-item-action" key={id}>
                <div className="media">
                        <i className="far fa-user fa-3x align-self-center mr-3 text-primary"></i>
                        <div className="media-body">
                            <h5 className="mt-0">{ capitalize(title) }</h5>
                            <p className="mb-0">{ capitalize(body) }</p>
                            <UserHeader userId={userId}/>
                        </div>
                </div>
            </li>
        ));
    }

    render() {
        if(this.props.posts.length === 0) return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-secondary" style={{width:'2rem', height: '2rem', opacity: '0.5'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
        return (
            <ul className="list-group list-group-flush">{ this.renderList() }</ul>
        );
    }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);