import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import CategoryItems from "./CategoryItems";
import useFetchData from "../../hooks/useFetchData";

const Home = () => {
  const { data, error, loading } = useFetchData("/products?populate=*");

  return (
    <div className="px-10 py-8 w-11/12">
      <Header />
      <CategoryItems />
      <div className="mt-8 grid grid-cols-5 gap-x-5 gap-y-8">
        {loading ? (
          <div className="flex">
            <span className="loading loading-dots loading-lg bg-orange-500"></span>
          </div>
        ) : error ? (
          "error, sorry I couldn't connect to the server!"
        ) : (
          data?.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default Home;
