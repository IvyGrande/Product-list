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


    const getStateFromModal = (state) =>{
        setShowAddPage(state)
    }

    const getNewProduct = (newProduct,state) =>{
        setProduct([...product,newProduct])
        console.log(newProduct)
        setShowAddPage(state)
    }

    return (
        <div className="body">
            <div className="add" onClick={() => {
                setShowAddPage(true)
            }}>
                新增产品
            </div>
            {showAddPage &&
                <Modal
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

            {productModal}
        </div>
    )
}


