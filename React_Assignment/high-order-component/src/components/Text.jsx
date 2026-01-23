import withToggleVisibility from "../hocs/withToggleVisibility";

function Text({ isVisible, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Show / Hide Text</button>
      {isVisible && <p>This is some text</p>}
    </div>
  );
}

export default withToggleVisibility(Text);
