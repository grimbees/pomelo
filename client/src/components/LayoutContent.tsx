import React from "react";
import {Layout} from "antd"

type LayoutContentProps = {
    children: React.ReactFragment
}

const LayoutContent = (props: LayoutContentProps) => {
    return (
        <Layout.Content className="site-layout-background">
            {props.children}
        </Layout.Content>
    )
};

export default LayoutContent
