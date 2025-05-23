import {useCreateOrder} from "./api.js";
import { ErrorBoundary } from "react-error-boundary";

function CreateOrderDialog({dialogOpen, onClose}) {
    const createOrderMutation = useCreateOrder();
    const onSubmit = (form) => {
        const payload = {
            name: form.get("orderName"),
            description: form.get("description"),
        }
        createOrderMutation.mutate(payload);
        onClose();
    }

    const openAsModal = (el) => {
        if (dialogOpen) {
            el?.showModal()
        } else {
            el?.close()
        }
    }

    return (
        <dialog  aria-modal="true" ref={openAsModal}>
            <ErrorBoundary fallback={
                <p>
                    <p>There was an error while creating the order </p>
                    <button onClick={onClose}>Cancel</button>
                </p>
            }>
                <form method="dialog" action={onSubmit}>
                    <h3>Create a new order</h3>
                    <p><input type="text" placeholder="Order name" name="orderName"/></p>
                    <p><input type="text" placeholder="Description" name="description"/></p>
                    <button type='submit'>Create</button>
                    <button onClick={onClose}>Cancel</button>
                </form>
            </ErrorBoundary>
        </dialog>
    )
}

export default CreateOrderDialog;