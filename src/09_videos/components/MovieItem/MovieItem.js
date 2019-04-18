import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchMoviePage } from "../../actions";
import './MovieItem.css';

class MovieItem extends Component {
    componentDidMount() {
        this.props.fetchMoviePage(this.props.match.params.id);
    }
    render() {
        const { movie } = this.props;
        if(!movie) return <div>Loading...</div>;
        const {backdrop_path, poster_path, overview, title} = movie;
        const movieBgc = {
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
        };

        return (
            <Fragment>
                { backdrop_path &&
                    <div className="movie-bgc" style={movieBgc}></div>
                }
                <div className="d-flex flex-lg-row flex-md-column mt-5 pt-5">
                    <div className="container row justify-content-center mx-auto">
                        {poster_path &&
                        <div className="col-lg-4 mx-auto my-3">
                            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                                 className="img-fluid"
                                 alt={title} />
                        </div>
                        }
                        <div className="col-lg-6 mt-3">
                            <h1>{title}</h1>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ movie: state.movies[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchMoviePage })(MovieItem);