import React from "react";

export const Header = () => {
    return (
        <div className="header">
            <div>
                <h2>产品列表</h2>
                <p>目前项目在跟进的产品</p>
                <div className="start">
                    <img src="/start.png" alt=""/>
                </div>
            </div>
            <div className="logo">
                <img src="/logo.png" alt=""/>
            </div>
        </div>
    )
}