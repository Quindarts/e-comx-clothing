import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { homeSlide, ICON_LIBARY, ROUTE } from "utils/constants";
import Button from "components/UI/Button";
import { Icon } from "@iconify/react";
import DiscoverList from "./DiscoverList";
import CardProduct from "components/UI/CardProduct";
import { useToast } from "hooks/useToast";
import useModal from "hooks/useModal";
import Modal from "components/UI/Modal";
import Toast from "components/UI/Toast";
import UtilList from "./UtilList";
import earnMoney from "assets/image/home/earnMoney.webp";
import logo from "assets/image/logo.svg";
import { Link } from "react-router-dom";

function HomePage() {
    const listnew = [1, 2, 3, 4, 5, 6];
    const { openToast, handleClickToast, handleCloseToast } = useToast();
    const { openModal, handleCloseModal, handleOpenModal } = useModal();

    return (
        <>
            <div className="home_page">
                <div className="home_page--slide">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[
                            Navigation,
                            Autoplay,
                            Pagination,
                            Mousewheel,
                            Keyboard,
                        ]}
                        className="mySwiper"
                    >
                        {homeSlide.map((img) => (
                            <SwiperSlide className="main_slide">
                                <div className="flex w-full h-full content_slide ">
                                    <div className="content_slide--text flex flex-col justify-center">
                                        <span className="flex gap-2">
                                            In this reason, find the best{" "}
                                            <Icon
                                                width={25}
                                                color="#f95819"
                                                icon={ICON_LIBARY.i_fire}
                                            />
                                        </span>
                                        <h1>
                                            Exclusive collection for everyone
                                        </h1>
                                        <Button
                                            className="w-[22rem] flex gap-5"
                                            variant="contain"
                                            color="black"
                                        >
                                            Explore now
                                            <Icon
                                                width={27}
                                                icon={ICON_LIBARY.i_search}
                                            />
                                        </Button>
                                    </div>
                                    <div className="content_slide--img">
                                        <img src={img} alt="img_slide" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="home_page--discover">
                    <div className="title_homepage">
                        <h2>
                            Discover more.
                            <span className="ml-2">
                                Good things are waiting for you
                            </span>
                        </h2>
                    </div>
                    <DiscoverList />
                </div>
                <div className="home_page--newsArrivals">
                    <div className="title_homepage">
                        <h2>
                            New Arrivals.{" "}
                            <span className="ml-2">REY backpacks & bags</span>
                        </h2>
                    </div>
                    <div className="">
                        <Swiper
                            spaceBetween={100}
                            slidesPerView={4}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            {listnew.map((item) => (
                                <>
                                    <SwiperSlide>
                                        <CardProduct
                                            handleOpenModal={handleOpenModal}
                                            handleClickToast={handleClickToast}
                                            key={item}
                                        />
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="until_homepage">
                    <UtilList />
                </div>
                <div className="earn_money_homepage flex flex-wrap justify-between">
                    <div className="earn_money_homepage--content">
                        <div className="logo  w-[11.2rem] h-[4rem]">
                            <Link to={ROUTE.INDEX}>
                                <img width="100%" src={logo} alt="logo" />
                            </Link>
                        </div>
                        <h1>Earn free money with Ciseco</h1>
                        <p>
                            With Ciseco you will get freeship & savings combo...
                        </p>
                        <div className="mt-[4.8rem]">
                            <Button variant="contain" color="black">
                                Savings combo
                            </Button>
                            <Button variant="outline" color="white">
                                Discover more
                            </Button>
                        </div>
                    </div>
                    <div className="lg:w-[52%]">
                        <img src={earnMoney} alt="earnMoney_homepage" />
                    </div>
                </div>
            </div>
            <Modal type="center" onClose={handleCloseModal} open={openModal}>
                Hello world
            </Modal>
            <Toast open={openToast} handleClose={handleCloseToast} />
        </>
    );
}

export default HomePage;
