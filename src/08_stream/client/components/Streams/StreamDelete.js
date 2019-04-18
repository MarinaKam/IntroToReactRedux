import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Modal from "../Modal";
import history from '../../history';
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        return (
            <div className="modal-footer">
                <button
                    className="btn btn-danger"
                    onClick={ () => this.props.deleteStream(id) }
                >Delete</button>
                <Link to='/' className="btn btn-secondary">Cancel</Link>
            </div>
        );
    };

    renderContent(){
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete the stream with title - ${this.props.stream.title}`;

    }

    render() {
        return (
                <Modal
                    title='Delete Stream'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);