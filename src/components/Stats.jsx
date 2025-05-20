import { useContext } from "react";
import { TravelContext } from "./travelContext";

export default function Stats() {
  const { items } = useContext(TravelContext);

  if (!items.length)
    return (
      <p className="pt-12 text-center font-bold">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className=" text-center pt-12">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
