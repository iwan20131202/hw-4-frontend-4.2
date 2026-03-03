const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <span
        className={`status ${isOnline ? "online" : "offline"}`}
      ></span>

      <img
        className="avatar"
        src={avatar}
        alt={name}
      />

      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;