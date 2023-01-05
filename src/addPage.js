import React, {useState,useRef } from "react";
import "./App.css"
import productData from "./productData";

export const AddPage = (props) => {

    return (
 <div className="addPage">
     <div className="head">Add product</div>
     <div className="textBlock">
         <p>avatar url : <input
             type="text"
             name="url"
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
