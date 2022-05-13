
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Components/Button";

function Detail () {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false)
  const {id}  = useParams()
  // console.log( JSON.stringify (x))
  // console.log(id)

  const getMovie = async() => {
    const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const movie = res.data.data.movie
      setMovie(movie)
      console.log(movie)
      setLoading(true)
  }

  useEffect(() => {
    getMovie()
  }, [] )

  return (

  <div>
    <Link to = '/'>
      <Button key='/movie' name='나 돌아갈래' />
    </Link>
    {loading ?
    <div>
      <h1> {movie.title} </h1> 
      <img alt={movie.title} src={movie.large_cover_image}/ >
      <div>Rating : {movie.rating}</div>
      <div>
        Genres : {movie.genres.map((genre,idx) => <span key={genre}>{genre} </span>)} 
        
      </div>
      {/* {props.genres.map((genre,idx)=> <div key={idx}>{genre}</div>)} */}
      <p> {movie.description_full}</p>
    </div> 
  : null}
    

  </div>
  )
}

export default Detail





/*

! map 함수 사용 과정에서 발생 되는 에러
Cannot read properties of undefined (reading 'map')
이는 undefined를 맵 할 수 없다는 의미로 어떤 의미인가 했더니, 

  페이지가 시작 되며 코드는 비동기적으로 진행이 된다
  이로 인해 axios가 영화 정보를 get 을 완료하기전에 
  이미 렌더링 작업이 종료가 되는 점이며, 렌더링이 완료가 되었으나, 
  실제 movie 에는 어떠한 데이터도 없기에 map 함수를 적용 할 수 없었다.

  해결을 위해 loading 이라는 상태를 별도로 추가하여, axios를 통해 데이터를 가지고 온 뒤
  loading 상태를 true로 변경 했고, loading이 true가 된 상태에서만 페이지에 영화 정보가 렌더링 될 수 있도록 처리. 

*/