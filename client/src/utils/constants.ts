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

export const ROUTE = {
    //MAIN
    INDEX: "/",
    ACCOUNT: "/account",
    COLLECTION: "/collection",
    CART: "/cart",
    SEARCH: "/search",
    CHECKOUT: "/cart",
    NOT_FOUND: "/not-found",
    PRODUCT_DETAIL: "/product-detail",
    COMPONENT: "/component",

    //Authentication
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-pass",

    //OTHERS
    MEN: "/collection/men",
    WOMAN: "collection/woman",
    ABOUT: "/about",
    CONTACT: "/contact",
    BLOG: "/blog",
};

export const PRODUCT_CATEGORY = ["All Items", "Women", "Man", "Kids", "Jewels"];
export const PRODUCT_SIZE = ["XS", "M", "L", "XL", "2XL"];
export const PRODUCT_FILTER = [
    "Most Popular",
    "Best Rating",
    "Price Low - Hight",
    "Price Hight - Low",
];

export const ICON_LIBARY = {
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
};

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
