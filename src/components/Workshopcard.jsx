const WorkshopCard = (props) => {
    return (
        <div className="workshop-card">
            <h3>{props.title}</h3>
            <p>Date: {props.date}</p>
            <p>Location: {props.location}</p>
            <p>Description: {props.description}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="more-info">More Info</a>
        </div>
    );
}

export default WorkshopCard;