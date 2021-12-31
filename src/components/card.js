function Card(props){
    let name = "fab fa-" + props.iconName + " fa-3x";
    return (
        <div className="card">
            <i className={name} ></i>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;