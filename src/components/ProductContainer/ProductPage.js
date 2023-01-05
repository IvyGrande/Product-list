import React, {useState} from "react";
import {ProductModal} from "../common/ProductModal";
import productData from "../../data/ProductData";
//import {render} from "react-dom";
import {Modal} from "../common/Modal";
import {DeleteAlert} from "../common/DeleteAlert";



export const ProductPage = () => {
    const [showAddPage, setShowAddPage] = useState(false);
    const [product, setProduct] = useState(productData);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showEditPage, setShowEditPage] = useState(false);
    // const [input,setInput] = useState({id:"",url:"",name:"",introduction:""})
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [introduction, setIntroduction] = useState("");

    const handleClick = () => {
        console.log(url)
        console.log(name)
        console.log(introduction)
        setProduct(current => [...current, {id: `${productData.length + 1}`, url, name, introduction}])
console.log(product)
    }

    const deleteConfirm = (product,id) => {
        setShowDeleteAlert(false)
        console.log(id)
        setProduct(prevProduct => {
            prevProduct.filter(item => item.id !== id)
                // return [...prevProduct, prevProduct.splice(id - 1, 1)]
            }
            // [...current.slice(0, )]
        )
    }

    const handleClickDelete = () => {
        setShowDeleteAlert(true)

    }

    const edit = (id) => {
        setShowEditPage(true)
        console.log(product.url)

    }

    const productModal = product.map(
        item => {
            return (
                <ProductModal
                    key={item.id}
                    list={item}
                    edit={edit}
                    deleteProduct={handleClickDelete}
                />
            )
        }
    )

    // const  handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { username, password } = this;
    //     alert('avatar url ：' + url + 'product name ：' + name + 'desc :' + introduction)
    // }
    const saveUrl = (e) => {
        setUrl(e.target.value)
        console.log(e.target.value)
    }

    const saveName = (e) => {
        setName(e.target.value)
    }

    const saveIntroduction = (e) => {
        setIntroduction(e.target.value)
    }
    return (
        <div className="body">
            <div className="add" onClick={() => {
                setShowAddPage(true)
            }}>新增产品
            </div>
            {showAddPage ?
                <Modal
                    saveUrl={saveUrl}
                    saveName={saveName}
                    saveIntroduction={saveIntroduction}
                    setShowAddPage={setShowAddPage}
                    handleClick={handleClick}
                    modalName="Add page"
                />
                : null}
            {showDeleteAlert ?
                <DeleteAlert
                    setShowDeleteAlert={setShowDeleteAlert}
                    deleteConfirm={deleteConfirm}
                    id={product.id}
                />
                : null
            }
            {showEditPage ?
                <Modal
                    modalName="Edit page"
                    saveUrl={saveUrl}
                    saveName={saveName}
                    saveIntroduction={saveIntroduction}
                    url={product.url}
                    setShowEditPage={setShowEditPage}
                />
                : null}
            {productModal}
        </div>
    )
}


