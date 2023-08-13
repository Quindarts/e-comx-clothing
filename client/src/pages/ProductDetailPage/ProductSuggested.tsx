import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardProduct from "components/UI/CardProduct";
import { useToast } from "hooks/useToast";
import useModal from "hooks/useModal";
import Modal from "components/UI/Modal";
import FrameProductDetail from "components/UI/FrameProductDetail";
import Toast from "components/UI/Toast";
const listnew = [1, 2, 3, 4, 5, 6];

function ProductSuggested() {
  const { openToast, handleClickToast, handleCloseToast } = useToast();
  const { openModal, handleCloseModal, handleOpenModal } = useModal();
  return (
    <>
      <div className="product_suggested text-[2rem] mt-[12.8rem]">
        <div className="">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Autoplay, Mousewheel, Keyboard]}
            className="sellers_swiper_homepage"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
            }}
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
      <Modal type="center" onClose={handleCloseModal} open={openModal}>
        <FrameProductDetail />
      </Modal>
      <Toast open={openToast} handleClose={handleCloseToast} />
    </>
  );
}

export default ProductSuggested;
