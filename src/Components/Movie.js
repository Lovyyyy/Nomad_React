import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movie (props) {

  return (
    <div>
      <img alt={props.title} src={props.coverImg} />
    
      <Link to = {`/movie/${props.id}`} ><h2>{props.title}</h2> </Link> <span>{props.rating}</span>
      <div>
        {props.genres.map((genre,idx)=> <div key={idx}>{genre}</div>)}
      </div>
      <p>{props.summary}</p>
    </div>
  ) 
}



Movie.propTypes = {
  id : PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired, 
  title : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
  summary : PropTypes.string.isRequired
}

//  propTypes >> props에 들어오는 데이터들의 타입에 대해서 명확히 정리하는 구문

export default Movie