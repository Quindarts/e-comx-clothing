import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import CardReview from "components/UI/CardReview";
import React from "react";
import { ICON_LIBARY } from "utils/constants";

function ReviewProduct() {
  
  const review_list = [1, 2, 3, 4];
  return (
    <div className="review_product">
      <div className="review_product--title flex gap-3">
        <Icon
          width={35}
          className="mt-1"
          color="black"
          icon={ICON_LIBARY.i_star}
        />
        4,87 · 142 Reviews
      </div>
      <div className="review_product--main flex flex-wrap gap-[6rem]">
        {review_list.map((item, index) => (
          <div className="setup_card">
            <CardReview key={index} />
          </div>
        ))}
      </div>
      <Button variant="contain" color="white" className="mt-[3rem]">Show me all 142 reviews</Button>
    </div>
  );
}

export default ReviewProduct;
