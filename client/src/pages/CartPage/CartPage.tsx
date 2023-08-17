import React from "react";
import CartListProduct from "./CartListProduct";
import Payment from "./Payment";

function CartPage() {
  return (
    <div className="cart_page">
      <h1>Shopping Cart</h1>
      <div className="flex flex-wrap gap-[5rem] w-full">
        <div className="w-full cart_list_responsive">
          <CartListProduct />
        </div>
        <div className="w-full lg:w-[35%]">
          <Payment type="cart"/>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
