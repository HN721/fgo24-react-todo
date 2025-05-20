import { useContext } from "react";
import { TravelContext } from "./travelContext";

export default function Item({ item }) {
  const { onDeleteItem, onToggleItem } = useContext(TravelContext);

  return (
    <li className="flex gap-2">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
