import React from "react";
import img from "assets/image/prt1.webp";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import { useNavigate } from "react-router";
interface CardProductPropsType {
  handleOpenModal: () => void;
  handleClickToast: () => void;
}
function CardProduct(props: CardProductPropsType) {
  const { handleClickToast, handleOpenModal } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card_image">
          <Button className="btn_liked" size="icon">
            <Icon icon={ICON_LIBARY.i_heart} />
          </Button>
          <img alt="pr" src={img} />
          <div className="overlay flex justify-center gap-[2rem] z-20">
            <Button
              className="flex items-center gap-2 justify-center"
              variant="contain"
              color="black"
              onClick={handleClickToast}
            >
              <Icon className="text-[1.6rem]" icon={ICON_LIBARY.i_bag} />
              Add to bag
            </Button>
            <Button
              className="flex items-center gap-2 justify-center"
              variant="contain"
              color="white"
              onClick={handleOpenModal}
              style={{ boxShadow: "1px 1px 1px 1px grey" }}
            >
              <Icon className="text-[1.6rem]" icon={ICON_LIBARY.i_screen} />
              Quick view
            </Button>
          </div>
        </div>
        <div
          className="card_content"
          onClick={() => navigate(ROUTE.PRODUCT_DETAIL)}
          style={{ cursor: "pointer" }}
        >
          <div className="">
            <h1>Leather Gloves</h1>
            <p>Perfect mint green</p>
          </div>
          <div className="flex card_content--price_reviews mt-5 justify-between items-center">
            <Button
              className="flex items-center text-[2rem] font-bold"
              variant="outline"
              color="green"
              style={{ border: "none" }}
            >
              200.000D
            </Button>
            <span className="flex items-center pt-4">
              4.9
              <Icon icon={ICON_LIBARY.i_star} />
              <div className="text-reviews text-[1.5rem]">(98 reviews)</div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(CardProduct);
