import React, { Component } from 'react';

class Movie extends Component {
    render() {
        var id = this.props.index
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.year}</h3>
                <p>{this.props.description}</p>
                <button onClick={() => this.props.deleteMovie(id)}>Delete Movie</button>
            </div>
        );
    }
}

export default Movie;