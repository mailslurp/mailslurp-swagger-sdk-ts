/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateGroupOptions,
    CreateGroupOptionsFromJSON,
    CreateGroupOptionsToJSON,
    GroupContactsDto,
    GroupContactsDtoFromJSON,
    GroupContactsDtoToJSON,
    GroupDto,
    GroupDtoFromJSON,
    GroupDtoToJSON,
    GroupProjection,
    GroupProjectionFromJSON,
    GroupProjectionToJSON,
    PageContactProjection,
    PageContactProjectionFromJSON,
    PageContactProjectionToJSON,
    PageGroupProjection,
    PageGroupProjectionFromJSON,
    PageGroupProjectionToJSON,
    UpdateGroupContacts,
    UpdateGroupContactsFromJSON,
    UpdateGroupContactsToJSON,
} from '../models';

export interface AddContactsToGroupRequest {
    groupId: string;
    updateGroupContacts: UpdateGroupContacts;
}

export interface CreateGroupRequest {
    createGroupOptions: CreateGroupOptions;
}

export interface DeleteGroupRequest {
    groupId: string;
}

export interface GetAllGroupsRequest {
    page?: number;
    size?: number;
    sort?: GetAllGroupsSortEnum;
    since?: Date;
    before?: Date;
}

export interface GetGroupRequest {
    groupId: string;
}

export interface GetGroupWithContactsRequest {
    groupId: string;
}

export interface GetGroupWithContactsPaginatedRequest {
    groupId: string;
    page?: number;
    size?: number;
    sort?: GetGroupWithContactsPaginatedSortEnum;
    since?: Date;
    before?: Date;
}

export interface RemoveContactsFromGroupRequest {
    groupId: string;
    updateGroupContacts: UpdateGroupContacts;
}

/**
 * GroupControllerApi - interface
 * 
 * @export
 * @interface GroupControllerApiInterface
 */
export interface GroupControllerApiInterface {
    /**
     * 
     * @summary Add contacts to a group
     * @param {string} groupId 
     * @param {UpdateGroupContacts} updateGroupContacts 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    addContactsToGroupRaw(requestParameters: AddContactsToGroupRequest): Promise<runtime.ApiResponse<GroupContactsDto>>;

    /**
     * Add contacts to a group
     */
    addContactsToGroup(requestParameters: AddContactsToGroupRequest): Promise<GroupContactsDto>;

    /**
     * 
     * @summary Create a group
     * @param {CreateGroupOptions} createGroupOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    createGroupRaw(requestParameters: CreateGroupRequest): Promise<runtime.ApiResponse<GroupDto>>;

    /**
     * Create a group
     */
    createGroup(requestParameters: CreateGroupRequest): Promise<GroupDto>;

    /**
     * 
     * @summary Delete group
     * @param {string} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    deleteGroupRaw(requestParameters: DeleteGroupRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete group
     */
    deleteGroup(requestParameters: DeleteGroupRequest): Promise<void>;

    /**
     * 
     * @summary Get all Contact Groups in paginated format
     * @param {number} [page] Optional page index in list pagination
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    getAllGroupsRaw(requestParameters: GetAllGroupsRequest): Promise<runtime.ApiResponse<PageGroupProjection>>;

    /**
     * Get all Contact Groups in paginated format
     */
    getAllGroups(requestParameters: GetAllGroupsRequest): Promise<PageGroupProjection>;

    /**
     * 
     * @summary Get group
     * @param {string} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    getGroupRaw(requestParameters: GetGroupRequest): Promise<runtime.ApiResponse<GroupDto>>;

    /**
     * Get group
     */
    getGroup(requestParameters: GetGroupRequest): Promise<GroupDto>;

    /**
     * 
     * @summary Get group and contacts belonging to it
     * @param {string} groupId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    getGroupWithContactsRaw(requestParameters: GetGroupWithContactsRequest): Promise<runtime.ApiResponse<GroupContactsDto>>;

    /**
     * Get group and contacts belonging to it
     */
    getGroupWithContacts(requestParameters: GetGroupWithContactsRequest): Promise<GroupContactsDto>;

    /**
     * Get group and paginated contacts belonging to it
     * @param {string} groupId 
     * @param {number} [page] Optional page index in group contact pagination
     * @param {number} [size] Optional page size in group contact pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    getGroupWithContactsPaginatedRaw(requestParameters: GetGroupWithContactsPaginatedRequest): Promise<runtime.ApiResponse<PageContactProjection>>;

    /**
     * Get group and paginated contacts belonging to it
     */
    getGroupWithContactsPaginated(requestParameters: GetGroupWithContactsPaginatedRequest): Promise<PageContactProjection>;

    /**
     * 
     * @summary Get all groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    getGroupsRaw(): Promise<runtime.ApiResponse<Array<GroupProjection>>>;

    /**
     * Get all groups
     */
    getGroups(): Promise<Array<GroupProjection>>;

    /**
     * 
     * @summary Remove contacts from a group
     * @param {string} groupId 
     * @param {UpdateGroupContacts} updateGroupContacts 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupControllerApiInterface
     */
    removeContactsFromGroupRaw(requestParameters: RemoveContactsFromGroupRequest): Promise<runtime.ApiResponse<GroupContactsDto>>;

    /**
     * Remove contacts from a group
     */
    removeContactsFromGroup(requestParameters: RemoveContactsFromGroupRequest): Promise<GroupContactsDto>;

}

/**
 * 
 */
export class GroupControllerApi extends runtime.BaseAPI implements GroupControllerApiInterface {

