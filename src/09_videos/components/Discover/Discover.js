import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverMovies } from "../../actions";
import List from "../List/List";
import { DEFAULT_PAGE } from "../../actions/types";


class Discover extends Component{

    componentDidMount() {
        this.props.fetchDiscoverMovies(DEFAULT_PAGE);
    }

    nextPage = (e) => {
        e.preventDefault();
        const { page } = this.props;
        this.props.fetchDiscoverMovies(page + 1);
    };

    render() {
        const { movies } = this.props;
        return (
            <div className='container-fluid'>
                <h1>
                    {this.props.title}
                </h1>
                { movies &&
                    <List list={movies} nextPage={this.nextPage} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({ movies: state.movies.results, page: state.movies.page });

export default connect(mapStateToProps, { fetchDiscoverMovies })(Discover);