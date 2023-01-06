import React from "react";

export const DeleteAlert = (props) => {

    const cancelDeleteItem = () => {
        props.cancelDeleteItem(false)
    }

    const deleteConfirm = () => {
        props.deleteConfirm(false, props.id)
    }

    return (
        <div className="deleteAlert">
            <div>
                <div className="confirm">
                    <img src="/deleteAlert.png" alt=""/>
                    <h2>Confirm</h2>
                </div>
                <p>Are you sure you want to delete this product?</p>
            </div>
            <div className="bottom">
                <button data-testid="delete-cancel" onClick={cancelDeleteItem}>Cancel</button>
                <button onClick={deleteConfirm}>Confirm</button>
            </div>
        </div>
    )
}