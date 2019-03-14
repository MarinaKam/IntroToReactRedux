import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from "./StreamForm";

class StreamCreate extends Component {

    onSubmit = formValues => {
       this.props.createStream(formValues);
    };

    render() {
        return(
            <section className='mt-4'>
                <h1>Create a Stream</h1>
                <StreamForm onSubmit={this.onSubmit} />
            </section>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);