import Button from "components/UI/Button";
import React from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "utils/constants";
type PaymentPropsType = {
  type?: "cart" | "checkout";
};
function Payment(props: PaymentPropsType) {
  const navigate = useNavigate();
  const { type } = props;
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
          <span style={{ color: "#76db9b" }}> + $5.00</span>
        </div>
        <div className="flex justify-between payment_detail--items tax">
          Tax estimate:
          <span style={{ color: "#76db9b" }}> + $24.9</span>
        </div>
        <div className="flex justify-between payment_detail--items order_total">
          Order total:
          <span style={{ color: "#ef4444" }}> $276.00</span>
        </div>
        {type === "cart" ? (
          <Button
            className="w-full h-[5rem] my-[1rem]"
            variant="contain"
            color="black"
            onClick={() => navigate(ROUTE.CHECKOUT)}
          >
            Checkout
          </Button>
        ) : (
          <Button
            className="w-full h-[5rem] my-[1rem]"
            variant="contain"
            color="black"
            onClick={() => navigate(ROUTE.INDEX)}
          >
            Confirm Order
          </Button>
        )}

        <div className="">Learn more Taxes and Shipping infomation</div>
      </div>
    </div>
  );
}

export default Payment;
