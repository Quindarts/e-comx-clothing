
import { ICON_LIBARY } from "utils/constants";
import ReviewProduct from "./ReviewProduct";
import ProductSuggested from "./ProductSuggested";

import FrameProductDetail from "components/UI/FrameProductDetail";

function ProductDetail() {
  
  return (
    <div className="product_detail_page">
      <FrameProductDetail isPage={true}/>
      <div className="mt-[5rem]">
        <h3 className="mb-[3rem]">Product details</h3>
        <p className="text-[1.6rem] text-gray-500">
          The patented eighteen-inch hardwood Arrowhead deck --- finely mortised
          in, makes this the strongest and most rigid canoe ever built. You
          cannot buy a canoe that will afford greater satisfaction.
          <br /> The St. Louis Meramec Canoe Company was founded by Alfred
          Wickett in 1922. Wickett had previously worked for the Old Town Canoe
          Co from 1900 to 1914. Manufacturing of the classic wooden canoes in
          Valley Park, Missouri ceased in 1978.
          <br/>
          <br/>
          <ul className="text-[1.6rem] text-gray-500">
            <li> Regular fit, mid-weight t-shirt</li>
            <li>Natural color, 100% premium combed organic cotton</li>
            <li>
              Quality cotton grown without the use of herbicides or pesticides -
              GOTS certified
            </li>
            <li>Soft touch water based printed in the USA</li>
          </ul>
        </p>
      </div>
      <ReviewProduct />
      <ProductSuggested />
    </div>
  );
}

export default ProductDetail;
