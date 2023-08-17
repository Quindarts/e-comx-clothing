import { Pagination, Stack, TextField } from "@mui/material";
import CardProduct from "components/UI/CardProduct";
import FrameProductDetail from "components/UI/FrameProductDetail";
import Modal from "components/UI/Modal";
import Searchfield from "components/UI/Searchfield";
import Toast from "components/UI/Toast";
import useModal from "hooks/useModal";
import { useToast } from "hooks/useToast";
import React, { useEffect, useState } from "react";
import ControlFilter from "./ControlFilter";

function CollectionPage() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { openToast, handleClickToast, handleCloseToast } = useToast();
  const { openModal, handleCloseModal, handleOpenModal } = useModal();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const [changeValue, setChangeValue] = useState("");
  useEffect(() => {
    console.log("change::::", changeValue);
  }, [changeValue]);
  return (
    <>
      <div className="collection_page w-full ">
        <ControlFilter />
        <Stack spacing={2}>
          <h1 className="text-[2rem]">Demo Page: {page}</h1>
          <div className="collection_page--listItems mt-[5rem] flex flex-wrap justify-between gap-[5rem]">
            {list.map((item) => (
              <div className="collection_page--card">
                <CardProduct
                  handleOpenModal={handleOpenModal}
                  handleClickToast={handleClickToast}
                  key={item}
                />
              </div>
            ))}
          </div>
          <Pagination count={4} page={page} onChange={handleChange} />
        </Stack>
      </div>
      <Modal type="center" onClose={handleCloseModal} open={openModal}>
        <FrameProductDetail />
      </Modal>
      <Toast open={openToast} handleClose={handleCloseToast} />
    </>
  );
}

export default CollectionPage;
