import withCounter from "../hocs/withCounter";

function Dislike({ count, increment }) {
  return (
    <div>
      <h3>👎 Dislikes: {count}</h3>
      <button onClick={increment}>Dislike</button>
    </div>
  );
}

export default withCounter(Dislike);
