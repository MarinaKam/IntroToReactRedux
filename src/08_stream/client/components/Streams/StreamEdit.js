import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
      this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.stream) {
            return <section className='d-flex justify-content-center align-self-center'>Loading...</section>
        }
        const { title, description } = this.props.stream;
        return (
            <section className='mt-4'>
                <h1>Edit a Stream</h1>
                <StreamForm initialValues={{ title, description }}
                            onSubmit={ this.onSubmit }/>
            </section>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]};
};

export default connect(
    mapStateToProps,
    { fetchStream, editStream })(StreamEdit);