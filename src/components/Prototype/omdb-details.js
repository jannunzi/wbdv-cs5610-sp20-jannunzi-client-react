import React from "react";

export default class OmdbDetails extends React.Component {
    state = {
        movie: {}
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=${this.props.imdbID}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(results => this.setState({
                movie: results
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.imdbID !== prevProps.imdbID) {
            fetch(`http://www.omdbapi.com/?i=${this.props.imdbID}&apikey=4a249f8d`)
                .then(response => response.json())
                .then(results => this.setState({
                    movie: results
                }))
        }
    }

    render() {
        return(
            <div>
                <h1>Details for {this.state.movie.Title}</h1>
                <p>Director: {this.state.movie.Director}</p>
                <p>Plot: {this.state.movie.Plot}</p>
                <p>Actors: {this.state.movie.Actors}</p>
                <img src={this.state.movie.Poster}/>
            </div>
        )
    }
}
