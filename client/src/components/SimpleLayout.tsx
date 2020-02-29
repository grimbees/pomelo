import React from  'react';
import {Layout} from 'antd'
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import LayoutContent from "./LayoutContent";
import TransactionPage from "../pages/TransactionPage";

const SimpleLayout = () => {
    return (
        <Layout className="site-layout">
            <LayoutHeader/>
            <LayoutContent>
                <TransactionPage/>
            </LayoutContent>
            <LayoutFooter/>
        </Layout>
    )
};

export default SimpleLayout
