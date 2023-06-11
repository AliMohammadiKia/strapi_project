import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CategoryItems from "./CategoryItems";

const Home = () => {
  return (
    <div className="px-10 py-8 w-11/12">
      <Header />
      <CategoryItems />
      <div className="mt-8 grid grid-cols-5 gap-x-5 gap-y-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
