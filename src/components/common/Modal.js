import React, {useState} from "react";
import "../../App.css"
import uuid from 'react-uuid';

export const Modal = (props) => {
    console.log(props.isShow);
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [introduction, setIntroduction] = useState("");

    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    };

    const handleNameChange = (e) => {
        setName(e.target.value)
    };

    const handleIntroductionChange = (e) => {
        setIntroduction(e.target.value)
    };

    const cancel = () => {
    //    要传的文字 msg:"false"
        props.cancel(false)
    }

    const save = () => {
        const newProduct = {id:uuid(), url, name, introduction}
        props.addNewProduct(newProduct,false)
    }


    return (
        <div className="addPage">
            <div className="head">{props.modalName}</div>
            <div className="textBlock">
                <p>
                    avatar url :
                    <input type="text" name="url" value={url} onChange={handleUrlChange}/>
                </p>
                <p>
                    product name :
                    <input type="text" name="name" value={name} onChange={handleNameChange}/>
                </p>
                <p>
                    desc :
                    <input type="text" name="introduction" value={introduction}
                           onChange={handleIntroductionChange}/>
                </p>
            </div>
            <div className="bottom">
                <button onClick={cancel}>Cancel</button>
                <button onClick={save}>
                    Ok
                </button>
            </div>
        </div>
    )
}
