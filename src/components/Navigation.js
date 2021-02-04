import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart {props.cart.length > 0 ? <span>{props.cart.length}</span> : null}
      </NavLink>
    </div>
  );
};

export default Navigation;
