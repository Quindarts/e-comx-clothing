import CardOrderAccount from "components/UI/CardOrderAccount";
import React from "react";
const listdemo = [
    {
        list: [1, 2, 3],
        date: "Aug 8, 2023",
        codeOrder: "#WU3746HGG12",
        status: "Delivered",
    },
    {
        list: [1, 2, 3],
        date: "Aug 8, 2023",
        codeOrder: "#WU3746HGG12",
        status: "Delivered",
    },
];
function AccountOrder() {
    return (
        <div className="account_order">
            <h1>Order History</h1>
            <div className="w-full">
                {listdemo.map((item: any, key: number) => (
                    <CardOrderAccount
                        list={item.list}
                        date={item.date}
                        codeOrder={item.codeOrder}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    );
}

export default AccountOrder;
