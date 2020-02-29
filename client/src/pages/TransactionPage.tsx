import React, {useEffect, useState} from "react";
import { message, PageHeader} from "antd";
import LayoutContainer from "../components/LayoutContainer";
import TransactionTable from "../components/TransactionTable";
import {getTransactions} from "../api/TransactionAPI";

const TransactionPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [dataSource, setDataSource] = useState<any>([]);

    useEffect(() => {
        setLoading(true)
    }, []);

    useEffect(() => {
        if (loading) {
            getTransactions().then((data) => {
                setDataSource(data.parsedBody)
            }).catch(err => {
                console.error(err);
                message.error(err.toString());
            }).finally(() => {
                setLoading(false);
            })
        }
    }, [loading]);


    return (
        <LayoutContainer>
            <PageHeader
                className="site-page-header"
                title="Transactions"
                subTitle="List of created transactions"
            />,
            <TransactionTable loading={loading} data={dataSource}/>
        </LayoutContainer>
    )
};

export default TransactionPage
