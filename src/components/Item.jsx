import { useState } from "react";

function Item({ item, onDelete, onIncrease, onDecrease }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="item-container">
      <div className="item-name">
        <input type="checkbox" onClick={() => setIsOpen((prev) => !prev)} />{" "}
        <span className={isOpen ? "completed" : ""}>{item.name}</span>
      </div>
      <div>
        <button
          style={{ background: "white" }}
          onClick={() => onDecrease(item)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          style={{ background: "white" }}
          onClick={() => onIncrease(item)}
        >
          +
        </button>
        <button style={{ background: "white" }} onClick={() => onDelete(item)}>
          Sil
        </button>
      </div>
    </div>
  );
}

export default Item;
