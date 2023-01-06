import React from "react";
import "../../App.css"

export const ProductModal = (props) => {
    return (
        <div className="listModal">
            <div className="listContent">
                <div className="list-img">
                    <img src={props.list.url} alt=""/>
                </div>
                <div className="list-text">
                    <h2 className="list-text-header">{props.list.name}</h2>
                    <p>{props.list.introduction}</p>
                </div>
            </div>
            <div className="editPart">
                <div className="editRight" onClick={() => props.edit(props.id)}>编辑</div>
                <div className="delete" onClick={() => props.deleteProduct(props.id)}>删除</div>
            </div>
        </div>
    )
}