import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CategoryItems from "./CategoryItems";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_API_BASE_URL + "/products?populate=*",
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
          },
        }
      );
      setProducts(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="px-10 py-8 w-11/12">
      <Header />
      <CategoryItems />
      <div className="mt-8 grid grid-cols-5 gap-x-5 gap-y-8">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
