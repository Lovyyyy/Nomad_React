import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Routes/Home'
import Detail from "./Routes/Detail";


function App() {

  return  (
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/movie/:id' element = {<Detail /> } />
      </Routes>
    </BrowserRouter>
  )

}
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);

  // // useEffect(() => {
  // //   axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
  // //   .then((res) => {
  // //     console.log(res)
  // //     setMovies(res.data.movies)
  // //     setLoading(false)
  // //   })
  // //   .catch((err) => alert(err))
  // // })

  // const getMovies = async() => {
  //   const res = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
  //   console.log(res)
  //   setMovies(res.data.data.movies)
  //   setLoading(false)
  // }

  // useEffect(()=> {
  //   getMovies()
  // }, [] )


  // const onClick = () => {
  //   console.log(movies)
  // }

  // return (
  //   <div> 
  //   <button onClick={onClick} > Movie 좀 보여줘봐 </button>
  //     {loading ? <h1>Loading</h1> : 
  //     <div>{movies.map((item) => (
  //         <Movie 
  //           key = {item.id}
  //           coverImg = {item.medium_cover_image}
  //           title = {item.title}
  //           genres = {item.genres}
  //           summary = {item.summary} 
  //           rating = {item.rating} />
  //           )
  //         )}
  //         {/* <img alt={item.title} src={item.medium_cover_image} />
  //         <h2>{item.title}</h2> <span>{item.rating}</span>
  //         <div>
  //           {item.genres.map((genre,idx)=> <div key={idx}>{genre}</div>)}
  //         </div>
  //         <p>{item.summary}</p> */}
      
  //     </div>}
  //   </div>
  // )


  export default App;

  /*
  ! map 함수 이용 연습이 많이 되었구만
  ! await , async 과 promise 사용법을 익힐 수 있었구만 

  */