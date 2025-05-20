import { useState, useContext, useRef } from "react";
import { TravelContext } from "./travelContext";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { onAddItems } = useContext(TravelContext);
  const input = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);

    input.current.focus();
  }

  return (
    <form
      className="mx-12 p-6 flex items-center gap-5 justify-center"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-mono">What do you need for your 😍 trip?</h3>
      <select
        className="border-1 w-50 h-10 rounded-2xl"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        className="w-50 h-10 rounded-2xl p-2 border-1"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ref={input}
      />
      <button className="bg-black text-2xl w-50 text-white h-10 rounded-2xl">
        Add
      </button>
    </form>
  );
}
