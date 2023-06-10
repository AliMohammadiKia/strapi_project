import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

const CategoryItems = () => {
  const categories = [
    { text: "Coffee", icon: faMugHot },
    { text: "Coffee", icon: faMugHot },
    { text: "Coffee", icon: faMugHot },
    { text: "Coffee", icon: faMugHot },
    { text: "Coffee", icon: faMugHot },
  ];

  return (
    <div className="mt-8 flex gap-5">
      {categories.map((category, index) => (
        <CategoryItem key={index} text={category.text} icon={category.icon} />
      ))}
    </div>
  );
};

export default CategoryItems;
