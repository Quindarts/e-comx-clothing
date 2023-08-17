import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import CardOrder from "components/UI/CardOrder";
import usePopup from "hooks/usePopup";
import { useNavigate } from "react-router";
import { ICON_LIBARY, ROUTE } from "utils/constants";

function PopupCart() {
  const { handleActive, active, menuRef } = usePopup();
  const navigate = useNavigate();
  const list = [1, 2, 3];
  return (
    <div ref={menuRef} className="popup_cart">
      <Button
        className="control_header--item"
        onClick={handleActive}
        size="icon"
      >
        <Icon icon={ICON_LIBARY.i_cart} />
      </Button>
      <div className={`popup_cart_main--${active ? "active" : ""} `}>
        <div className="popup_cart--content">
          <h1>Shopping Cart</h1>
          <div className="list_cart">
            {list.map((items: any, index: number) => (
              <div className="mr-5">
                <CardOrder key={index} type="Remove" />
              </div>
            ))}
          </div>
        </div>
        <div className="popup_cart--footer">
          <p className="flex gap-[3rem] text-[1.6rem]">
            <div className="">
              <span>
                <h2 className="text-[bold]">Subtotal</h2>
              </span>
              <span>Shipping and taxes calculated at checkout.</span>
            </div>
            <span className="total_price">$299.00</span>
          </p>
          <div className="btn_cart mt-[2rem] flex gap-4">
            <Button
              className="w-[20rem] h-[5.4rem]"
              variant="contain"
              color="white"
              onClick={() => {
                handleActive();
                navigate(ROUTE.CART);
              }}
            >
              View Cart
            </Button>
            <Button
              className="w-[20rem] h-[5.4rem]"
              variant="contain"
              color="black"
              onClick={() => {
                handleActive();
                navigate(ROUTE.CHECKOUT);
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupCart;
