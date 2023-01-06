import React, {useState} from "react";
import {ProductModal} from "../common/ProductModal";
import productData from "../../data/ProductData";
import {Modal} from "../common/Modal";
import {DeleteAlert} from "../common/DeleteAlert";

export const ProductPage = () => {
    const [showModalPage, setShowModalPage] = useState(false);
    const [product, setProduct] = useState(productData);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showEditPage, setShowEditPage] = useState(false);
    const [productSelected, setProductSelected] = useState({});
    const [selectedId, setSelectedId] = useState("")

    const editProduct = (id) => {
        setShowEditPage(true)
        setSelectedId(id)
        console.log(id)
        let editedProduct = product.find(product =>
            product.id === id && product
        )
        setProductSelected(editedProduct)
        console.log(editedProduct)
    }

    const handleClickDelete = (id) => {
        setShowDeleteAlert(true)
        setSelectedId(id)
        console.log(setSelectedId)
    }

    const deleteConfirm = (state, id) => {
        setShowDeleteAlert(state)
        console.log(id)
        setProduct(prevProduct => {
            return (prevProduct.filter(item => item.id !== id))
        })
    }

    const cancelDeleteItem = (state) => {
        setShowDeleteAlert(state)
    }

    const productModal = product.map(
        item => {
            return (
                <ProductModal
                    key={item.id}
                    id={item.id}
                    list={item}
                    edit={editProduct}
                    deleteProduct={handleClickDelete}
                />
            )
        }
    )


    const getStateFromModal = (state) => {
        setShowModalPage(state)
        setShowEditPage(state)
    }

    const getNewProduct = (newProduct, state) => {
        setProduct([...product, newProduct])
        console.log(product)
        setShowModalPage(state)
    }

    const getEditedProduct = (newProduct, state, id) => {
        setShowEditPage(state)
        console.log(id)
        setProduct(prevProduct => [...prevProduct.map(item => item.id == id ? newProduct : item)])
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
                    name={""}
                    introduction={""}
                    addNewProduct={getNewProduct}
                    cancel={getStateFromModal}
                    modalName="Add page"
                />
            }
            {showDeleteAlert ?
                <DeleteAlert
                    id={selectedId}
                    cancelDeleteItem={cancelDeleteItem}
                    deleteConfirm={deleteConfirm}
                />
                : null
            }
            {showEditPage &&
                <Modal
                    id={selectedId}
                    url={productSelected.url}
                    name={productSelected.name}
                    introduction={productSelected.introduction}
                    addNewProduct={getEditedProduct}
                    cancel={getStateFromModal}
                    modalName="Edit page"
                />
            }
            {productModal}
        </div>
    )
}


