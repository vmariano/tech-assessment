import CreateOrderDialog from "./CreateOrderDialog.jsx";
import OrdersList from "./OrdersList.jsx";
import {useState} from "react";
import './Orders.css';

function Orders() {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <div className="add-order-button">
                <button onClick={() => setDialogOpen(true)}> ➕ Add Order</button>
            </div>
            <CreateOrderDialog dialogOpen={dialogOpen} onClose={() => setDialogOpen(false)}/>
            <OrdersList />
        </>
   );
}


export default Orders;