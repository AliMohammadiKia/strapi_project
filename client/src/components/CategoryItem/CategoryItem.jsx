import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryItem = ({ text, icon, id, handleClick, selectedItem = 1 }) => {
  return (
    <button
      className={`btn ${
        id === selectedItem ? "btn-active" : "btn-outline"
      } btn-error gap-2 px-6`}
      onClick={() => handleClick(id)}
    >
      <FontAwesomeIcon icon={icon} className="text-lg" />
      {text ? text : "Category"}
    </button>
  );
};

export default CategoryItem;
