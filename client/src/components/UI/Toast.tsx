import { Icon } from "@iconify/react";
import { Snackbar } from "@mui/material";
import { ICON_LIBARY } from "utils/constants";

interface ToastPropsType {
    open: boolean;
    handleClose: () => void;
    value?: Object;
    type?: "productToast";
}
function Toast(props: ToastPropsType) {
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
                    <div className="bg-white text-[3rem]">Add this to cart</div>
                }
                action={
                    <button onClick={handleClose}>
                        <Icon
                            className="text-[2.5rem]"
                            icon={ICON_LIBARY.i_close_modal}
                        />
                    </button>
                }
            />
        </>
    );
}

export default Toast;
