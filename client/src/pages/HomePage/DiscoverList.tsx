import Button from "components/UI/Button";
import React from "react";
import { DISCOVER_LIST } from "utils/constants";

function DiscoverList() {
  return (
    <>
      <div className="main_discover flex gap-[3.2rem]">
        {DISCOVER_LIST.map((item, key) => (
          <div
            key={key}
            className="discover_list "
            style={{ backgroundColor: item.color }}
          >
            <div className="discover_list--img">
              <img src={item.img_product} alt="" />
            </div>
            <span>{item.desc}</span>
            <h1 className="mt-3">{item.title}</h1>
            <Button variant="contain" color="white">
              Show me all
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default React.memo(DiscoverList);
