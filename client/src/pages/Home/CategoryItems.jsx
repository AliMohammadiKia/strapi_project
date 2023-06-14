import CategoryItem from "../../components/CategoryItem/CategoryItem";
import {
  faMugHot,
  faStroopwafel,
  faBreadSlice,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons";
import useFetchData from "../../hooks/useFetchData";
import { useState } from "react";

const CategoryItems = () => {
  const { data, error, loading } = useFetchData("/categories");
  const icons = [faMugHot, faStroopwafel, faBreadSlice, faIceCream];
  const [activeItem, setActiveItem] = useState(1);

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
            handleClick={(id) => setActiveItem(id)}
            selectedItem={activeItem}
          />
        ))
      )}
    </div>
  );
};

export default CategoryItems;
