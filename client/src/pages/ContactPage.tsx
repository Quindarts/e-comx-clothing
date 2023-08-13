import { Icon } from "@iconify/react";
import Button from "components/UI/Button";
import TextArea from "components/UI/TextArea";
import Textfield from "components/UI/Textfield";
import React from "react";
import { Link } from "react-router-dom";
import { ICON_LIBARY, ROUTE } from "utils/constants";

function ContactPage() {
  return (
    <div className="contact_page">
      <h1 className="mb-[5rem]">Contact</h1>
      <div className="flex flex-wrap gap-[5rem] justify-center">
        <div className="contact_page--aside">
          <p>
            <span>🗺 ADDRESS </span> Photo booth tattooed prism, portland taiyaki
            hoodie neutra typewriter
          </p>
          <p>
            <span>💌 EMAIL </span> nc.example@example.com
          </p>
          <p>
            <span>☎ PHONE</span> 000-123-456-7890
          </p>
          <p>
            <span>🌏 SOCIALS</span>
          </p>
          <div className="flex">
            <Link className="flex items-center gap-4" to={ROUTE.INDEX}>
              <Icon width={30} icon={ICON_LIBARY.i_facebook} />
              <span>Facebook</span>
            </Link>
            <Link className="flex items-center gap-4" to={ROUTE.INDEX}>
              <Icon width={30} icon={ICON_LIBARY.i_twitter} color="#33aae0" />
              <span>Twitter</span>
            </Link>
            <Link className="flex items-center gap-4" to={ROUTE.INDEX}>
              <Icon width={30} icon={ICON_LIBARY.i_youtube} color="#da0000" />
              <span>Youtube</span>
            </Link>
            <Link className="flex items-center gap-4" to={ROUTE.INDEX}>
              <Icon width={30} icon={ICON_LIBARY.i_telegram} />{" "}
              <span>Telegram</span>
            </Link>
          </div>
        </div>
        <form className="contact_page--form">
          <Textfield className="mb-[1rem]" label="Full name" />
          <Textfield  className="mb-[1rem]" label="Email address" />
          <TextArea label="Message" />
          <Button
            className="mt-[3rem] w-[18rem] h-[5rem]"
            variant="contain"
            color="black"
          >
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
