import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import lg from "assets/image/prt1.webp";
import { Icon } from "@iconify/react";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import InputQuantity from "./InputQuantity";
interface CardOrderPropsType {
  type?: "Remove" | "Leave reviews" | "View cart";
}
function CardOrder(props: CardOrderPropsType) {
  const navigate = useNavigate();
  const { type = "" } = props;
  return (
    <div className="card_order flex gap-5">
      <div className="card_order--img flex items-center justify-center">
        <img width="100%" src={lg} alt="card_img" />
      </div>
      <div className="card_order--main">
        <div
          onClick={() => navigate(ROUTE.PRODUCT_DETAIL)}
          style={{ cursor: "pointer" }}
          className="product_detail flex flex-wrap justify-between"
        >
          <p>
            <Link className="product_detail--name" to={ROUTE.PRODUCT_DETAIL}>
              Rey Nylon Backpack
            </Link>
            <div className="product_detail--category">
              Natural <span>XL</span>
            </div>
          </p>
          <Button
            variant="outline"
            color="green"
            className="product_detail--price flex items-center h-[3rem] border-none"
            style={{ border: "none" }}
          >
            200.000VND
          </Button>
        </div>
        <div className="more_info flex justify-between items-center">
          <div className="quantity items-end">
            <span>Quantity:</span>
            <InputQuantity className="mt-[1rem]" size="sm" />
          </div>
          <Button className="flex items-end" variant="outline" color="primary">
            {type}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CardOrder);
