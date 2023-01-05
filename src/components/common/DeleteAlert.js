import React from "react";

export const DeleteAlert = (props) => {
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
                <button onClick={() => props.setShowDeleteAlert(false)}>Cancel</button>
                <button onClick={props.deleteConfirm}>Confirm</button>
            </div>
        </div>
    )
}