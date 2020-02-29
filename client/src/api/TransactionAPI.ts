import {Transaction} from "../components/TransactionTable";
// @ts-ignore
import {fetchJson, HttpResponse} from "./Fetch";

const serverHost = process.env.REACT_APP_API_SERVER_HOST;

const path = `${serverHost}/transactions`;

export function getTransactions(params?: any): Promise<HttpResponse<Transaction[]>> {
     return fetchJson<Transaction[]>(path, {queryParams: params})
}
