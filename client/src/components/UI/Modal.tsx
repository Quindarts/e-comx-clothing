import { Icon } from "@iconify/react";
import React from "react";
import { ICON_LIBARY } from "utils/constants";
import Button from "./Button";
interface ModalPropsType extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    open: boolean;
    type?: "left" | "center";
    onClose: () => void;
}
function Modal(props: ModalPropsType) {
    const { children, open, type = "center", onClose, ...rest } = props;

    return (
        <div {...rest} className={`modal_product ${open ? "open" : ""}`}>
            <div className="modal_product_overlay" onClick={onClose}></div>
            <div className={`modal_product_body--${type} `}>
                <Button className="close_modal" onClick={onClose}>
                    <Icon icon={ICON_LIBARY.i_close_modal} />
                </Button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
