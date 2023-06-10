import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <Link className="card card-compact w-1/5 bg-base-100 shadow-xl hover:scale-105 transition-all relative">
      <figure className="h-64">
        <img
          src="/img/croissant.jpg"
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">Almond Brown Sugar Croissant</h2>
        <p className="text-gray-400 py-2">
          Sweet croissant with topping almonds and brown sugar
        </p>
        <div>
          <p className="text-2xl font-bold text-orange-500">
            $12.98{" "}
            <span className="text-lg text-slate-400 font-normal">/ 3pcs</span>
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
