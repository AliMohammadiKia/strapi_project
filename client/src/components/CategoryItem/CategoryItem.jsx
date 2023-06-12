import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const CategoryItem = ({ text, icon, id, selectedItem = 1 }) => {
  const [activeItem, setActiveItem] = useState(selectedItem);

  // useEffect(() => {

  // }, [activeItem]);

  return (
    <button
      className={`btn ${
        id === activeItem ? "btn-active" : "btn-outline"
      } btn-error gap-2 px-6`}
      onClick={() => setActiveItem(id)}
    >
      <FontAwesomeIcon icon={icon} className="text-lg" />
      {text ? text : "Category"}
    </button>
  );
};

export default CategoryItem;
