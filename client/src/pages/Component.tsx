import Button from "components/UI/Button";
import { ICON_LIBARY } from "utils/constants";
import { Icon } from "@iconify/react";
import Accordion from "components/UI/Accordion";
function Component() {
    return (
        <div className="m-1">
            <h1 className="text-[3rem] font-bold">Component:</h1>
            <h2 className="text-[2rem]">Button</h2>
            <div>
                <Button variant="contain" color="basic">
                    Basic
                </Button>
                <Button variant="outline" color="green">
                    Btn green
                </Button>
                <Button variant="contain" color="black">
                    Buy this template
                </Button>
                <Button variant="contain" color="white">
                    Btn white
                </Button>
                <Button variant="contain" color="primary">
                    Btn contain primary
                </Button>
                <Button variant="outline" color="primary">
                    Btn outline primary
                </Button>
                <Button variant="contain" color="grey">
                    Btn contain grey
                </Button>
                <Button variant="outline" color="grey">
                    Btn outline grey
                </Button>
                <Button variant="contain" color="white-hv-black">
                    S
                </Button>
                <Button size="icon">
                    <Icon icon={ICON_LIBARY.i_heart} />
                </Button>
            </div>

            <h2 className="text-[2rem]">Accordion</h2>
            <div className="">
                <Accordion title="Description">Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.</Accordion>
            </div>
        </div>
    );
}

export default Component;
