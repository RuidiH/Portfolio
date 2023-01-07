const InterestCard = (props) => {
    return (
        <div className="interests__game__card">
          <img src={props.img} alt={props.description} />
        </div>
    );
};

export default InterestCard;