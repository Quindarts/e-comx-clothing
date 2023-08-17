import FormContact from "./FormContact";
import FormShipping from "./FormShipping";
import FormPayment from "./FormPayment";
import { getNameObject, useControllHandleListObject } from "helpers";
import Button from "components/UI/Button";
import { Icon } from "@iconify/react";
import { ICON_LIBARY } from "utils/constants";

function CustomOrderInformation() {
  const LIST_ORDER_INFORMATION = [
    {
      contact: {
        title: "CONTACT INFO",
        valueSubmit: null,
        icon: ICON_LIBARY.i_user,
        },
    },
    {
      shipping: {
        title: "SHIPPING ADDRESS",
        valueSubmit: null,
        icon: ICON_LIBARY.i_address,
      },
    },
    {
      payment: {
        title: "PAYMENT METHOD",
        valueSubmit: null,
        icon: ICON_LIBARY.i_payment,
      },
    },
  ];

  const { handleActiveObj, UnActiveObj, list } = useControllHandleListObject(
    LIST_ORDER_INFORMATION
  );
  const checkForm = (formName: string) => {
    switch (formName) {
      case "contact":
        return <FormContact UnActiveObj={UnActiveObj} />;
      case "shipping":
        return <FormShipping UnActiveObj={UnActiveObj} />;
      case "payment":
        return <FormPayment UnActiveObj={UnActiveObj} />;
    }
  };
  return (
    <div className="custom_order_information">
      {list.map((accordin: any, index: number) => (
        <div key={index} className="custom_order_information--card">
          <div className="header py-[1rem] mb-[2rem] flex justify-between ">
            <div className="title flex items-center gap-3 ">
              <Icon width={20} icon={accordin[getNameObject(accordin)].icon} />

              <div className="title_text ">
                {accordin[getNameObject(accordin)].title}
                <div className="submit_text">
                  {accordin[getNameObject(accordin)].valueSubmit}
                </div>
              </div>
            </div>
            <Button
              variant="contain"
              color="grey"
              onClick={() => {
                handleActiveObj(getNameObject(accordin));
              }}
            >
              Change
            </Button>
          </div>
          <div className="body">
            {accordin[getNameObject(accordin)].active &&
              checkForm(getNameObject(accordin))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomOrderInformation;
