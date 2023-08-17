import FrameProductDetail from "components/UI/FrameProductDetail";
import Modal from "components/UI/Modal";
import Searchfield from "components/UI/Searchfield";
import Toast from "components/UI/Toast";
import useModal from "hooks/useModal";
import { useToast } from "hooks/useToast";
import ControlFilter from "pages/CollectionPage/ControlFilter";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";

function CollectionLayout() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { openToast, handleCloseToast } = useToast();
  const { openModal, handleCloseModal } = useModal();
  const [changeValue, setChangeValue] = useState("");
  useEffect(() => {
    console.log("change::::", changeValue);
  }, [changeValue]);
  return (
    <>
      <div
        style={{ background: "#f0f9ff" }}
        className=" h-[10rem] w-full relative"
      ></div>
      <div className="collection_layout w-full ">
        <div className="w-full flex flex-col items-center justify-center">
          <Searchfield setChangeValue={setChangeValue} />
        </div>
        <Outlet />
      </div>
      <Modal type="center" onClose={handleCloseModal} open={openModal}>
        <FrameProductDetail />
      </Modal>
      <Toast open={openToast} handleClose={handleCloseToast} />
    </>
  );
}

export default CollectionLayout;
