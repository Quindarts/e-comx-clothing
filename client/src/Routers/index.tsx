import Accountlayout from "layouts/Accountlayout";
import CollectionLayout from "layouts/CollectionLayout";
import Mainlayout from "layouts/Mainlayout";
import AboutPage from "pages/AboutPage";
import AccountOrder from "pages/AccountPage/AccountOrder";
import AccountPage from "pages/AccountPage/AccountPage";
import ChangeBilling from "pages/AccountPage/ChangeBilling";
import ChangePassword from "pages/AccountPage/ChangePassword";
import SavedList from "pages/AccountPage/SavedList";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import Blog from "pages/BlogPage/Blog";
import BlogDetail from "pages/BlogPage/BlogDetail";
import CartPage from "pages/CartPage/CartPage";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import CollectionPage from "pages/CollectionPage/CollectionPage";
import MenPage from "pages/CollectionPage/MenPage";
import SearchPage from "pages/CollectionPage/SearchPage";
import WomanPage from "pages/CollectionPage/WomanPage";
import Component from "pages/Component";
import ContactPage from "pages/ContactPage";
import HomePage from "pages/HomePage/HomePage";
import ProductDetail from "pages/ProductDetailPage/ProductDetail";
import React from "react";
import { Route, Routes } from "react-router";
import { ROUTE } from "utils/constants";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.INDEX} element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.COMPONENT} element={<Component />} />
        <Route path={ROUTE.COLLECTION} element={<CollectionPage />} />
        <Route path={ROUTE.ABOUT} element={<AboutPage />} />
        <Route path={ROUTE.CONTACT} element={<ContactPage />} />

        {/* Authentication */}
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.REGISTER} element={<Register />} />

        {/* Account  */}
        <Route path={ROUTE.ACCOUNT} element={<Accountlayout />}>
          <Route index element={<AccountPage />} />
          <Route path={ROUTE.SAVED_LIST} element={<SavedList />} />
          <Route path={ROUTE.ACCOUNT_BILLING} element={<ChangeBilling />} />
          <Route
            path={ROUTE.ACCOUNT_CHANGE_PASS}
            element={<ChangePassword />}
          />
          <Route path={ROUTE.ACCOUNT_ORDED} element={<AccountOrder />} />
        </Route>

        <Route path={ROUTE.COLLECTION} element={<CollectionLayout />}>
          <Route index element={<CollectionPage />} />
          <Route path={ROUTE.COLLECTION_SEARCH} element={<SearchPage />} />
          <Route path={ROUTE.COLLECTION_MEN} element={<MenPage />} />
          <Route path={ROUTE.COLLECTION_WOMAN} element={<WomanPage />} />
        </Route>

        <Route path={ROUTE.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTE.BLOG} element={<Blog />} />
        <Route path={ROUTE.BLOG_DETAIL} element={<BlogDetail />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.CHECKOUT} element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
