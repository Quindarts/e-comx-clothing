import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import usePopup from "hooks/usePopup";
import React from "react";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import avt from "assets/image/avt.jpg";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
function PopupUser() {
  const { handleActive, active, menuRef } = usePopup();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div ref={menuRef} className="popup_user">
      <div>
        <Button
          className="control_header--item"
          onClick={handleActive}
          size="icon"
        >
          <Icon icon={ICON_LIBARY.i_user} />
        </Button>
      </div>
      <div className={`popup_user_main--${active ? "active" : ""} `}>
        <div className="user_login flex gap-5">
          <div className="user_login--img">
            <img width="100%" src={avt} alt="" />
          </div>
          <div className="user_login--content">
            <h4 className="username">Le Minh Quang</h4>
            <div className="address text-[1.2rem] mt-1">Ho Chi Minh City</div>
          </div>
        </div>
        <div className="user_menu mt-4">
          <Link
            onClick={() => handleActive()}
            className="flex gap-5 items-center"
            to={ROUTE.ACCOUNT}
          >
            <Icon icon={ICON_LIBARY.i_user} />
            <span>My Account</span>
          </Link>
          <Link
            onClick={() => handleActive()}
            className="flex gap-5 items-center"
            to={ROUTE.ACCOUNT_ORDED}
          >
            <Icon icon={ICON_LIBARY.i_order} />
            <span>My Order</span>
          </Link>
          <Link
            onClick={() => handleActive()}
            className="flex gap-5 items-center "
            to={ROUTE.SAVED_LIST}
          >
            <Icon icon={ICON_LIBARY.i_heart_outline} />
            <span>Wishlist</span>
          </Link>
          <div className="my-4 spacing"></div>

          <Link
            onClick={() => handleActive()}
            className="flex gap-5 items-center"
            to="#"
          >
            <Icon icon={ICON_LIBARY.i_light_buld} />
            <span>Dark theme</span>
            <Switch
              inputProps={{ "aria-label": "controlled" }}
              checked={checked}
              onChange={handleChange}
              color="warning"
            />
          </Link>
          <Link
            onClick={() => handleActive()}
            className="flex gap-5 items-center"
            to={ROUTE.ACCOUNT_BILLING}
          >
            <Icon icon={ICON_LIBARY.i_help} />
            <span> Help</span>
          </Link>
          <Link
            onClick={() => handleActive()}
            className="flex gap-5 items-center"
            to="/"
          >
            <Icon icon={ICON_LIBARY.i_exit} />
            <span>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopupUser;
