import { BalanceList, Balance } from "./types";
export declare class Billing {
    private _credentials;
    private _apiUrl;
    constructor(_credentials: string, _apiUrl: string);
    private apiPath;
    /**
     * Retrieves list of balance info of the specified project.
     * @param projectId Unique identifier of the project
     */
    listBalances(projectId: string): Promise<BalanceList>;
    /**
     * Retrieves balance info of a specified balance_id in the specified project.
     * @param projectId Unique identifier of the project
     * @param balanceId Unique identifier of the balance
     */
    getBalance(projectId: string, balanceId: string): Promise<Balance>;
}
