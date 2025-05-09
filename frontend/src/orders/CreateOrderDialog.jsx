


function CreateOrderDialog({dialogOpen, onClose}) {
    // TODO: call mutation here.
    // useMutation()

    return (
        <dialog open={dialogOpen} >
            <h3>Create a new order</h3>
            <form method="dialog">
                <p><input type="text" placeholder="Order name" /></p>
                <p><input type="text" placeholder="Description" /></p>
                <button onClick={() => onClose}>Create</button>
                <button onClick={onClose}>Cancel</button>
            </form>
        </dialog>
    )
}
export default CreateOrderDialog;