import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import lg from "assets/image/prt1.webp";
import { Icon } from "@iconify/react";
import { ICON_LIBARY } from "utils/constants";
interface CardOrderPropsType {
    type?: "Remove" | "Leave reviews" | "View cart";
}
function CardOrder(props: CardOrderPropsType) {
    const { type = "" } = props;
    return (
        <div className="card_order flex gap-5">
            <div className="card_order--img">
                <img width="100%" src={lg} alt="card_img" />
            </div>
            <div className="card_order--main">
                <div className="product_detail flex flex-wrap justify-between">
                    <p>
                        <Link className="product_detail--name" to="/">
                            Rey Nylon Backpack
                        </Link>
                        <div className="product_detail--category">
                            Natural <span>XL</span>
                        </div>
                    </p>
                    <Button
                        variant="outline"
                        color="green"
                        className="product_detail--price flex items-center h-[3rem]"
                    >
                        <Icon
                            className="text-[1.8rem]"
                            icon={ICON_LIBARY.i_dollar}
                        />
                        74
                    </Button>
                </div>
                <div className="more_info flex justify-between">
                    <div className="quantity flex items-end">
                        Qty:
                        <span className="ml-3">1</span>
                    </div>
                    <Button
                        className="flex items-end"
                        variant="outline"
                        color="primary"
                    >
                        {type}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CardOrder;
