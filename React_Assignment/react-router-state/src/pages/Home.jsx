import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const userData = {
    name: "Priya",
    role: "Frontend Developer",
  };

  return (
    <div>
      <h2>Home Page</h2>

      {/* useParams example */}
      <button onClick={() => navigate("/user/101")}>
        Go to User 101
      </button>

      <br /><br />

      {/* Sending state using useNavigate */}
      <button onClick={() => navigate("/profile", { state: userData })}>
        Go to Profile (Send Data)
      </button>
    </div>
  );
}

export default Home;
