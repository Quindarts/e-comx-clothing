import Button from "components/UI/Button";
import React from "react";
import { Link } from "react-router-dom";

function ChangeBilling() {
    return (
        <div className="change_billing">
            <h1>Payments & payouts</h1>
            <div className="mt-[2rem]">
                <p>
                    When you receive a payment for a order, we call that payment
                    to you a "payout." Our secure payment system supports
                    several payout methods, which can be set up below. Go to
                    FAQ.
                </p>
                <p>
                    To get paid, you need to set up a payout method releases
                    payouts about 24 hours after a guest’s scheduled time. The
                    time it takes for the funds to appear in your account
                    depends on your payout method.
                </p>
            </div>
            <Link to="/">Learn more</Link>
            <Button variant="contain" color="black">
                Add payout mothod
            </Button>
        </div>
    );
}

export default ChangeBilling;
