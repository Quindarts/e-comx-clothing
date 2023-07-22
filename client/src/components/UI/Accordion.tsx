import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { ICON_LIBARY } from "utils/constants";
interface AccordionPropsType {
    className?: string;
    title?: string;
    children: React.ReactNode;
}
function Accordion(props: AccordionPropsType) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    const { title, children, className = "", ...rest } = props;
    return (
        <div {...rest} className={`${className} accordion`}>
            <div onClick={handleOpen} className="accordion_title">
                <span>{title}</span>
                <Icon
                    icon={
                        isOpen ? ICON_LIBARY.i_subtraction : ICON_LIBARY.i_plus
                    }
                />
            </div>
            <div
                style={{ display: isOpen ? "block" : "none" }}
                className="accordion_description"
            >
                {children}
            </div>
        </div>
    );
}

export default Accordion;
