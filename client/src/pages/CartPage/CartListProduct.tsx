import CardOrder from "components/UI/CardOrder";
import React from "react";

function CartListProduct() {
  const list = [1, 2, 3,4,5,6,7,8,9];
  return (
    <div className="cart_list_product mb-[2rem]">
      {list.map((items: any, index: number) => (
        <CardOrder key={index} type="Remove" />
      ))}
    </div>
  );
}

export default CartListProduct;
