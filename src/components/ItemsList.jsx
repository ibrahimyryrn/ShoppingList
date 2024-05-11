import Item from "./Item";

function ItemsList({ items, onDelete, onIncrease, onDecrease }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDelete}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </ul>
  );
}

export default ItemsList;
