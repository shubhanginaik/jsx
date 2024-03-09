function ProfileCard({ title, handle, imageSrc }) {
  //const { title, handle } = props;
  return (
    <div>
      <img src={imageSrc} alt="apo img" />
      <div>{title}</div>
      <div>{handle}</div>
    </div>
  );
}

export default ProfileCard;
