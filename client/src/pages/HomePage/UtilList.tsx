import React from "react";
import { UTIL_LIST } from "utils/constants";

function UtilList() {
  return (
    <div className="flex flex-wrap justify-between gap-[2rem] text-center items-center">
      {UTIL_LIST.map((item: any, key: number) => (
        <div className="util_list_item flex flex-col items-center justify-center">
          <img src={item.img} alt="" />
          <span
            style={{
              backgroundColor: item.bgcolor,
              color: item.color,
            }}
          >
            {item.step}
          </span>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default React.memo(UtilList);
