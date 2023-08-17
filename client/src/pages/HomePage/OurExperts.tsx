import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import React from "react";
import { EXPERT_LIST, ICON_LIBARY } from "utils/constants";

function OurExperts() {
  return (
    <div className="flex gap-[3rem] flex-wrap ourExperts">
      {EXPERT_LIST.map((item: any, key: number) => (
        <div key={key} className="ourExperts--item flex flex-col gap-5">
          <div className="item_top">
            <img src={item.imgAside} alt="" />
          </div>
          <div className="item_middle flex gap-3">
            {item.listImgItem.map((img: any, key: number) => (
              <img key={key} src={img} alt="img" />
            ))}
          </div>
          <div className="item_bottom flex justify-between">
            <div className="item_bottom--content ">
              <h2>{item.title}</h2>
              <span className="flex">
                {item.category}{" "}
                <span className="flex">
                  {item.rating}
                  <Icon color="#fb923c" width={20} icon={ICON_LIBARY.i_star} />
                </span>
                <span>({item.reviews}reviews )</span>
              </span>
            </div>
            <div className="price">
              <Button className="w-[7rem] flex" variant="outline" color="green">
                <Icon width={25} icon={ICON_LIBARY.i_dollar} />
                {item.price}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(OurExperts);
