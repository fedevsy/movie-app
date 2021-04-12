import React from 'react';
import axios from 'axios';
import Movie from '../components/Movies';
import { MdAutorenew } from "react-icons/md";
import './Home.scss'

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    document.querySelector('.nav').style.display = 'flex';
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundColor= '#FAEBEF';
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <MdAutorenew className="loader-icon"/>
        </div>
      ) : (
      <div className="Movies">
        {movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />
        ))}
      </div>
      )
    }
    </section>
  )}
}

export default Home;
