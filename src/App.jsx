import useLocalStorageState from "use-local-storage-state";
import AddItem from "./components/AddItem";
import ItemsList from "./components/ItemsList";
import "./index.css";

const initialItem = [
  { id: 933372, name: "item1", quantity: 0 },
  { id: 118836, name: "item2", quantity: 0 },
];

function App() {
  const [items, setItems] = useLocalStorageState("items", initialItem);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDelete(item) {
    setItems((prevItems) => prevItems.filter((cur) => cur.id !== item.id));
  }

  function handleIncrease(item) {
    setItems((prevItems) =>
      prevItems.map((cur) =>
        cur.id === item.id ? { ...cur, quantity: cur.quantity + 1 } : cur
      )
    );
  }

  function handleDecrease(item) {
    setItems((prevItems) =>
      prevItems.map((cur) =>
        cur.id === item.id
          ? cur.quantity > 0
            ? { ...cur, quantity: cur.quantity - 1 }
            : cur
          : cur
      )
    );
  }

  return (
    <div className="App">
      <div className="app-background">
        <div className="main-container">
          <AddItem onAddItem={handleAddItem} />
          <ItemsList
            items={items}
            onDelete={handleDelete}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
