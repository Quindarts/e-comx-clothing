import React from "react";
import { Link } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";
import logo from "assets/image/logo.svg";
import { Icon } from "@iconify/react";

function Footer() {
    return (
        <footer>
            <div className="flex justify-between flex-wrap gap-[2rem]">
                <div className="list_footer list_footer--logo">
                    <div className="logo flex-1">
                        <Link className="flex gap-4" to={ROUTE.INDEX}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="list_footer_link">
                        <Link
                            className="flex items-center gap-4"
                            to={ROUTE.INDEX}
                        >
                            <Icon
                                className="text-[2rem]"
                                icon={ICON_LIBARY.i_facebook}
                            />
                            <span>Facebook</span>
                        </Link>
                        <Link
                            className="flex items-center gap-4"
                            to={ROUTE.INDEX}
                        >
                            <Icon
                                className="text-[2rem]"
                                icon={ICON_LIBARY.i_twitter}
                                color="#33aae0"
                            />
                            <span>Twitter</span>
                        </Link>
                        <Link
                            className="flex items-center gap-4"
                            to={ROUTE.INDEX}
                        >
                            <Icon
                                className="text-[2rem]"
                                icon={ICON_LIBARY.i_youtube}
                                color="#da0000"
                            />
                            <span>Youtube</span>
                        </Link>
                        <Link
                            className="flex items-center gap-4"
                            to={ROUTE.INDEX}
                        >
                            <Icon
                                className="text-[2rem]"
                                icon={ICON_LIBARY.i_telegram}
                            />{" "}
                            <span>Telegram</span>
                        </Link>
                    </div>
                </div>
                <div className="list_footer">
                    <h2>Getting started</h2>
                    <ul>
                        <li>Release Notes</li>
                        <li>Upgrade Guide</li>
                        <li>Browser Support</li>
                        <li>Dark mode</li>
                    </ul>
                </div>
                <div className="list_footer">
                    <h2>Explore</h2>
                    <ul>
                        <li>Prototyping</li>
                        <li>Design systems</li>
                        <li>Pricing</li>
                        <li>Security</li>
                    </ul>
                </div>
                <div className="list_footer">
                    <h2>Resources</h2>
                    <ul>
                        <li>Best pratices</li>
                        <li>Support</li>
                        <li>Developers</li>
                        <li>Learn design</li>
                    </ul>
                </div>
                <div className="list_footer">
                    <h2> Community</h2>
                    <ul>
                        <li>Discussion Forums</li>
                        <li>Code of Conduct</li>
                        <li>Contributing</li>
                        <li>API Reference</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
