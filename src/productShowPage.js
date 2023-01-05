import React, { useState } from "react";
import {Product} from "./product";
import productData from "./productData";
//import {render} from "react-dom";
import {AddPage} from "./addPage";
import {DeleteAlert} from "./deleteAlert";
import {EditPage} from "./editPage";


export const ProductShowPage = () => {
    const [showAddPage, setShowAddPage] = useState(false);
    const [product,setProduct] = useState(productData);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showEditPage,setShowEditPage] = useState(false);
    // const [input,setInput] = useState({id:"",url:"",name:"",introduction:""})
    const [url,setUrl] = useState("");
    const [name,setName] = useState("");
    const [introduction,setIntroduction] = useState("");
    const handleClick = () =>{
        console.log(url)
        console.log(name)
        console.log(introduction)
        setProduct(current =>[...current,{id:`${productData.length+1}`,url ,name ,introduction}])

    }
    const deleteConfirm = (id) =>{
        setShowDeleteAlert(false)
        console.log(id)
        setProduct(prevProduct =>{
            return [...prevProduct,prevProduct.splice(id-1,1)]
        }
            // [...current.slice(0, )]
    )
    }
    const handleClickDelete = () =>{
              setShowDeleteAlert(true)

        }

    const edit = (id) =>{
        setShowEditPage(true)
        console.log(product.url)

    }
    const productModal = product.map(
        item => {
            return (

                <Product
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
    const saveUrl =(e)=>{
        setUrl(e.target.value)
        console.log(e.target.value)
    }
    const saveName =(e)=>{
        setName(e.target.value)
    }
    const saveIntroduction =(e)=>{
        setIntroduction(e.target.value)
    }
    return (
        <div className="body">
            <div className="add" onClick={() => {
                setShowAddPage(true)
            }}>新增产品
            </div>
            {showAddPage ?
                <AddPage
                    saveUrl={saveUrl}
                    saveName={saveName}
                    saveIntroduction={saveIntroduction}
                    setShowAddPage={setShowAddPage}
                    handleClick={handleClick}
                />
                : null}
            {showDeleteAlert ?
                <DeleteAlert
                    setShowDeleteAlert={setShowDeleteAlert}
                    deleteConfirm={deleteConfirm}
                    id={product.id}
                />
                :null
            }
            {showEditPage ?
                <EditPage
                    saveUrl={saveUrl}
                    saveName={saveName}
                    saveIntroduction={saveIntroduction}
                    url={product.url}
                    setShowEditPage={setShowEditPage}
                />
            :null}
            {productModal}
        </div>
    )
}


