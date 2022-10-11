
import './Card.css';

function Card (props) {
    console.log(props);
    return(
<div className="container">
    <div className="card">
       <h1>Omina Mamatalieva</h1>
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.color}</div>
        <div>{props.date.toISOString()}</div>
       
    </div>
</div>
    );
}

export default Card;