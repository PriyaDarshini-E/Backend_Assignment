import { useMemo, useState } from "react";

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

const Task3 = () => {
  const [text, setText] = useState("");

  const filtered = useMemo(() => {
    return items.filter(i =>
      i.toLowerCase().includes(text.toLowerCase())
    );
  }, [text]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <input
        type="text"
        placeholder="Search item..."
        onChange={e => setText(e.target.value)}
        className="w-full p-3 rounded border mb-4"
      />

      <div className="grid grid-cols-2 gap-2 max-h-[500px] overflow-y-auto">
        {filtered.map(i => (
          <p key={i} className="bg-white p-2 rounded shadow text-sm">
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Task3;
