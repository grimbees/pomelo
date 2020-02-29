import React from "react";

type LayoutContainerProps = {
    children: any
}

const LayoutContainer = (props: LayoutContainerProps) => {
    return (
        <div className="site-layout-container">
            {props.children}
        </div>
    )
};

export default LayoutContainer
