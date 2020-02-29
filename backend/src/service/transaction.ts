import {Transaction, TransactionStatus} from "../model/transaction";
import {data} from "../model/transaction/mock";

enum SorterOrder {
    Ascend="ascend",
    Descend="descend"
}

type Paging = {
    page: number,
    pageSize: number,
    sorterField: string,
    sorterOrder: SorterOrder
}

export default class TransactionService {

    findAll(): Transaction[] {
        return data
    }

    create(transaction: Transaction) {
        "no implementation"
    }
}
