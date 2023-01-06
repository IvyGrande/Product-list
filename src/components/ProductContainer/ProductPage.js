import React, {useState} from "react";
import {ProductModal} from "../common/ProductModal";
import productData from "../../data/ProductData";
//import {render} from "react-dom";
import {Modal} from "../common/Modal";
import {DeleteAlert} from "../common/DeleteAlert";


export const ProductPage = () => {
    const [showModalPage, setShowModalPage] = useState(false);
    const [product, setProduct] = useState(productData);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showEditPage,setShowEditPage] = useState(false);

    const deleteConfirm = (product, id) => {
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
console.log(product)
    // const editProduct = product.map(product => [product.url, product.name, product.introduction])
    // console.log(editProduct)
    const editUrl = product.url
    const editName = product.map(e => e.name)

    const editProduct = (id) => {
        setShowEditPage(true)
        console.log(product.url)

    }

    const productModal = product.map(
        item => {
            return (
                <ProductModal
                    key={item.id}
                    list={item}
                    edit={editProduct}
                    deleteProduct={handleClickDelete}
                />
            )
        }
    )


    const getStateFromModal = (state) =>{
        setShowModalPage(state)
        setShowEditPage(state)
    }

    const getNewProduct = (newProduct,state) =>{
        setProduct([...product,newProduct])
        console.log(product)
        setShowModalPage(state)
    }

    return (
        <div className="body">
            <div className="add" onClick={() => {
                setShowModalPage(true)
            }}>
                新增产品
            </div>
            {showModalPage &&
                <Modal
                    url={""}
                    addNewProduct={getNewProduct}
                    cancel={getStateFromModal}
                    modalName="Add page"
                />
            }
            {showDeleteAlert ?
                <DeleteAlert
                    setShowDeleteAlert={setShowDeleteAlert}
                    deleteConfirm={deleteConfirm}
                    id={product.id}
                />
                : null
            }
            {showEditPage &&
                <Modal
                    url={editUrl}
                    name={editName}
                    // editProduct={editProduct}
                    addNewProduct={getNewProduct}
                    cancel={getStateFromModal}
                    modalName="Edit page"
                />
            }

            {productModal}
        </div>
    )
}


