import CreateOrderDialog from "./CreateOrderDialog.jsx";
import OrdersList from "./OrderList/OrdersList.jsx";
import {useState} from "react";



function Orders() {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <button onClick={() => setDialogOpen(true)}>Add Order</button>
            <CreateOrderDialog dialogOpen={dialogOpen} onClose={() => setDialogOpen(false)}/>
            <OrdersList />
        </>
   );
}


export default Orders;