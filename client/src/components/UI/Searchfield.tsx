import { Icon } from "@iconify/react";
import React, { HTMLAttributes, useState } from "react";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import Button from "./Button";
import img from "assets/image/detail1.webp";
import usePopup from "hooks/usePopup";
import { useNavigate } from "react-router";
interface SearchFieldPropsType extends HTMLAttributes<HTMLInputElement> {
  setChangeValue?: any;
}
function Searchfield(props: SearchFieldPropsType) {
  const list = [1, 2, 3];
  const [valueParams, setValueParams] = useState("");
  const { handleActive, active, menuRef } = usePopup();
  const navigate = useNavigate();
  return (
    <div
      ref={menuRef}
      className="search_field flex items-center justify-between gap-5"
    >
      <button className="search_field--btn_search">
        <Icon width={24} icon={ICON_LIBARY.i_search} />
      </button>
      <input
        onChange={(e: any) => {
          handleActive();
          setValueParams(e.target.value);
        }}
        type="text"
        placeholder="Type your keywords"
      />
      <Button
        onClick={() => navigate(ROUTE.COLLECTION_SEARCH)}
        className="search_field--submit"
        variant="contain"
        color="black"
      >
        <Icon width={20} icon={ICON_LIBARY.i_arrow_right} />
      </Button>
      {active && (
        <div className="search_field--details">
          <div className="header h-[6rem] "></div>
          <div className="body">
            {list.map((item, key) => (
              <>
                <div key={key} className="card_search flex gap-5">
                  <img src={img} alt="" />
                  <div onClick={()=> navigate(ROUTE.PRODUCT_DETAIL)}>
                    <div className="title">Heavy Weight Shoes</div>
                    <div className="price">320.000VND</div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="footer px-[2rem] py-[1rem]  mx-[1rem] mb-[1rem]">
            <div
              onClick={() => {
                handleActive();
                navigate(ROUTE.COLLECTION_SEARCH);
              }}
              className="flex gap-5 items-center"
            >
              <div className="p-[1rem] icon_cir bg-slate-400">
                <Icon color="#fff" width={20} icon={ICON_LIBARY.i_search} />
              </div>
              <div className="text-[1.6rem] text-gray-500">See all result</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchfield;
