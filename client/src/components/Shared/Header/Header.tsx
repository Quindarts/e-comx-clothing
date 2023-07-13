import React, { useState } from "react";
import logo from "assets/image/logo.svg";
import { Link } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import Button from "components/UI/Button";
import { Icon } from "@iconify/react";
import Modal from "components/UI/Modal";
import PopupDesktop from "components/UI/PopupDesktop";
import PopupUser from "./PopupUser";
function Header() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };
    return (
        <>
            <header className="flex items-center">
                <div className="contain_header flex justify-between items-center">
                    <div className="menu_mobile">
                        <Button onClick={() => setOpenModal(true)}>
                            <Icon icon={ICON_LIBARY.i_list} />
                        </Button>
                    </div>
                    <div className="logo">
                        <Link to={ROUTE.COMPONENT}>
                            <img width="100%" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar">
                        <Link to={ROUTE.MEN}>Men</Link>
                        <Link to={ROUTE.WOMAN}>Woman</Link>
                        <Link to={ROUTE.COLLECTION}>Collection</Link>
                        <Link to={ROUTE.ABOUT}>About</Link>
                        <Link to={ROUTE.CONTACT}>Contact</Link>
                        <Link to={ROUTE.BLOG}>Blog</Link>
                    </div>
                    <div className="control_header flex">
                        <Button size="icon">
                            <Icon icon={ICON_LIBARY.i_search} />
                        </Button>
                        <PopupUser />
                        <Button size="icon">
                            <Icon icon={ICON_LIBARY.i_cart} />
                        </Button>
                    </div>
                </div>
            </header>
            <Modal onClose={handleCloseModal} open={openModal}>
                Hello world
            </Modal>
        </>
    );
}

export default Header;
