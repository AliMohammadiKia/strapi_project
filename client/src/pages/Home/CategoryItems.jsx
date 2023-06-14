import CategoryItem from "../../components/CategoryItem/CategoryItem";
import {
  faMugHot,
  faStroopwafel,
  faBreadSlice,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";

const CategoryItems = ({ handleChangeCategory }) => {
  const [activeItem, setActiveItem] = useState({ id: 1, name: "Coffee" });
  const { data, error, loading } = useFetchData("/categories");
  const icons = [faMugHot, faStroopwafel, faBreadSlice, faIceCream];

  const handleClick = (id, name) => {
    setActiveItem({ id, name });
    handleChangeCategory(name);
  };

  return (
    <div className="mt-8 flex gap-5">
      {loading ? (
        <div className="flex">
          <span className="loading loading-dots loading-lg bg-orange-500"></span>
        </div>
      ) : error ? (
        "error, sorry I couldn't connect to the server!"
      ) : (
        data?.map((category, index) => (
          <CategoryItem
            key={category.id}
            text={category.attributes.name}
            icon={icons[index]}
            id={category.id}
            handleClick={(id, name) => handleClick(id, name)}
            selectedItem={activeItem.id}
          />
        ))
      )}
    </div>
  );
};

export default CategoryItems;
