import Greeting from "./Greeting";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
  return (
    <div className="flex items-center">
      <Greeting />
      <SearchBox />
    </div>
  );
};

export default Header;
