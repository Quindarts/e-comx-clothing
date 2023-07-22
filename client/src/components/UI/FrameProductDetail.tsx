import React from "react";
import Accordion from "./Accordion";
import Button from "./Button";
import InputQuantity from "./InputQuantity";
import detail1 from "assets/image/detail1.webp";
import detail2 from "assets/image/detail2.webp";
import detail3 from "assets/image/detail3.webp";
import { Icon } from "@iconify/react";
import { ICON_LIBARY, PRODUCT_SIZE } from "utils/constants";
function FrameProductDetail() {
    return (
        <div className="modal_product_detail flex  flex-wrap gap-[3rem]">
            <div className="modal_product_detail--aside flex flex-col gap-5">
                <div className="aside_product_img--main relative">
                    <Button className="btn_liked absolute  top-5 right-5" size="icon">
                        <Icon icon={ICON_LIBARY.i_heart} />
                    </Button>
                    <img width="100%" src={detail1} alt="" />
                </div>
                <div className="w-full aside_product_img--items  flex flex-wrap gap-5 justify-between">
                    <img src={detail2} alt="" />
                    <img src={detail3} alt="" />
                </div>
            </div>
            <div className="modal_product_detail--section">
                <h1 className="mb-[2rem]">Heavy Weight Shoes</h1>
                <div className=" mb-[2rem] flex flex-wrap gap-3">
                    <span>
                        <Button
                            className="flex w-[auto] items-center btn_price"
                            variant="outline"
                            color="green"
                        >
                            320.000 VND
                        </Button>
                    </span>
                    <span className=" flex gap-1 w-[auto]  items-center  ">
                        <Icon
                            color="#facc15"
                            width={20}
                            icon={ICON_LIBARY.i_star}
                        />
                        4.9 :
                    </span>
                    <span
                        className="flex gap-1 w-[auto]  items-center  "
                        style={{ textDecoration: "underline" }}
                    >
                        142 reviews
                    </span>
                    <span className="flex gap-1 w-[auto]  items-center  ">
                        :
                        <Icon width={20} icon={ICON_LIBARY.i_more_star} />
                        New in
                    </span>
                </div>
                <div className="mb-[2rem] ">
                    <label>Color: Black</label>
                </div>
                <div className="mb-[2rem]">
                    <label>
                        <div className="flex justify-between mb-[1rem]">
                            <span>Size:</span>
                            <span>See sizing chart</span>
                        </div>

                        <div className="flex gap-5 list-size">
                            {PRODUCT_SIZE.map((item: string, key: number) => (
                                <Button
                                    value={item}
                                    variant="contain"
                                    color="primary"
                                    key={key}
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>
                    </label>
                </div>
                <div className="mb-[2rem] flex flex-wrap sm:flex-nowrap gap-5 w-full">
                    <InputQuantity className="sm:w-[30%]" />
                    <Button
                        className="w-full  flex items-center justify-center gap-3 h-[6rem]"
                        variant="contain"
                        color="black"
                    >
                        <Icon width={25} icon={ICON_LIBARY.i_cart} />
                        Add to cart
                    </Button>
                </div>
                <div className="mb-[2rem] ">
                    <Accordion className="mb-[2rem] " title="Description">
                        Fashion is a form of self-expression and autonomy at a
                        particular period and place and in a specific context,
                        of clothing, footwear, lifestyle, accessories, makeup,
                        hairstyle, and body posture.
                    </Accordion>
                    <Accordion className="mb-[2rem] " title="Features">
                        <ul>
                            <li>
                                Material: 43% Sorona Yarn + 57% Stretch
                                Polyester
                            </li>
                            <li>
                                Casual pants waist with elastic elastic inside
                            </li>
                            <li>
                                The pants are a bit tight so you always feel
                                comfortable
                            </li>
                            <li>Excool technology application 4-way stretch</li>
                        </ul>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default FrameProductDetail;
