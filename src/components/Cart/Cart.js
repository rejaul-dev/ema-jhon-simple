import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <h3>This is cart summery in cart</h3>
      <p>Selected item: {cart.length}</p>
    </div>
  );
};

export default Cart;
