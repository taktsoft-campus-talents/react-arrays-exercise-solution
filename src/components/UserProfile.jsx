import "./UserProfile.css";

export function UserProfile(props) {
  return (
    <div className="profile-container">
      <img
        src={props.imgPath}
        alt={"Image of " + props.firstName + " " + props.lastName}
      />
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <p>
        {props.gender}, {props.age} years
      </p>
    </div>
  );
}
