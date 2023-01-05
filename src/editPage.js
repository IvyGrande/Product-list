import React from "react";

export const EditPage = (props) => {
    return(
        <div className="addPage">
            <div className="head">Edit product</div>
            <div className="textBlock">
                <p>avatar url : <input
                    type="text"
                    name="url"
                    value={props.url}
                    onChange={props.saveUrl}
                /></p>
                <p>product name : <input
                    type="text"
                    name="name"
                    onChange={props.saveName}
                />
                </p>
                <p>desc : <input
                    type="text"
                    name="introduction"
                    onChange={props.saveIntroduction}
                /></p>
            </div>
            <div className="bottom">
                <button onClick={() => props.setShowEditPage(false)}>Cancel</button>
                <button
                    onClick={() => {
                        props.setShowEditPage(false);
                        props.handleClick();
                    }}>Ok
                </button>
            </div>
        </div>

    )
}