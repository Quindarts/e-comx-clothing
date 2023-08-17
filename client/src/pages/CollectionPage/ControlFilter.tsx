import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import PopupDesktop from "components/UI/PopupDesktop";
import React, { useState } from "react";
import {
  CATEGORY_CONTROL_FILTER,
  ICON_LIBARY,
  LIST_CONTROL_FILTER,
} from "utils/constants";
import { getNameObject, useControllHandleListObject } from "helpers";

function ControlFilter() {
  const { handleActiveObj, list } =
    useControllHandleListObject(LIST_CONTROL_FILTER);

  const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
  return (
    <div className="control_filter flex flex-col flex-grap  mt-[8rem]">
      <div className="control_filter--top flex justify-between">
        <div className="filter_aside flex gap-5 ">
          {list.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => handleActiveObj(getNameObject(item))}
              className="type_btn"
              style={
                item[getNameObject(item)].active
                  ? {
                      background: "black",
                      color: "#f1f5ec",
                    }
                  : {
                      background: "white",
                      color: "#647492",
                    }
              }
            >
              {item[getNameObject(item)].value}
            </button>
          ))}
        </div>
        <Button
          className="filter_btn w-[15rem] flex justify-between items-center text-[1.8rem]"
          variant="contain"
          color="black"
          onClick={() => setIsShowFilter(!isShowFilter)}
        >
          <Icon width={15} icon={ICON_LIBARY.i_filter} />
          Filter
          <Icon className="ml-5" width={15} icon={ICON_LIBARY.i_down} />
        </Button>
      </div>
      <div className="border border-spacing-0 my-[3.2rem]"></div>
      {isShowFilter && (
        <div className="control_filter--content flex gap-5">
          {CATEGORY_CONTROL_FILTER.map((item, key) => (
            <PopupDesktop
              key={key}
              type={item.type}
              mainType={item.mainType}
              list={item.list}
              iconTitle={item.icon}
              title={item.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(ControlFilter);
