import { useState } from "react";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";
import { TravelContext } from "./components/travelContext";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <TravelContext.Provider
      value={{
        items,
        onAddItems: handleAddItems,
        onDeleteItem: handleDeleteItem,
        onToggleItem: handleToggleItem,
        onClearList: handleClearList,
      }}
    >
      <div className="w-full h-screen grid ">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </TravelContext.Provider>
  );
}
