import { Icon } from "@iconify/react";
import React from "react";
import { ICON_LIBARY } from "utils/constants";
import Button from "./Button";
interface ModalPropsType extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}
function Modal(props: ModalPropsType) {
    const { children, open, onClose, ...rest } = props;

    return (
        <div {...rest} className={`modal_product ${open ? "open" : ""}`}>
            <div className="modal_product_overlay" onClick={onClose}></div>
            <div className={`modal_product_body `}>
                <Button className="close_modal" onClick={onClose}>
                    <Icon icon={ICON_LIBARY.i_close_modal} />
                </Button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
