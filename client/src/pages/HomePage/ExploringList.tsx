import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import React from "react";
import { EXPLORE_LIST, ICON_LIBARY } from "utils/constants";

function ExploringList() {
    return (
        <div className="exploring_list flex flex-col items-center">
            <h1>Start exploring.</h1>
            <div className="exploring_list--nav ">
                <ul className="flex items-center justify-evenly px-2">
                    <li className="flex items-center gap-5">
                        <Icon width={20} icon={ICON_LIBARY.i_female_circle} />
                        Women
                    </li>
                    <li className="flex items-center gap-5">
                        <Icon width={20} icon={ICON_LIBARY.i_man_circle} /> Man
                    </li>
                    <li className="flex items-center gap-5">
                        <Icon width={20} icon={ICON_LIBARY.i_user} /> Kids
                    </li>
                    <li className="flex items-center gap-5">
                        <Icon width={20} icon={ICON_LIBARY.i_dumbbells} />{" "}
                        Sports
                    </li>
                    <li className="flex items-center gap-5">
                        <Icon width={20} icon={ICON_LIBARY.i_crown} /> Beauty
                    </li>
                    <li className="flex items-center gap-5">
                        <Icon width={20} icon={ICON_LIBARY.i_jewelry} /> Jewelry
                    </li>
                </ul>
            </div>

            <div className="exploring_list--list w-full flex gap-[3rem] justify-center flex-wrap">
                {EXPLORE_LIST.map((item: any, key: number) => (
                    <div className="exploring_list--item">
                        <div className="img">
                            <img src={item.bgMain} alt="" />
                        </div>
                        <div className="category flex justify-between">
                            <div
                                className="category_img"
                                style={{ backgroundColor: item.bgImg }}
                            >
                                <img src={item.img} alt="category_img" />
                            </div>
                            <span className="flex items-center">
                                {item.productQuantity} products
                            </span>
                        </div>
                        <div className="title">
                            <p>Manufacturar</p>
                            <h1>{item.title}</h1>
                        </div>
                        <Button
                            style={{ padding: "0px" }}
                            className="flex gap-4"
                        >
                            See Collection{" "}
                            <Icon width={20} icon={ICON_LIBARY.i_arrow_right} />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(ExploringList);
