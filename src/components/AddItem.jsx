import { useState } from "react";

function AddItem({ onAddItem }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newItem = { id, name, quantity: 0 };
    if (!name) return;
    onAddItem(newItem);
    setName("");
  }

  return (
    <form className="add-item-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>+</button>
    </form>
  );
}

export default AddItem;
