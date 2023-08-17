import CardOrder from "components/UI/CardOrder";
import CartListProduct from "pages/CartPage/CartListProduct";
import Payment from "pages/CartPage/Payment";
import React from "react";

function OrderSummary() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div className="order_summary flex flex-wrap">
      <CartListProduct />
      <Payment  type="checkout" />
    </div>
  );
}

export default OrderSummary;
