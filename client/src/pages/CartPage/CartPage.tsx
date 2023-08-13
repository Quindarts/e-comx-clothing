import React from "react";
import CartListProduct from "./CartListProduct";
import Payment from "./Payment";

function CartPage() {
  return (
    <div className="cart_page">
      <h1>Shopping Cart</h1>
      <div className="flex flex-wrap gap-[5rem] w-full">
        <CartListProduct />
        <Payment />
      </div>
    </div>
  );
}

export default CartPage;
