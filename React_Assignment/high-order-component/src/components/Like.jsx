import withCounter from "../hocs/withCounter";

function Like({ count, increment }) {
  return (
    <div>
      <h3>👍 Likes: {count}</h3>
      <button onClick={increment}>Like</button>
    </div>
  );
}

export default withCounter(Like);
