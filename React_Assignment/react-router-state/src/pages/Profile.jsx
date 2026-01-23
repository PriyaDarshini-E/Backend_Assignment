import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h2>Profile Page</h2>

      {data ? (
        <>
          <p>Name: {data.name}</p>
          <p>Role: {data.role}</p>
        </>
      ) : (
        <p>No data received</p>
      )}
    </div>
  );
}

export default Profile;
