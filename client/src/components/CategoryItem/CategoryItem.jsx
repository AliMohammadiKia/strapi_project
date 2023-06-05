import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryItem = ({ text, icon }) => {
  return (
    <section className="bg-white shadow-md text-black hover:bg-orange-500 hover:text-white hover:cursor-pointer transition-all py-2 px-6 w-fit rounded-md flex items-center justify-center gap-2">
      <FontAwesomeIcon icon={icon} className="text-lg" />
      {text ? text : "Category"}
    </section>
  );
};

export default CategoryItem;
