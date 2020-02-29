import BusinessEntity from "./bentity";
import {v4 as uuidv4} from 'uuid';

enum TransactionStatus {
    Pending = "pending",
    Success = "success",
    Fail = "fail",
}

class Transaction {
    public id: string;
    public number: string;
    public date: number;
    public currency: string;
    public amount: number;
    public owner: BusinessEntity;
    public counterParty: BusinessEntity;
    public status: TransactionStatus;
    public remarks: string;

    constructor(currency: string, amount: number, owner: BusinessEntity, counterParty: BusinessEntity, remarks: string) {
        this.id = uuidv4();
        this.number = uuidv4();
        this.date = new Date().getTime();
        this.status = TransactionStatus.Pending;
        this.currency = currency;
        this.amount = amount;
        this.owner = owner;
        this.counterParty = counterParty;
        this.remarks = remarks;

    }
}

export {Transaction, TransactionStatus}
