import { useLocation } from "react-router-dom";

function Profile() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const name = params.get("name");
  const age = params.get("age");

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Profile;

