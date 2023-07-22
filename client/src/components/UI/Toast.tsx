import { Icon } from "@iconify/react";
import { Snackbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import lg from "assets/image/prt1.webp";
import Button from "./Button";

interface ToastPropsType {
    open: boolean;
    handleClose: () => void;
    value?: Object;
    type?: "productToast";
}
function Toast(props: ToastPropsType) {
    const navigate = useNavigate();
    const { open, handleClose } = props;
    return (
        <>
            <Snackbar
                className={`toast`}
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={2000}
                onClose={handleClose}
                message={
                    <div className="card_order flex gap-5">
                        <div className="card_order--img">
                            <img width="100%" src={lg} alt="card_img" />
                        </div>
                        <div className="card_order--main">
                            <div className="product_detail flex justify-between">
                                <p>
                                    <Link
                                        className="product_detail--name"
                                        to="/"
                                    >
                                        Rey Nylon Backpack
                                    </Link>
                                    <div className="product_detail--category">
                                        Natural <span>XL</span>
                                    </div>
                                </p>
                                <Button
                                    variant="outline"
                                    color="green"
                                    className="product_detail--price flex h-[3rem]"
                                >
                                    <Icon
                                        className="text-[1.8rem] mt-[0.5rem]"
                                        icon={ICON_LIBARY.i_dollar}
                                    />
                                    74
                                </Button>
                            </div>
                            <div className="more_info flex justify-between">
                                <div className="quantity flex items-end">
                                    Qty
                                    <span>1</span>
                                </div>
                                <Button
                                    onClick={() => navigate(ROUTE.CART)}
                                    className="flex items-end"
                                    variant="outline"
                                    color="primary"
                                >
                                    View Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                }
                action={
                    <button onClick={handleClose}>
                        <Icon
                            className="text-[2.5rem] flex absolute top-2 right-2"
                            icon={ICON_LIBARY.i_close_modal}
                        />
                    </button>
                }
            />
        </>
    );
}

export default Toast;
