import hsl1 from "assets/image/home/homeslide1.webp";
import hsl2 from "assets/image/home/homeslide2.webp";
import hsl3 from "assets/image/home/homeslide3.webp";

import homehot1 from "assets/image/home/homeHot1.webp";
import homehot2 from "assets/image/home/homeHot2.webp";
import homehot3 from "assets/image/home/homeHot3.webp";
import homehot4 from "assets/image/home/homeHot4.webp";

import discoverimg1 from "assets/image/home/discoverimg1.webp";
import discoverimg2 from "assets/image/home/discoverimg2.webp";
import discoverimg3 from "assets/image/home/discoverimg3.webp";
import discoverimg4 from "assets/image/home/discoverimg4.webp";

import exploreimg1 from "assets/image/home/explore1.svg";
import exploreimg2 from "assets/image/home/explore2.svg";
import exploreimg3 from "assets/image/home/explore3.svg";
import exploreimg4 from "assets/image/home/explore5.svg";
import exploreimg5 from "assets/image/home/explore6.svg";
import exploreimg6 from "assets/image/home/explore9.svg";

import exploreItemimg1 from "assets/image/home/exploreItem1.webp";
import exploreItemimg2 from "assets/image/home/exploreItem2.webp";
import exploreItemimg3 from "assets/image/home/exploreItem3.webp";
import exploreItemimg4 from "assets/image/home/exploreItem4.webp";
import exploreItemimg5 from "assets/image/home/exploreItem5.webp";
import exploreItemimg6 from "assets/image/home/exploreItem6.webp";

import expertAside1 from "assets/image/home/expertAside1.webp";
import expertAside2 from "assets/image/home/expertAside2.webp";
import expertAside3 from "assets/image/home/expertAside3.webp";

import expertItem1 from "assets/image/home/expertItem1.webp";
import expertItem2 from "assets/image/home/expertItem2.webp";
import expertItem3 from "assets/image/home/expertItem3.webp";
import expertItem4 from "assets/image/home/expertItem4.webp";
import expertItem5 from "assets/image/home/expertItem5.webp";
import expertItem6 from "assets/image/home/expertItem6.webp";
import expertItem7 from "assets/image/home/expertItem7.webp";
import expertItem8 from "assets/image/home/expertItem8.webp";
import expertItem9 from "assets/image/home/expertItem9.webp";

import blogAside from "assets/image/home/blogAside.webp";
import avtBlog1 from "assets/image/home/avtUserBlog1.webp";
import blogItem1 from "assets/image/home/blogItem1.webp";
import blogItem2 from "assets/image/home/blogItem2.webp";
import blogItem3 from "assets/image/home/blogItem3.webp";

export const REGEX = {
  PASSWORD:
    /^(?!.*(\w)\1{2,})(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]).{8,}$/,
  EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  NAME: /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/,
};
export const REGEX_ERROR_MESSAGE = {
  PASSWORD: {
    length: "Password must be over 8 characters",
    basic: "Password must have 1 special character, 1 uppercase letter, 1 lowercase letter and 1 numeric character",
    require: "Password is required",
  },
  EMAIL: {
    length: "Email must be over 8 characters",
    basic: "Invalid email address",
    require: "Email password is required",
  },
  CONFIRM_PASSWORD :{
    length:"Confirm password should be of minimum 8 characters length",
    basic:"Confirm password must match with password",
    require:"Confirm password is required",
  }
};
// [APP ROUTE]
export const ROUTE = {
  //MAIN
  INDEX: "/",
  COLLECTION: "/collection",
  CART: "/cart",
  CHECKOUT: "/checkout",
  NOT_FOUND: "/not-found",
  PRODUCT_DETAIL: "/product-detail",
  COMPONENT: "/component",

  //Authentication
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-pass",

  //Authorziations
  ACCOUNT: "/account",
  SAVED_LIST: "/account/savelists",
  ACCOUNT_ORDED: "/account/order",
  ACCOUNT_CHANGE_PASS: "/account/password",
  ACCOUNT_BILLING: "/account/billing",

  //OTHERS
  COLLECTION_SEARCH: "/collection/search",
  COLLECTION_ALL: "collection/all",
  COLLECTION_MEN: "/collection/men",
  COLLECTION_WOMAN: "/collection/woman",
  ABOUT: "/about",
  CONTACT: "/contact",

  //BLOG
  BLOG: "/blog",
  BLOG_DETAIL: "blog/detail",
};

