import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { ICON_LIBARY } from "utils/constants";
import Button from "./Button";
interface PopupDesktopPropsType {
    children?: React.ReactNode;
    type: "list" | "icon" | "basic";
    mainType?: "basic" | "checkbox" | "radio";
    iconTitle?: string;
    title?: string;
    className?: string;
    list?: Array<String>;
}
function PopupDesktop(props: PopupDesktopPropsType) {
    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(!active);
    };
    const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const handleUnActive = (e: any) => {
            if (!menuRef.current.contains(e.target))
                setActive(false);
        };
        document.addEventListener("mousedown", handleUnActive);
        return () => {
            document.removeEventListener("mousedown", handleUnActive);
        };
    }, []);
    const {
        className = "",
        list,
        type,
        iconTitle = "",
        title = "",
        mainType = "basic",
        ...rest
    } = props;
    return (
        <div ref={menuRef} {...rest} className={`${className} popup_desktop`}>
            <div
                className={`popup_desktop_header--${
                    type === "icon" ? "icon" : type
                }`}
            >
                {type === "icon" ? (
                    <Button onClick={handleActive} size="icon">
                        <Icon icon={iconTitle} />
                    </Button>
                ) : (
                    <>
                        <Button
                            onClick={handleActive}
                            size="sm"
                            variant="contain"
                            color="white"
                            className="flex justify-between gap-5 w-[18rem]"
                        >
                            <div className="flex gap-2">
                                <Icon icon={iconTitle} />{" "}
                                <span className="mt-1">{title}</span>
                            </div>
                            <Icon icon={ICON_LIBARY.i_down} />
                        </Button>
                    </>
                )}
            </div>
            <div
                
                className={`popup_desktop_main--${type}--${
                    active ? "active" : ""
                } `}
            >
                <div className="popup_desktop_main--content">
                    {list?.map((item: String, index: number) => (
                        <div
                            key={index}
                            className="checkbox_item flex gap-5 h-[3rem]"
                        >
                            <input
                                key={index}
                                type={mainType}
                                value={`${item}`}
                                id={`${item}`}
                                name={`${mainType}`}
                            />
                            <label htmlFor={`${item}`}>{item}</label>
                        </div>
                    ))}
                </div>
                <div className="popup_desktop_main--footer flex justify-between items-center px-5">
                    <Button
                        variant="contain"
                        color="white"
                        className="w-[8.5rem] h-[4.2rem]"
                    >
                        Clear
                    </Button>
                    <Button
                        variant="contain"
                        color="black"
                        className="w-[8.6rem] h-[4rem]"
                    >
                        Apply
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(PopupDesktop);
