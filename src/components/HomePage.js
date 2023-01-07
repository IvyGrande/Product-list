import React from "react";
import {Header} from "./Header/Header";
import {ProductPage} from "./ProductContainer/ProductPage";

export const HomePage = () =>{
    return (
        <div>
            <Header />
            <ProductPage />
        </div>
    )
}