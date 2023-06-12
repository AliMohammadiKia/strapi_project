import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Card = ({ product }) => {
  console.log(product);
  return (
    <Link className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-all relative">
      <figure className="h-64">
        <img
          src={
            import.meta.env.VITE_BASE_URL +
            product.attributes.image.data.attributes.url
          }
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{product.attributes.title}</h2>
        <p className="text-gray-400 py-2">
          {product.attributes.description.substring(0, 100)} ...
        </p>
        <div>
          <p className="text-2xl font-bold text-orange-500">
            ${product.attributes.price}
            <span className="text-lg text-slate-400 font-normal">
              {" "}
              / {product.attributes.pcs} pcs
            </span>
          </p>
        </div>
      </div>
      <div
        className="w-fit h-fit bg-[rgba(255,255,255,0.5)] py-2 px-3 absolute right-2 top-2 rounded-md z-10"
        onClick={() => alert("add to cart!")}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-lg text-orange-600"
        />
      </div>
    </Link>
  );
};

export default Card;
