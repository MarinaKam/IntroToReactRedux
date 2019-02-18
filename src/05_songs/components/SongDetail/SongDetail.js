import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ( { song, showSong } ) => {
    return (
        <div className='col-12 col-md-6'>
            <h3><small className="text-muted">Title: </small>{song ? song.title : showSong.title}</h3>
            <p><small className="text-muted">Duration: </small> { song ? song.duration : showSong.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({song: state.selectedSong, showSong: state.songs[0]});

export default connect(mapStateToProps)(SongDetail);