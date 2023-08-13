import { Icon } from "@iconify/react";
import { ICON_LIBARY } from "utils/constants";
import avt from "assets/image/avt.jpg";
function CardReview() {
  return (
    <div className="card_review">
      <div className="card_review--header flex justify-between">
        <div className="user_info flex gap-3">
          <div className="avt">
            <img src={avt} alt="" />
          </div>
          <div className="">
            <div className="name">Cody Fisher</div>
            <div className="date">May 20, 2021</div>
          </div>
        </div>
        <div className="rating_product flex">
          <Icon color="#eab308" width={20} icon={ICON_LIBARY.i_star} />
          <Icon color="#eab308" width={20} icon={ICON_LIBARY.i_star} />
          <Icon color="#eab308" width={20} icon={ICON_LIBARY.i_star} />{" "}
          <Icon color="#eab308" width={20} icon={ICON_LIBARY.i_star} />
          <Icon color="#eab308" width={20} icon={ICON_LIBARY.i_star} />
        </div>
      </div>
      <div className="card_review--container">
        The quality and sizing mentioned were accurate and really happy with the
        purchase. Such a cozy and comfortable hoodie. Now that it’s colder, my
        husband wears his all the time. I wear hoodies all the time.
      </div>
    </div>
  );
}

export default CardReview;
