import React, {useState} from "react";
import "../../App.css"
import uuid from 'react-uuid';

export const Modal = (props) => {
    const [url, setUrl] = useState(props.url);
    const [name, setName] = useState(props.name);
    const [introduction, setIntroduction] = useState(props.introduction);

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
        props.cancel(false)
    }

    const save = () => {
        const newProduct = {id: uuid(), url, name, introduction}
        props.addNewProduct(newProduct, false, props.id)
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
