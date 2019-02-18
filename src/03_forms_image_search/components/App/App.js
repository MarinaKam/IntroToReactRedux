import React, { Component, Fragment } from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from "../SearchBar/SearchBar";
import ImageList from "../ImageList/ImageList";
import styles from './App.module.css';

class App extends Component {

    state = {
        images: []
    };

     onSearchSubmit = async (val) => {
      const response = await unsplash.get('/search/photos', {
          params: {
              query: val,
              per_page: 15
          }
      });
      console.log(response.data.results);
      this.setState({images: response.data.results})
    };

    render() {
         return(
            <Fragment>
                <section className={ styles.app }>
                    <h1>Image Search</h1>
                    <hr className={ styles[ 'app__first' ] }/>
                    <hr className={ styles[ 'app__second' ] } />
                    <hr className={ styles[ 'app__third' ] } />
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </section>
                <section>
                    <ImageList images={this.state.images}/>
                </section>
            </Fragment>
        );
    }
}

export default App;
