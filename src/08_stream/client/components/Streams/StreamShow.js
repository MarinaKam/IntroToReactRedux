import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from "../../actions";

class StreamShow extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        // console.log(this.props.stream);
        if (!this.props.stream) {
            return (
                <section className='d-flex justify-content-center align-self-center'>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </section>

            );
        }
        const { title, description } = this.props.stream;
        return (
            <section className='mt-4'>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </section>
        );
    }
}

const mapStateToProps = ( state, ownProps ) => ({ stream: state.streams[ownProps.match.params.id]});

export default connect(mapStateToProps, {fetchStream})(StreamShow);