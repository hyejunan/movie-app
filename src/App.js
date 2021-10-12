//import logo from './logo.svg';
import React from "react";
import axios from "axios";
//import './App.css';
import Movie from "./Movie";
import PropTypes from "prop-types";
import { thisStringValue } from "es-abstract";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>{isLoading ? "Loading": movies.map(movie => {
        return (
          <Movie 
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image} 
          />
        );
      })}</div>
      );
  }
}

export default App;
