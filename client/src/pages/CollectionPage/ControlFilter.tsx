import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import PopupDesktop from "components/UI/PopupDesktop";
import React, { useState } from "react";
import { CATEGORY_CONTROL_FILTER, ICON_LIBARY } from "utils/constants";

function ControlFilter() {
    const [buttonState, setButtonState] = useState([
        {
            all: {
                active: true,
                value: "All items",
            },
        },
        {
            women: {
                active: false,
                value: "Women",
            },
        },
        {
            man: {
                active: false,
                value: "Man",
            },
        },
        {
            jewels: {
                active: false,
                value: "Jewels",
            },
        },
        {
            kids: {
                active: false,
                value: "Kids",
            },
        },
    ]);
    const handleButtonClick = (buttonId: string) => {
        let value = buttonId.split(" ").join("").toLowerCase();
        const update = [...buttonState];
        update.map((item: any) => {
            Object.is(Object.keys(item)[0], value)
                ? (item[value].active = true)
                : (item[Object.keys(item)[0]].active = false);
        });
        setButtonState(update);
    };
    const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
    return (
        <div className="control_filter flex flex-col flex-grap  mt-[8rem]">
            <div className="control_filter--top flex justify-between">
                <div className="filter_aside flex gap-5 ">
                    {buttonState.map((item: any, index: number) => (
                        <button
                            key={index}
                            onClick={() =>
                                handleButtonClick(Object.keys(item)[0])
                            }
                            className="type_btn"
                            style={
                                item[Object.keys(item)[0]].active
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
                            {item[Object.keys(item)[0]].value}
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
                    <Icon
                        className="ml-5"
                        width={15}
                        icon={ICON_LIBARY.i_down}
                    />
                </Button>
            </div>
            <div className="border border-spacing-0 my-[3.2rem]"></div>
            {isShowFilter && (
                <div className="control_filter--content flex gap-5">
                    {CATEGORY_CONTROL_FILTER.map((item) => (
                        <PopupDesktop
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

export default ControlFilter;
