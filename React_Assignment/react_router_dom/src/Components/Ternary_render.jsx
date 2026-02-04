import trueimg from "../assets/Images/true.jpg";
import falseimg from "../assets/Images/false.jpg";

const Ternary_render = () => {
  const definition =
    "A ternary is a short if-else written in one line. Use it to render different UI/text based on a condition.";
  const on = true;

  return (
    <section className="page">
      <h1>Conditional Rendering using Ternary Operator</h1>
      <p>{definition}</p>
      {on ? <img src={trueimg} alt="true" className="demo-img-small" /> : <img src={falseimg} alt="false" className="demo-img-small" />}
    </section>
  );
};

export default Ternary_render;
