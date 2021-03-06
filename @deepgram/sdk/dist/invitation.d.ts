import { Message, InvitationOptions, InvitationList } from "./types";
export declare class Invitation {
    private _credentials;
    private _apiUrl;
    constructor(_credentials: string, _apiUrl: string);
    private apiPath;
    /**
     * Lists all the current invites of a specified project.
     * @param projectId Unique identifier of the project
     */
    list(projectId: string): Promise<InvitationList>;
    /**
     * Sends an invitation to join the specified project.
     * @param projectId Unique identifier of the project
     */
    send(projectId: string, options: InvitationOptions): Promise<Message>;
    /**
     * Removes the authenticated account from the specified project.
     * @param projectId Unique identifier of the project
     */
    leave(projectId: string): Promise<Message>;
    /**
     * Removes the specified email from the invitations on the specified project.
     * @param projectId Unique identifier of the project
     * @param email email address of the invitee
     * NOTE: This will return successful even if the email does not have an invite on the project.
     */
    delete(projectId: string, email: string): Promise<Message>;
}
