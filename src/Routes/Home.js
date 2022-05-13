import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import Movie from '../Components/Movie'
import Button from '../Components/Button'


function Home () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
  //   .then((res) => {
  //     console.log(res)
  //     setMovies(res.data.movies)
  //     setLoading(false)
  //   })
  //   .catch((err) => alert(err))
  // })

  const getMovies = async() => {
    const res = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    // console.log(res)
    setMovies(res.data.data.movies)
    setLoading(false)
  }

  // const getMovies = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //     )
  //   ).json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };

  useEffect(()=> {
    getMovies()
  }, [] )


  return (
    
    <div> 
      <div>
        <Link to = '/movie/:id'>
          <Button url='/movie/:id' name='박하사탕' />
        </Link>
      </div>
      <section>
      {loading ? <h1>Loading</h1> : 
        <div>{movies.map((item) => (
            <Movie 
              id = {item.id}
              key = {item.id}
              coverImg = {item.medium_cover_image}
              title = {item.title}
              genres = {item.genres}
              summary = {item.summary} 
              rating = {item.rating} />
              )
            )}
            {/* <img alt={item.title} src={item.medium_cover_image} />
            <h2>{item.title}</h2> <span>{item.rating}</span>
            <div>
              {item.genres.map((genre,idx)=> <div key={idx}>{genre}</div>)}
            </div>
            <p>{item.summary}</p> */}

        </div>}
      </section>
    </div>
  )
}

export default Home


/*
!react-dom.development.js:86 Warning: validateDOMNesting(...): <h1> cannot appear as a descendant of <p>.

p 태그 내부에 h1을 넣지마라 
*/