import React, { useState } from "react";
import img from "assets/image/prt1.webp";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { ICON_LIBARY } from "utils/constants";
import Modal from "./Modal";
import { useToast } from "hooks/useToast";
import Toast from "./Toast";
function CardProduct() {
    //[MODAL]
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };
    //[TOAST]
    const { openToast, handleClickToast, handleCloseToast } = useToast();

    return (
        <>
            <div className="card">
                <div className="card_image">
                    <Button className="btn_liked" size="icon">
                        <Icon icon={ICON_LIBARY.i_heart} />
                    </Button>
                    <img alt="pr" src={img} />
                    <div className="overlay flex justify-between gap-4">
                        <Button
                            className="flex items-center gap-2 justify-center"
                            variant="contain"
                            color="black"
                            onClick={handleClickToast}
                        >
                            <Icon
                                className="text-[1.6rem]"
                                icon={ICON_LIBARY.i_bag}
                            />
                            Add to bag
                        </Button>
                        <Button
                            className="flex items-center gap-2 justify-center"
                            variant="contain"
                            color="white"
                            onClick={() => setOpenModal(true)}
                            style={{ boxShadow: "1px 1px 1px 1px grey" }}
                        >
                            <Icon
                                className="text-[1.6rem]"
                                icon={ICON_LIBARY.i_screen}
                            />
                            Quick view
                        </Button>
                    </div>
                </div>
                <div className="card_content">
                    <div className="">
                        <h1>Leather Gloves</h1>
                        <p>Perfect mint green</p>
                    </div>
                    <div className="flex card_content--price_reviews mt-5 justify-between">
                        <Button
                            className="flex items-center"
                            variant="outline"
                            color="green"
                        >
                            <Icon icon={ICON_LIBARY.i_dollar} />
                            42
                        </Button>
                        <span className="flex items-center pt-4">
                            4.9
                            <Icon icon={ICON_LIBARY.i_star} />
                            <div className="text-reviews text-[1.5rem]">
                                (98 reviews)
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <Modal type='center' onClose={handleCloseModal} open={openModal}>
                Hello world
            </Modal>
            <Toast
                value={"Login success"}
                open={openToast}
                handleClose={handleCloseToast}
            />
        </>
    );
}

export default CardProduct;
