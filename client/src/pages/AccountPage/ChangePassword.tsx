import Button from "components/UI/Button";
import Textfield from "components/UI/Textfield";
import React from "react";

function ChangePassword() {
    return (
        <div className="change_password">
            <h1>Update your password</h1>
            <form className="mt-[4.8rem]" action="">
                <Textfield className="mb-[2rem]" label="Current password" />
                <Textfield className="mb-[2rem]" label="New password" />
                <Textfield className="mb-[2rem]" label="Confirm password" />
                <Button type="submit" color="black" variant="contain">
                    Update password
                </Button>
            </form>
        </div>
    );
}

export default ChangePassword;
