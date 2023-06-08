import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  return (
    <div className="flex-1 flex flex-row-reverse gap-4 items-center">
      <div className="w-fit bg-gray-50 flex py-3 px-3 rounded-md shadow-sm hover:cursor-pointer outline outline-2 outline-transparent hover:outline-orange-500 transition-all">
        <FontAwesomeIcon icon={faFilter} className="text-gray-500" />
      </div>
      <div className="w-8/12 relative flex items-center">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-4 text-gray-500"
        />
        <input
          type="text"
          name="search"
          id="search"
          className="bg-gray-50 py-2 pr-2 pl-11 outline-none rounded-md focus:outline-orange-500 w-full transition-all shadow-sm"
          placeholder="Search product ..."
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default SearchBox;
