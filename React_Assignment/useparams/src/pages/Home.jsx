import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const product = { name: "Laptop", price: 50000 };

  return (
    <>
      <div>
        <h2>Home Page</h2>

        {/* TASK 1: pass state */}
        <button onClick={() => navigate("/product", { state: product })}>
          View Product
        </button>

        <br /><br />

        {/* TASK 2: query params */}
        <button
          onClick={() => navigate("/profile?name=Priya&age=22")}
        >
          View Profile
        </button>

        <br /><br />

        {/* TASK 3: theme from query */}
        <button
          onClick={() => navigate("/theme?theme=dark")}
        >
          Dark Theme
        </button>

        <button
          onClick={() => navigate("/theme?theme=light")}
        >
          Light Theme
        </button>
      </div>
    </>
  );
}

export default Home;
