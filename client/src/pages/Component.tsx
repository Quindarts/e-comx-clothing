import Button from "components/UI/Button";
import { ICON_LIBARY, PRODUCT_SIZE } from "utils/constants";
import { Icon } from "@iconify/react";
import Accordion from "components/UI/Accordion";
import Dropdown from "components/UI/Dropdown";
import PopupDesktop from "components/UI/PopupDesktop";
import Textfield from "components/UI/Textfield";
import TextArea from "components/UI/TextArea";
import InputQuantity from "components/UI/InputQuantity";
import Modal from "components/UI/Modal";
import { useState } from "react";
function Component() {
    const listDrop = ["Ho Chi Minh", "Ha Nam", "Hue", "Ha Noi"];
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };
    console.log(openModal);
    
    return (
        <div className="mx-5">
            <h1 className="text-[3rem] font-bold">Component:</h1>
            <h2 className="text-[2rem] my-2">Button</h2>
            <div>
                <Button variant="contain" color="basic">
                    Basic
                </Button>
                <Button variant="outline" color="green">
                    Btn green
                </Button>
                <Button variant="contain" color="black">
                    Buy this template
                </Button>
                <Button variant="contain" color="white">
                    Btn white
                </Button>
                <Button variant="contain" color="primary">
                    Btn contain primary
                </Button>
                <Button variant="outline" color="primary">
                    Btn outline primary
                </Button>
                <Button variant="contain" color="grey">
                    Btn contain grey
                </Button>
                <Button variant="outline" color="grey">
                    Btn outline grey
                </Button>
                <Button variant="contain" color="white-hv-black">
                    S
                </Button>
                <Button size="icon">
                    <Icon icon={ICON_LIBARY.i_heart} />
                </Button>
            </div>

            <h2 className="text-[2rem] my-2">Accordion</h2>
            <div className="">
                <Accordion title="Description">
                    Fashion is a form of self-expression and autonomy at a
                    particular period and place and in a specific context, of
                    clothing, footwear, lifestyle, accessories, makeup,
                    hairstyle, and body posture.
                </Accordion>
            </div>
            <h2 className="text-[2rem] my-2">Dropdown</h2>
            <div className="">
                <Dropdown list={listDrop} />
            </div>
            <h2 className="text-[2rem] my-2">Popup Desktop</h2>
            <div className="flex">
                <PopupDesktop
                    type="list"
                    mainType="checkbox"
                    iconTitle={ICON_LIBARY.i_user}
                    title="Checkbox"
                    list={PRODUCT_SIZE}
                />
                <PopupDesktop
                    type="list"
                    mainType="radio"
                    iconTitle={ICON_LIBARY.i_user}
                    title="Radio"
                    list={PRODUCT_SIZE}
                />
            </div>
            <h2 className="text-[2rem] my-2">TextField</h2>
            <div className="">
                <Textfield
                    className="w-[25rem]"
                    type="text"
                    label="Confirm password"
                />
            </div>
            <h2 className="text-[2rem] my-2">TextArea</h2>
            <div className="">
                <TextArea className="w-[30rem]" label="Message" />
            </div>
            <h2 className="text-[2rem] my-2">InputQuantity</h2>
            <div className="">
                <InputQuantity className="w-[5rem]" />
            </div>
            <h2 className="text-[2rem] my-2">Modal product</h2>
            <div className="">
                <Button
                    onClick={() => setOpenModal(true)}
                    variant="contain"
                    color="black"
                >
                    Open Modal
                </Button>
                <Modal onClose={handleCloseModal} open={openModal}>
                    Hello world
                </Modal>
            </div>
        </div>
    );
}

export default Component;
