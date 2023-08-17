import React from "react";
import Button from "./Button";
import CardOrder from "./CardOrder";

interface CardOrderAccountPropsType {
    list: Array<Object>;
    date?: string;
    codeOrder: string;
    status: string;
}
function CardOrderAccount(props: CardOrderAccountPropsType) {

    const { list, date, codeOrder, status } = props;
    return (
        <div className="card_order_account">
            <div className="card_order_account--information flex justify-between items-center">
                <div className="information">
                    <h1>{codeOrder}</h1>
                    <p className="flex justify-between">
                        {date} {" -  "}
                        <span> {status}</span>
                    </p>
                </div>
                <Button className="w-[15rem]" variant="contain" color="white">
                    View Order
                </Button>
            </div>
            <div className="card_order_account--list">
                {list.map((item: any, key: number) => (
                    <CardOrder key={item} type="Leave reviews"/>
                ))}
            </div>
        </div>
    );
}

export default CardOrderAccount;
