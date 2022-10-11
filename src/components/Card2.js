
 import './Card.css'

function Card2(props) {
    return(
  <div className="container">
  <div className="card2">
  <div>{props.title}</div>
  <div>{props.price}</div>
  <div>{props.color}</div>
  <div>{props.date.toISOString()? '2 years ago': 'false'}</div>
  </div>
  </div>
)}

export default Card2;