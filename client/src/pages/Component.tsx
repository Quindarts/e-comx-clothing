import Button from "components/UI/Button";
import { ICON_LIBARY } from "utils/constants";
import { Icon } from '@iconify/react';
function Component() {
    return (
        <div>
            <h1>Component</h1>
            <h2>Button</h2>
            <div className="setting-btn">
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
                    <Icon icon={ICON_LIBARY.i_heart}  />
                </Button>
            </div>
        </div>
    );
}

export default Component;
