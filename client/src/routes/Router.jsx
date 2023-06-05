import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Notes from "../pages/Notes/Notes";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import NotFound from "../pages/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
