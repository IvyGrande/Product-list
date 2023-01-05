import React, {useState} from "react";
import "../../App.css"
import productData from "../../data/ProductData";

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
                <div className="edit" onClick={() => props.deleteProduct(props.id)}>删除</div>
            </div>


        </div>
    )
}