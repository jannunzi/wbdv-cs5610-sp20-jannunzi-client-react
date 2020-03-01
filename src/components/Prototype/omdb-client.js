import React from "react";
import {Link} from "react-router-dom";

export default class OmdbClient extends React.Component {
    state = {
        movies: [],
        title: ''
    }
    componentDidMount() {
        fetch("http://www.omdbapi.com/?s=batman&apikey=4a249f8d")
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.Search
            }))
    }

    searchMovie = (title) =>
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.Search
            }))

    render() {
        return(
            <div className="container">
                <h1>OMDB Client ({this.state.movies.length})</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            value={this.state.title}
                            onChange={(e) => this.setState({
                                title: e.target.value
                            })}
                            className="form-control"/>
                        <button
                            onClick={() => this.searchMovie(this.state.title)}
                            className="btn btn-primary btn-block">
                            Search
                        </button>
                    </li>
                    {
                        this.state.movies.map(movie =>
                            <li className="list-group-item"
                                key={movie.imdbID}>
                                <Link to={`/omdb/${movie.imdbID}`}>
                                    {movie.Title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
