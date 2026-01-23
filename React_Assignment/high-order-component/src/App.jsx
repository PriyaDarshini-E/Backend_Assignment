import Like from "./components/Like";
import Dislike from "./components/Dislike";
import Text from "./components/Text";
import Image from "./components/Image";
import LightMode from "./components/LightMode";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>HOC Examples</h2>

      <Like />
      <Dislike />

      <hr />

      <Text />
      <Image />

      <hr />

      <LightMode />
      <DarkMode />
    </div>
  );
}

export default App;
