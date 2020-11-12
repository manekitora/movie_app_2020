import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './HomeUsingHook.css';


function HomeUsingHook() {

    const [state, setState] = useState({ isLoading: true, movies: [] });
    
    
    async function getMovies() {
      
        const {
          data: {
            data: { movies },
          },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // axios로 api 호출
        setState({ isLoading: false, movies });
      }
     
    useEffect(() => {
        getMovies();
    },[]);


    return (

        <section className="container">
            {state.isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                    
                </div>
            ) : (
                    <div className="movies">
                        {state.movies.map(movie => (
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
                )}
        </section>
    );


}


export default HomeUsingHook;