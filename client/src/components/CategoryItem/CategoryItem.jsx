import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryItem = ({ text, icon }) => {
  return (
    <button className="btn btn-outline btn-error gap-2 px-6 hover:shadow-sm hover:shadow-error">
      <FontAwesomeIcon icon={icon} className="text-lg" />
      {text ? text : "Category"}
    </button>
  );
};

export default CategoryItem;
