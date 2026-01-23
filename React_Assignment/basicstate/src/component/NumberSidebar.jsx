const NumberSidebar = ({ onSelect }) => {
  return (
    <ul className="space-y-3">
      <li>
        <button
          onClick={() => onSelect("even-odd")}
          className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Even / Odd
        </button>
      </li>

      <li>
        <button
          onClick={() => onSelect("positive-negative")}
          className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Positive / Negative / Zero
        </button>
      </li>
      <li>
        <button
          onClick={() => onSelect("agecheck")}
          className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Age Check
        </button>
      </li>
    </ul>
  );
};

export default NumberSidebar;
