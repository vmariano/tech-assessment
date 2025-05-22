import {useCreateOrder} from "./api.js";
import { ErrorBoundary } from "react-error-boundary";

function CreateOrderDialog({dialogOpen, onClose}) {
    const createOrder = useCreateOrder();

    //TODO: apply mutation
    const onSubmit = (form) => {
        const payload = {
            orderName: form.get("orderName").value,
            description: form.get("description").value,
        }

        createOrder(payload);
        console.log(`create order: ${form}`);
        onClose();
    }


    return (
        <dialog open={dialogOpen} >
            <h3>Create a new order</h3>
            <ErrorBoundary fallback={
                <p>
                    <p>There was an error while creating the order </p>
                    <button onClick={onClose}>Cancel</button>
                </p>
            }>
            <form method="dialog" action={onSubmit}>
                <p><input type="text" placeholder="Order name" name="orderName" /></p>
                <p><input type="text" placeholder="Description" name="description" /></p>
                <button  type='submit' >Create</button>
                <button onClick={onClose}>Cancel</button>
            </form>
            </ErrorBoundary>
        </dialog>
    )
}
export default CreateOrderDialog;