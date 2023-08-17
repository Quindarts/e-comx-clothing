import React, { useState } from "react";
import logo from "assets/image/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import Button from "components/UI/Button";
import { Icon } from "@iconify/react";
import Modal from "components/UI/Modal";
import PopupUser from "./PopupUser";
import PopupCart from "./PopupCart";
import Textfield from "components/UI/Textfield";
function Header() {
    const navigate = useNavigate();
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
                        <Link to={ROUTE.INDEX}>
                            <img width="100%" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar">
                        <Link to={ROUTE.COLLECTION_MEN}>Men</Link>
                        <Link to={ROUTE.COLLECTION_WOMAN}>Woman</Link>
                        <Link to={ROUTE.COLLECTION}>Collection</Link>
                        <Link to={ROUTE.ABOUT}>About</Link>
                        <Link to={ROUTE.CONTACT}>Contact</Link>
                        <Link to={ROUTE.BLOG}>Blog</Link>
                    </div>
                    <div className="control_header flex">
                        <Button
                            id="desk_search"
                            className="control_header--item"
                            size="icon"
                            onClick={()=> navigate(ROUTE.COLLECTION_SEARCH)}
                        >
                            <Icon icon={ICON_LIBARY.i_search} />
                        </Button>
                        <PopupUser />
                        <PopupCart />
                    </div>
                </div>
            </header>
            <Modal type="left" onClose={handleCloseModal} open={openModal}>
                <div className="header_main_mobile">
                    <div className="logo">
                        <Link to={ROUTE.COMPONENT}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="mt-[2rem]">
                        <p>
                            Discover the most outstanding articles on all topics
                            of life. Write your stories and share them
                        </p>
                        <div className="flex justify-between mt-5 ">
                            <div className="flex text-[5rem] gap-5">
                                <Icon icon={ICON_LIBARY.i_facebook} />
                                <Icon
                                    icon={ICON_LIBARY.i_twitter}
                                    color="#33aae0"
                                />
                                <Icon
                                    icon={ICON_LIBARY.i_youtube}
                                    color="#da0000"
                                />
                                <Icon icon={ICON_LIBARY.i_telegram} />
                            </div>
                            <Button size="icon">
                                <Icon icon={ICON_LIBARY.i_sun} />
                            </Button>
                        </div>
                    </div>
                    <div className=" search_mobile">
                        <Textfield placeholder="Type and press enter" />
                    </div>
                    <div className="navbar_mobile text-[2rem] flex flex-col">
                        <Link to={ROUTE.COLLECTION_MEN}>MEN</Link>
                        <Link to={ROUTE.COLLECTION_WOMAN}>WOMAN</Link>
                        <Link to={ROUTE.COLLECTION}>COLLECTION</Link>
                        <Link to={ROUTE.ABOUT}>ABOUT</Link>
                        <Link to={ROUTE.CONTACT}>CONTACT</Link>
                        <Link to={ROUTE.BLOG}>BLOG</Link>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Header;
