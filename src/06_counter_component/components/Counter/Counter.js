import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions';

const Counter = ({ count, increment, decrement }) => {
    return (
        <Fragment>
            <h4>Current Count: <span>{ count }</span></h4>
            <button
                className="increment btn btn-info mr-2"
                onClick={increment}
            >
                Increment
            </button>
            <button
                className={count === 0 ? 'decrement btn btn-danger disabled' : 'decrement btn btn-danger'}
                onClick={count === 0 ? null : decrement}
            >
                Decrement
            </button>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({count: state.count});

export default connect(mapStateToProps, { increment, decrement } )(Counter);