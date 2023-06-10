import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import CategoryItems from "./CategoryItems";

const Home = () => {
  return (
    <div className="py-8 px-8">
      <Header />
      <CategoryItems />
      <div className="mt-8 flex flex-wrap gap-4">
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
