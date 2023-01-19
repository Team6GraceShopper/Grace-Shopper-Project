import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/account/AuthForm";
import SingleProduct from "../features/Products/SingleProduct.jsx";
import SearchResults from "../features/Products/SearchResults.jsx";
import AllProducts from "../features/Products/AllProducts.jsx";
import Home from "../features/home/Home";
import { me } from "./store";
import SignUp from "../features/signup/SignUp";
import Cart from "../features/shop/Cart.jsx";
import Checkout from "../features/shop/Checkout.jsx";
import About from "../features/info/About.jsx";
import Contact from "../features/info/Contact.jsx";
import AddItems from "../features/admin/AddItems.jsx";
import EditItems from "../features/admin/EditItems.jsx";


/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => Boolean(state.auth.me.id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/searchresults" element={<SearchResults />} />
          {/* <Route path="/product" element={<SingleProduct />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/additems" element={<AddItems />} />
          <Route path="/edititems" element={<EditItems />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