// [ICON TEMPLATE]
export const ICON_LIBARY = {
  i_eye: "solar:eye-linear",
  i_search: "ep:search",
  i_user: "ri:user-line",
  i_cart: "fluent:cart-24-regular",
  i_arrow_left: "cil:arrow-left",
  i_arrow_right: "bi:arrow-right",
  i_heart: "ion:heart",
  i_dollar: "healthicons:dollar",
  i_clock: "mdi:clock-outline",
  i_setting: "uiw:setting-o",
  i_star: "ic:round-star",
  i_more_star: "lucide:stars",
  i_man_circle: "ant-design:man-outlined",
  i_female_circle: "mingcute:female-line",
  i_filter: "cil:filter",
  i_down: "ps:down",
  i_close: "carbon:close-filled",
  i_size: "radix-icons:size",
  i_bag: "ph:bag",
  i_screen: "ic:outline-fit-screen",
  i_plus: "akar-icons:plus",
  i_subtraction: "subway:subtraction-1",
  i_exit: "system-uicons:exit-left",
  i_help: "solar:help-line-duotone",
  i_image_plus: "majesticons:image-plus-line",
  i_phone: "ph:phone",
  i_calendar: "bx:calendar",
  i_address: "entypo:address",
  i_shipping: "la:shipping-fast",
  i_payment: "fluent:payment-16-regular",
  i_tick: "mdi:tick",
  i_close_modal: "material-symbols:close",
  i_list: "ph:list",
  i_order: "icon-park-outline:transaction-order",
  i_heart_outline: "solar:heart-linear",
  i_light_buld: "heroicons:light-bulb",
  i_facebook: "logos:facebook",
  i_twitter: "ant-design:twitter-circle-filled",
  i_youtube: "entypo-social:youtube-with-circle",
  i_telegram: "logos:telegram",
  i_sun: "ph:sun",
  i_fire: "bi:fire",
  i_dumbbells: "solar:dumbbells-outline",
  i_crown: "lucide:crown",
  i_jewelry:
    "streamline:shopping-jewelry-diamond-2-diamond-money-payment-finance-wealth",
  i_color: "iconoir:fill-color",
  i_world: "fontisto:world-o",
  i_blockchain: "eos-icons:blockchain",
  i_tickcircle: "charm:circle-tick",
  i_google: "devicon:google",
};

// [FILTER LIST OPTIONS ]

export const PRODUCT_CATEGORY = ["All Items", "Women", "Man", "Kids", "Jewels"];

export const PRODUCT_SIZE = ["XS", "M", "L", "XL", "2XL"];

export const PRODUCT_FILTER = [
  "Most Popular",
  "Best Rating",
  "Price Low - Hight",
  "Price Hight - Low",
];
export const PRODUCT_SALE = ["60%", "50%", "25%"];

export const PRODUCT_COLORS = [
  "White",
  "Beige",
  "Blue",
  "Black",
  "Brown",
  "Green",
  "Navy",
];
export const CATEGORY_CONTROL_FILTER = [
  {
    icon: ICON_LIBARY.i_dollar,
    name: "Price",
    mainType: "radio",
    type: "list",
    list: PRODUCT_FILTER,
  },
  {
    icon: ICON_LIBARY.i_order,
    name: "Categories",
    list: PRODUCT_CATEGORY,
    mainType: "checkbox",
    type: "list",
  },
  {
    icon: ICON_LIBARY.i_color,
    name: "Colors",
    list: PRODUCT_COLORS,
    mainType: "checkbox",
    type: "list",
  },
  {
    icon: ICON_LIBARY.i_size,
    name: "Sizes",
    list: PRODUCT_SIZE,
    mainType: "checkbox",
    type: "list",
  },
  {
    icon: ICON_LIBARY.i_setting,
    name: "On Sale",
    list: PRODUCT_SALE,
    mainType: "radio",
    type: "list",
  },
];
// [HOME LIST]
export const homeSlide = [hsl1, hsl2, hsl3];

