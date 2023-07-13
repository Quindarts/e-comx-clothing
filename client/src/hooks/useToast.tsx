import { useState } from "react";

export function useToast() {
    const [openToast, setOpenToast] = useState(false);
    const handleClickToast = () => {
        setOpenToast(true);
    };
    const handleCloseToast = () => {
        setOpenToast(false);
    };
    return { openToast, handleClickToast, handleCloseToast };
}
