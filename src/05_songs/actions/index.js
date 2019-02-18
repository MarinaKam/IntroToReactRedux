const SELECTED_SONG = 'SELECTED_SONG';

//Action creator
export const selectSong = (song) => {
    // return action
  return {
      type: SELECTED_SONG,
      payload: song
  }
};