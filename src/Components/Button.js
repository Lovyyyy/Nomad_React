import { Link } from "react-router-dom";


function Button(props) {

  const click = () =>{
    <Link to={props.button} />
  }
  return (

  
    <div>
      <button onClick={click}> {props.name} </button>
    </div>
  )
}

export default Button