    /**
     * Add contacts to a group
     */
    async addContactsToGroupRaw(requestParameters: AddContactsToGroupRequest): Promise<runtime.ApiResponse<GroupContactsDto>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling addContactsToGroup.');
        }

        if (requestParameters.updateGroupContacts === null || requestParameters.updateGroupContacts === undefined) {
            throw new runtime.RequiredError('updateGroupContacts','Required parameter requestParameters.updateGroupContacts was null or undefined when calling addContactsToGroup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups/{groupId}/contacts`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateGroupContactsToJSON(requestParameters.updateGroupContacts),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupContactsDtoFromJSON(jsonValue));
    }

    /**
     * Add contacts to a group
     */
    async addContactsToGroup(requestParameters: AddContactsToGroupRequest): Promise<GroupContactsDto> {
        const response = await this.addContactsToGroupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a group
     */
    async createGroupRaw(requestParameters: CreateGroupRequest): Promise<runtime.ApiResponse<GroupDto>> {
        if (requestParameters.createGroupOptions === null || requestParameters.createGroupOptions === undefined) {
            throw new runtime.RequiredError('createGroupOptions','Required parameter requestParameters.createGroupOptions was null or undefined when calling createGroup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateGroupOptionsToJSON(requestParameters.createGroupOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDtoFromJSON(jsonValue));
    }

    /**
     * Create a group
     */
    async createGroup(requestParameters: CreateGroupRequest): Promise<GroupDto> {
        const response = await this.createGroupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete group
     */
    async deleteGroupRaw(requestParameters: DeleteGroupRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling deleteGroup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete group
     */
    async deleteGroup(requestParameters: DeleteGroupRequest): Promise<void> {
        await this.deleteGroupRaw(requestParameters);
    }

    /**
     * Get all Contact Groups in paginated format
     */
    async getAllGroupsRaw(requestParameters: GetAllGroupsRequest): Promise<runtime.ApiResponse<PageGroupProjection>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.since !== undefined) {
            queryParameters['since'] = (requestParameters.since as any).toISOString();
        }

        if (requestParameters.before !== undefined) {
            queryParameters['before'] = (requestParameters.before as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups/paginated`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageGroupProjectionFromJSON(jsonValue));
    }

    /**
     * Get all Contact Groups in paginated format
     */
    async getAllGroups(requestParameters: GetAllGroupsRequest): Promise<PageGroupProjection> {
        const response = await this.getAllGroupsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get group
     */
    async getGroupRaw(requestParameters: GetGroupRequest): Promise<runtime.ApiResponse<GroupDto>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getGroup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups/{groupId}`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupDtoFromJSON(jsonValue));
    }

    /**
     * Get group
     */
    async getGroup(requestParameters: GetGroupRequest): Promise<GroupDto> {
        const response = await this.getGroupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get group and contacts belonging to it
     */
    async getGroupWithContactsRaw(requestParameters: GetGroupWithContactsRequest): Promise<runtime.ApiResponse<GroupContactsDto>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getGroupWithContacts.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups/{groupId}/contacts`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupContactsDtoFromJSON(jsonValue));
    }

    /**
     * Get group and contacts belonging to it
     */
    async getGroupWithContacts(requestParameters: GetGroupWithContactsRequest): Promise<GroupContactsDto> {
        const response = await this.getGroupWithContactsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get group and paginated contacts belonging to it
     */
    async getGroupWithContactsPaginatedRaw(requestParameters: GetGroupWithContactsPaginatedRequest): Promise<runtime.ApiResponse<PageContactProjection>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getGroupWithContactsPaginated.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.since !== undefined) {
            queryParameters['since'] = (requestParameters.since as any).toISOString();
        }

        if (requestParameters.before !== undefined) {
            queryParameters['before'] = (requestParameters.before as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups/{groupId}/contacts-paginated`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageContactProjectionFromJSON(jsonValue));
    }

    /**
     * Get group and paginated contacts belonging to it
     */
    async getGroupWithContactsPaginated(requestParameters: GetGroupWithContactsPaginatedRequest): Promise<PageContactProjection> {
        const response = await this.getGroupWithContactsPaginatedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all groups
     */
    async getGroupsRaw(): Promise<runtime.ApiResponse<Array<GroupProjection>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GroupProjectionFromJSON));
    }

    /**
     * Get all groups
     */
    async getGroups(): Promise<Array<GroupProjection>> {
        const response = await this.getGroupsRaw();
        return await response.value();
    }

    /**
     * Remove contacts from a group
     */
    async removeContactsFromGroupRaw(requestParameters: RemoveContactsFromGroupRequest): Promise<runtime.ApiResponse<GroupContactsDto>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling removeContactsFromGroup.');
        }

        if (requestParameters.updateGroupContacts === null || requestParameters.updateGroupContacts === undefined) {
            throw new runtime.RequiredError('updateGroupContacts','Required parameter requestParameters.updateGroupContacts was null or undefined when calling removeContactsFromGroup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/groups/{groupId}/contacts`.replace(`{${"groupId"}}`, encodeURIComponent(String(requestParameters.groupId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateGroupContactsToJSON(requestParameters.updateGroupContacts),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupContactsDtoFromJSON(jsonValue));
    }

    /**
     * Remove contacts from a group
     */
    async removeContactsFromGroup(requestParameters: RemoveContactsFromGroupRequest): Promise<GroupContactsDto> {
        const response = await this.removeContactsFromGroupRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAllGroupsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetGroupWithContactsPaginatedSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
