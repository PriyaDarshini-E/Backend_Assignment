const Number_render = () => {
  const definition =
    "Number rendering means displaying (rendering) numbers on a webpage using HTML + JavaScript or React.";
  const marks = 89;
  return (
    <section className="page">
      <h1>This Number Rendering process</h1>
      <p>{definition}</p>
      <p>This is my marks: {marks}</p>
    </section>
  );
};

export default Number_render;
