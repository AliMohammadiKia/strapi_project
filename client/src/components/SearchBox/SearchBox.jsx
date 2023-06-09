import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  return (
    <div className="flex-1 flex flex-row-reverse gap-4 items-center">
      <button className="btn btn-outline">
        <FontAwesomeIcon icon={faFilter} className="text-gray-500 w-6 h-6" />
      </button>
      <div className="w-8/12 relative flex flex-row-reverse items-center">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-4 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search product ..."
          className="input input-bordered w-full pl-11"
        />
      </div>
    </div>
  );
};

export default SearchBox;
