import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song, i) => (
            <li
                className='list-group-item'
                key={`${song.title}-${i}`}
            >
                { song.title }
                <button
                    className="btn btn-outline-info float-right"
                    onClick={() => this.props.selectSong(song)}
                >
                    Select
                </button>
            </li>
        ));
    }

    render() {
        return(
            <Fragment>
                <ul className='list-group list-group-flush col-12 col-md-6'>
                    {this.renderList()}
                </ul>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({ songs: state.songs });

export default connect(mapStateToProps, { selectSong })(SongList);