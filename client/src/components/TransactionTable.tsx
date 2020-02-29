import React from "react";
import {Table} from "antd"
import {ColumnProps} from "antd/es/table";
import numeral from "numeral"
import moment from "moment";

export enum TransactionStatus {
    Pending = "pending",
    Success = "success",
    Fail = "fail",
}

export type BusinessEntity = {
    id: string,
    name: string,
}

export interface Transaction {
    id: string;
    number: string;
    date: number;
    currency: string;
    amount: number;
    owner: BusinessEntity;
    counterParty: BusinessEntity;
    status: TransactionStatus;
    remarks: string;
}

const columns: ColumnProps<Transaction>[] = [
    {
        key: 'number',
        title: 'Number',
        dataIndex: 'number',
        sorter: (a, b) => a.number.length - b.number.length,
        width: '20%',
    },
    {
        key: 'date',
        title: 'Date',
        dataIndex: 'date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.date - b.date,
        render: (value) => {
            return moment(value).format('MMMM Do YYYY, h:mm:ss a');
        },
        width: '20%',
    },
    {
        key: 'counterParty',
        title: 'Counter Party',
        dataIndex: 'counterParty',
        sorter: (a, b) => a.counterParty.name.length - b.counterParty.name.length,
        render: (value: BusinessEntity) => {
            return value.name
        }
    },
    {
        key: 'amount',
        title: 'Amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount - b.amount,
        render: (value: number, record) => {
            return `${record.currency} ${numeral(value).format("0,0")}`
        }
    },
    {
        key: 'status',
        title: 'Status',
        dataIndex: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
        render: (value: TransactionStatus) => {
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
    },
    {
        key: 'remarks',
        title: 'Remarks',
        dataIndex: 'remarks',
        sorter: (a, b) => a.remarks.length - b.remarks.length,
    }
];

type TransactionTableProps = {
    data: Transaction[];
    loading?: boolean;
    onChange?: any
}

const TransactionTable = (props: TransactionTableProps) => {
    const {data, loading, onChange} = props;
    return (
        <Table<Transaction>
            rowKey={(row) => row.id}
            columns={columns}
            dataSource={data}
            loading={loading}
            onChange={onChange}
        />
    )
};

export default TransactionTable
