const Nullish_render = () => {
  const definition =
    "Nullish Rendering means: Render a fallback value when the main value is null or undefined. This uses the Nullish Coalescing Operator (??).";
  const nullish = null;
  const not_nullish = "This is not nullish because it is not null or undefined.";

  return (
    <section className="page">
      <h1>Nullish Coalescing render</h1>
      <p>{definition}</p>

      {/* if nullish is null/undefined, show fallback */}
      <div>{nullish ?? <h4>This is Nullish Coalescing fallback</h4>}</div>

      {/* not_nullish is defined so it will render its value */}
      <div>{not_nullish ?? <h4>This is not Nullish Coalescing</h4>}</div>
    </section>
  );
};

export default Nullish_render;
