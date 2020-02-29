import logo from "../logo.svg";
import React from "react";
import {Layout} from "antd";

const LayoutHeader = () => {
    return (
        <Layout.Header>
            <img src={logo} className="App-logo" alt="logo"/>
        </Layout.Header>
    )
};

export default LayoutHeader
