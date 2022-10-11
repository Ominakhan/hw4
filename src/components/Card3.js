import './Card.css';

function Card3 (props) {
    console.log(props);
    return(
<div className="container">
    <div className="card3">
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.color}</div>
        <div>{props.date.toISOString()? '1 years ago': 'false'}</div>
       
    </div>
</div>
    );
}

export default Card3;