import "./styles.css";

const Card = ({ person }) => {
  const { name, username, email, imageUrl } = person;
  return (
    <div className="card-container">
      <img
        alt={`person ${name}`}
        src={imageUrl}
      />
      <h2>{name}</h2>
      <p>{username}
      <p>{email}</p>
    </div>
  );
};

export default Card;
