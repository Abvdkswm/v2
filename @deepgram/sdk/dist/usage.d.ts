import { UsageField, UsageFieldOptions, UsageOptions, UsageRequest, UsageRequestList, UsageRequestListOptions, UsageResponse } from "./types";
export declare class Usage {
    private _credentials;
    private _apiUrl;
    constructor(_credentials: string, _apiUrl: string);
    private apiPath;
    /**
     * Retrieves all requests associated with the provided projectId based
     * on the provided options
     * @param projectId Unique identifier of the project
     * @param options Additional filter options
     */
    listRequests(projectId: string, options?: UsageRequestListOptions): Promise<UsageRequestList>;
    /**
     * Retrieves a specific request associated with the provided projectId
     * @param projectId Unique identifier of the project
     * @param requestId Unique identifier for the request to retrieve
     */
    getRequest(projectId: string, requestId: string): Promise<UsageRequest>;
    /**
     * Retrieves usage associated with the provided projectId based
     * on the provided options
     * @param projectId Unique identifier of the project
     * @param options Options to filter usage
     */
    getUsage(projectId: string, options?: UsageOptions): Promise<UsageResponse>;
    /**
     * Retrieves features used by the provided projectId based
     * on the provided options
     * @param projectId Unique identifier of the project
     * @param options Options to filter usage
     */
    getFields(projectId: string, options?: UsageFieldOptions): Promise<UsageField>;
}
