import Button from "components/UI/Button";
import React from "react";

function Payment() {
  return (
    <div className="payment bg-dark ">
      <h1>Order Summary</h1>
      <div className="payment_detail">
        <div className="flex justify-between payment_detail--items subtotal">
          Subtotal:
          <span> $249.00</span>
        </div>
        <div className="flex justify-between payment_detail--items shipping">
          Shpping estimate:
          <span style={{color:"#76db9b"}}> + $5.00</span>
        </div>
        <div className="flex justify-between payment_detail--items tax">
          Tax estimate:
          <span style={{color:"#76db9b"}}>  + $24.9</span>
        </div>
        <div className="flex justify-between payment_detail--items order_total">
          Order total:
          <span  style={{color:"#ef4444"}}> $276.00</span>
        </div>
        <Button className="w-full h-[5rem] my-[1rem]" variant="contain" color="black">
          Checkout
        </Button>
        <div className="">
        Learn more Taxes and Shipping infomation
        </div>
      </div>
    </div>
  );
}

export default Payment;
