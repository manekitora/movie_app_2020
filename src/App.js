import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello');
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // axios로 api 호출
    this.setState({ movies, isLoading: false });
  }


  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();

  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }


  state = {
    isLoading: true,
    movies: [],
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };




  render() {
    const { isLoading, movies } = this.state;
    return (<div>
      {isLoading
        ? 'Loading...'
        : movies.map((movie) => {
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
        })}
    </div>
    );

  }

}

export default App;
