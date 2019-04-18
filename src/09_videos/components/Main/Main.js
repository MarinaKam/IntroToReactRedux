import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from "../../actions";
import List from "../List/List";
import { DEFAULT_PAGE } from "../../actions/types";

class Main extends Component {

    componentDidMount() {
        this.props.fetchPopularMovies(this.props.section, DEFAULT_PAGE);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.section !== this.props.section){
            this.props.fetchPopularMovies(nextProps.section, DEFAULT_PAGE);
        }
    }

    nextPage = (e) => {
        e.preventDefault();
        const { section, page } = this.props;
        this.props.fetchPopularMovies(section, page + 1);
    };

    render() {
        const { movies } = this.props;
        return (
            <div className='container-fluid'>
                <h1>
                    {this.props.title}
                </h1>
                { movies &&
                    <List list={this.props.movies} nextPage={this.nextPage}/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
        movies: state.movies.results,
        page: state.movies.page
});


export default connect(mapStateToProps, {  fetchPopularMovies })(Main);