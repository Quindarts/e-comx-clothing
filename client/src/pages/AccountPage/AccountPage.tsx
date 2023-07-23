import { Icon } from "@iconify/react";
import avt from "assets/image/avt.jpg";
import Button from "components/UI/Button";
import TextArea from "components/UI/TextArea";
import Textfield from "components/UI/Textfield";
import { ICON_LIBARY } from "utils/constants";
const user1 = {
    fullName: "Le Minh Quang",
    email: "quangsviuh@gmail.com",
    birthday: "19/02/2003",
    address: "12 Nguyen Van Bao, phuong 4, Go Vap, HCM ",
    gender: "Male",
    phoneNumber: "0364835691",
};
function AccountPage() {
    return (
        <div className="account_page ">
            <h1>Account information</h1>
            <div className="flex flex-wrap justify-center gap-[6.4rem] mt-[3rem]">
                <div className="account_page--uploadAvt">
                    <div className="img_old">
                        <img src={avt} alt="" />
                        <input
                            type="file"
                            accept="image/*"
                            className="image-upload-input"
                        />
                        <div className="desc_upload flex flex-col gap-4 items-center">
                            <Icon
                                color="white"
                                width={30}
                                icon={ICON_LIBARY.i_image_plus}
                            />
                            Change image
                        </div>
                    </div>
                </div>

                <div className="account_page--information">
                    <Textfield value={user1.fullName} label="Full name" />
                    <Textfield value={user1.email} label="Email" />
                    <Textfield value={user1.birthday} label="Date of birth" />
                    <Textfield value={user1.address} label="Address" />
                    <Textfield value={user1.gender} label="Gender" />
                    <Textfield value={user1.phoneNumber} label="Phone number" />
                    <TextArea label="About you" />
                    <Button variant="contain" color="black">
                        Update account
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