export const DISCOVER_LIST = [
  {
    color: "#fefce8",
    desc: "Explore new arrivals",
    title: "Shop the latest from top brands",
    img_product: discoverimg3,
  },
  {
    color: "#fef2f2",
    desc: "Digital gift cards",
    title: "Give the gift of choice",
    img_product: discoverimg2,
  },
  {
    color: "#eff6ff",
    desc: "Sale collection",
    title: "Up to 80% off retail",
    img_product: discoverimg1,
  },
  {
    color: "#f0fdf4",
    desc: "Sale collection",
    title: "Up to 80% off retail",
    img_product: discoverimg4,
  },
];
export const UTIL_LIST = [
  {
    color: "#991e1b",
    bgcolor: "#fee2e2",
    step: "step 1",
    img: homehot3,
    title: "Filter & Discover",
    desc: "Smart filtering and suggestions make it easy to find",
  },
  {
    color: "#6333a3",
    bgcolor: "#e0e7ff",
    step: "step 2",
    img: homehot1,
    title: "Add to bag",
    desc: "Easily select the correct items and add them to the cart",
  },
  {
    color: "#854d0e",
    bgcolor: "#fef9c3",
    step: "step 3",
    img: homehot4,
    title: "Fast shipping",
    desc: "The carrier will confirm and ship quickly to you",
  },
  {
    color: "#7857cf",
    bgcolor: "#f3e8ff",
    step: "step 4",
    img: homehot2,
    title: "Enjoy the product",
    desc: "Have fun and enjoy your 5-star quality products",
  },
];
export const EXPLORE_LIST = [
  {
    category: "bags",
    img: exploreItemimg1,
    bgImg: "#eef2ff",
    bgMain: exploreimg1,
    productQuantity: "155",
    title: "Backpack",
  },
  {
    category: "shoes",
    img: exploreItemimg2,
    bgImg: "#f4f7fa",
    bgMain: exploreimg2,
    productQuantity: "22",
    title: "Shoes",
  },
  {
    category: "blanket",
    img: exploreItemimg3,
    bgImg: "#f5f3ff",
    bgMain: exploreimg3,
    productQuantity: "144",
    title: "Recycled Blanket",
  },
  {
    category: "shorts",
    img: exploreItemimg4,
    bgImg: "#eef2ff",
    bgMain: exploreimg4,
    productQuantity: "343",
    title: "Cycling Shorts",
  },
  {
    category: "jersey",
    img: exploreItemimg5,
    bgImg: "#eff6ff",
    bgMain: exploreimg5,
    productQuantity: "222",
    title: "Cycling Jersey",
  },
  {
    category: "coat",
    img: exploreItemimg6,
    bgImg: "#fff7ed ",
    bgMain: exploreimg6,
    productQuantity: "155",
    title: "Car Coat",
  },
];
export const EXPERT_LIST = [
  {
    title: "Suede Bomber Jacker",
    listImgItem: [expertItem1, expertItem2, expertItem3],
    imgAside: expertAside1,
    category: "Orange",
    price: "52",
    rating: "4.9",
    reviews: "269",
  },
  {
    title: "Suede Bomber Jacker",
    listImgItem: [expertItem4, expertItem5, expertItem6],
    imgAside: expertAside2,
    category: "Orange",
    price: "52",
    rating: "4.9",
    reviews: "269",
  },
  {
    title: "Suede Bomber Jacker",
    listImgItem: [expertItem7, expertItem8, expertItem9],
    imgAside: expertAside3,
    category: "Orange",
    price: "52",
    rating: "4.9",
    reviews: "269",
  },
];

export const BLOG_ASIDE = {
  label: "Normal",
  title:
    "interdum velit euismod in pellentesque massa placerat duis ultricies lacus",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, culpa?",
  avtWriter: avtBlog1,
  nameWriter: "Giada Mann",
  dateStartBlog: "May 20, 2021",
  imgBlog: blogAside,
};
export const BLOG_LIST = [
  {
    label: "Normal",
    title:
      "interdum velit euismod in pellentesque massa placerat duis ultricies lacus",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, culpa?",
    avtWriter: avtBlog1,
    nameWriter: "Giada Mann",
    dateStartBlog: "May 20, 2021",
    imgBlog: blogItem1,
  },
  {
    label: "Normal",
    title:
      "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, culpa?",
    avtWriter: avtBlog1,
    nameWriter: "Giada Mann",
    dateStartBlog: "May 20, 2021",
    imgBlog: blogItem2,
  },
  {
    label: "Normal",
    title: "non sodales neque sodales ut etiam sit amet nisl purus",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, culpa?",
    avtWriter: avtBlog1,
    nameWriter: "Giada Mann",
    dateStartBlog: "May 20, 2021",
    imgBlog: blogItem3,
  },
];
//
export const LIST_BENEFIT = [
  {
    icon: ICON_LIBARY.i_shipping,
    title: "Free shipping",
    desc: "On orders over $50.00",
    color: "#fef2f2",
  },
  {
    icon: ICON_LIBARY.i_blockchain,
    title: "Very easy to return",
    desc: "Just phone number.",
    color: "#f0f9ff",
  },
  {
    icon: ICON_LIBARY.i_world,
    title: "Nationwide Delivery",
    desc: "Fast delivery nationwide.",
    color: "#f0fdf4",
  },
  {
    icon: ICON_LIBARY.i_tickcircle,
    title: "Refunds policy",
    desc: "60 days return for any reason",
    color: "#fffbeb",
  },
];

///
export const LIST_CONTROL_FILTER = [
  {
    all: {
      active: true,
      value: "All items",
    },
  },
  {
    women: {
      active: false,
      value: "Women",
    },
  },
  {
    man: {
      active: false,
      value: "Man",
    },
  },
  {
    jewels: {
      active: false,
      value: "Jewels",
    },
  },
  {
    kids: {
      active: false,
      value: "Kids",
    },
  },
];

///
