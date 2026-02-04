import priyaimg from "../assets/Images/priya.jpg";
import suryaimg from "../assets/Images/jayasurya.jpeg";
import keerthiimg from "../assets/Images/Keerthi.jpg";

const Array_of_object_render = () => {
  const definition =
    "Array of object rendering means looping through the array using .map() and displaying each object's values.";

  const students = [
    { ID: 1, Name: "Priya", img: priyaimg, Course: "FullStack" },
    { ID: 2, Name: "Jayasurya", img: suryaimg, Course: "Java Developer" },
    { ID: 3, Name: "Keerthi", img: keerthiimg, Course: "Software Tester" }
  ];

  return (
    <section className="page">
      <h1>Array of Object Render</h1>
      <p>{definition}</p>

      <div className="card-container">
        {students.map((e) => (
          <div className="card" key={e.ID}>
            <img src={e.img} className="card-img" alt={e.Name} />
            <div className="card-details">
              <h3>{e.Name}</h3>
              <p><b>ID:</b> {e.ID}</p>
              <p><b>Course:</b> {e.Course}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Array_of_object_render;
