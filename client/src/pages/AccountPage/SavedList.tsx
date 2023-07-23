import CardProduct from "components/UI/CardProduct";
import FrameProductDetail from "components/UI/FrameProductDetail";
import Modal from "components/UI/Modal";
import Toast from "components/UI/Toast";
import useModal from "hooks/useModal";
import { useToast } from "hooks/useToast";
import React from "react";

function SavedList() {
    const { openToast, handleClickToast, handleCloseToast } = useToast();
    const { openModal, handleCloseModal, handleOpenModal } = useModal();
    const demo = [1, 2, 3];
    return (
        <>
            <div className="saved_list">
                <h1>List of saved products</h1>
                <div className="saved_list w-full flex flex-wrap justify-between gap-[2rem]">
                    {demo.map((item: any, key: number) => (
                        <div className="saved_list--card">
                            <CardProduct
                                handleOpenModal={handleOpenModal}
                                handleClickToast={handleClickToast}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Modal type="center" onClose={handleCloseModal} open={openModal}>
                <FrameProductDetail />
            </Modal>
            <Toast open={openToast} handleClose={handleCloseToast} />
        </>
    );
}

export default SavedList;
