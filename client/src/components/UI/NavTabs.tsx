import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE } from "utils/constants";

interface LinkTabProps {
    label?: string;
    href: string;
}

function LinkTab(props: LinkTabProps) {
    const { href } = props;
    const navigate = useNavigate();
    return (
        <Tab
            component="a"
            onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
            ) => {
                event.preventDefault();
                navigate(href);
            }}
            {...props}
        />
    );
}
export default function NavTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="nav_tabs" style={{ width: "100%" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs"
            >
                <LinkTab label="Account info" href={ROUTE.ACCOUNT} />
                <LinkTab label="Save lists" href={ROUTE.SAVED_LIST} />
                <LinkTab label="My order" href={ROUTE.ACCOUNT_ORDED} />
                <LinkTab label="Change password" href={ROUTE.ACCOUNT_CHANGE_PASS} />
                <LinkTab label="Change Billing" href={ROUTE.ACCOUNT_BILLING} />
            </Tabs>
        </div>
    );
}
