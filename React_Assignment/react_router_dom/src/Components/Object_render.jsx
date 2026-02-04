const Object_render = () => {
  const definition =
    "Object rendering means displaying object data on the webpage by accessing its keys/properties. You cannot render the whole object directly—only its values.";
  const students = { ID: 1, Name: "Priya", Course: "FullStack" };

  return (
    <section className="page">
      <h1>Object Render</h1>
      <p>{definition}</p>
      <div>
        <strong>ID:</strong> {students.ID} <br />
        <strong>Name:</strong> {students.Name} <br />
        <strong>Course:</strong> {students.Course}
      </div>
    </section>
  );
};

export default Object_render;
