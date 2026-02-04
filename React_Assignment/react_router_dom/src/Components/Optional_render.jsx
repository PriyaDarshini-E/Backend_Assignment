import trueimg from "../assets/Images/true.jpg";

const Optional_render = () => {
  const definition =
    "Optional Rendering means: Render something only if the value exists or if condition wants true (no need for the false part).";
  const on = true;

  return (
    <section className="page">
      <h1>Conditional Rendering using Optional Render</h1>
      <p>{definition}</p>
      {on && <img src={trueimg} alt="true" className="demo-img-small" />}
    </section>
  );
};

export default Optional_render;
