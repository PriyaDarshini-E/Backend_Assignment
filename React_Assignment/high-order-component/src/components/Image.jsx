import withToggleVisibility from "../hocs/withToggleVisibility";

function Image({ isVisible, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Show / Hide Image</button>
      {isVisible && <img src="https://via.placeholder.com/150" />}
    </div>
  );
}

export default withToggleVisibility(Image);
