import React, { Component } from 'react';
import movies from '../movies.js'
import Movie from './Movie'

class MovieList extends Component {
    state = {
        movies: []
    }

    componentWillMount() {
        console.log(movies)
        this.setState({ movies: movies })
    }
    deleteMovie = (index) => {
        const newState =  {...this.state}
        newState.movies.splice(index, 1)
        this.setState(newState)
    }
    render() {
        var moviescomponent = this.state.movies.map((movie, index) => {
            return <Movie
                key={index}
                index={index}
                title={movie.title}
                description={movie.description}
                year={movie.year}
                delete movie={this.deleteMovie}
            />
        })
        return (
            <div>
                {moviescomponent}
            </div>
        );
    }
}

export default MovieList;