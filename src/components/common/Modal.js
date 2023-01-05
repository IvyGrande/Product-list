import React from "react";
import "../../App.css"


export const Modal = (props) => {
    return (
        <div className="addPage">
            <div className="head">{props.modalName}</div>
            <div className="textBlock">
                <p>
                    avatar url :
                    <input type="text" name="url" onChange={props.saveUrl}/>
                </p>
                <p>product name : <input
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={props.saveName}
                />
                </p>
                <p>desc :
                    <input
                        type="text"
                        name="introduction"
                        value={props.introduction}
                        onChange={props.saveIntroduction}
                    /></p>
            </div>
            <div className="bottom">
                <button onClick={() => props.setShowAddPage(false)}>Cancel</button>
                <button
                    onClick={() => {
                        props.setShowAddPage(false);
                        props.handleClick();
                    }}>Ok
                </button>
            </div>
        </div>
    )
}
