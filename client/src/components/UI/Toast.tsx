import { Icon } from "@iconify/react";
import { Snackbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import lg from "assets/image/prt1.webp";
import Button from "./Button";
import CardOrder from "./CardOrder";

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
                className={`toast flex justify-center items-center`}
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={2000}
                onClose={handleClose}
                message={
                    <>
                        <CardOrder type="View cart" />
                    </>
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
