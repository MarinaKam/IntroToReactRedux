import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from "../../actions";

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(userId, id) {
        if (userId === this.props.currentUserId){
            return (
                <div className='align-self-center'>
                  {/*<button type="button" className="btn btn-danger">Delete</button>*/}
                  <Link to={`/streams/delete/${id}`} className="btn btn-danger">Delete</Link>
                  <Link to={`/streams/edit/${id}`} className="btn btn-primary mx-2">Edit</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(({ id, title, description, userId }) => (
            <div className="shadow px-3 mb-2 bg-white rounded" key={id}>
                <div className="d-flex justify-content-between media">
                    <i className="fas fa-camera fa-3x align-self-center mr-3"></i>
                    <div className="media-body pt-2">
                        <h5 className="mt-0">
                            <Link to={`/streams/${id}`}>
                                { title }
                            </Link>
                        </h5>
                        <p>{ description.length > 100 ? description.substring(0, 100) + '...' : description}
                            <Link to={`/streams/${id}`}> read more</Link>
                        </p>
                    </div>
                    { this.renderAdmin(userId, id) }
                </div>
            </div>
        ));
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to='/streams/new' className="btn btn-primary">Create Stream</Link>
                </div>
            )
        }
    }

    render() {
        return  (
            <Fragment>
                <h3>Streams</h3>
                <hr className="my-4" />
                { this.renderList() }
                { this.renderCreate() }
                </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { fetchStreams } )(StreamList);