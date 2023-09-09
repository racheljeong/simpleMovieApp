import Movies from "../components/Movies";

import { useEffect, useState } from "react";


function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    // useEffect(() => {
    //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setMovies(json.data.movies)
    //       setLoading(false)});
    // });
  
    //then 대신에 async, await 사용하기
    // const getMovies = async() => {
    //   const response = await fetch (
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    //   );
    //   const json = await response.json();
    //   setMovies(json.data.movies)
    //   setLoading(false);
    // }
    // useEffect(() => {
    //   getMovies();
    // }, []);
  
    //shortcut ver
  
    const getMovies = async() => {
      const json = await (
        await fetch (
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
        )).json();
        setMovies(json.data.movies)
        setLoading(false);
    }
    useEffect(() => {
      getMovies();
    }, []);
  
  
      console.log(movies);
    return (
      <div>
        {loading ? 
          <h1>Loading...</h1> : (
          <div>
            {movies.map((m) => (
              <Movies 
                key={m.id}
                id={m.id}
                title={m.title} 
                mainImg={m.medium_cover_image}
                summary={m.summary}
                genres={m.genres ? m.genres : null} 
            />
            ))}
          </div>
          )}
      </div>
    );
}

export default Home;