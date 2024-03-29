/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    MissedEmail,
    MissedEmailFromJSON,
    MissedEmailToJSON,
    PageMissedEmailProjection,
    PageMissedEmailProjectionFromJSON,
    PageMissedEmailProjectionToJSON,
    PageUnknownMissedEmailProjection,
    PageUnknownMissedEmailProjectionFromJSON,
    PageUnknownMissedEmailProjectionToJSON,
} from '../models';

export interface GetAllMissedEmailsRequest {
    page?: number;
    size?: number;
    sort?: GetAllMissedEmailsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
    inboxId?: string;
}

export interface GetAllUnknownMissedEmailsRequest {
    page?: number;
    size?: number;
    sort?: GetAllUnknownMissedEmailsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
    inboxId?: string;
}

export interface GetMissedEmailRequest {
    missedEmailId: string;
}

export interface WaitForNthMissedEmailRequest {
    index: number;
    inboxId?: string;
    timeout?: number;
    since?: Date;
    before?: Date;
}

/**
 * MissedEmailControllerApi - interface
 * 
 * @export
 * @interface MissedEmailControllerApiInterface
 */
export interface MissedEmailControllerApiInterface {
    /**
     * 
     * @summary Get all MissedEmails in paginated format
     * @param {number} [page] Optional page index in list pagination
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {string} [inboxId] Optional inbox ID filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MissedEmailControllerApiInterface
     */
    getAllMissedEmailsRaw(requestParameters: GetAllMissedEmailsRequest): Promise<runtime.ApiResponse<PageMissedEmailProjection>>;

    /**
     * Get all MissedEmails in paginated format
     */
    getAllMissedEmails(requestParameters: GetAllMissedEmailsRequest): Promise<PageMissedEmailProjection>;

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * @summary Get all unknown missed emails in paginated format
     * @param {number} [page] Optional page index in list pagination
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {string} [inboxId] Optional inbox ID filter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MissedEmailControllerApiInterface
     */
    getAllUnknownMissedEmailsRaw(requestParameters: GetAllUnknownMissedEmailsRequest): Promise<runtime.ApiResponse<PageUnknownMissedEmailProjection>>;

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     */
    getAllUnknownMissedEmails(requestParameters: GetAllUnknownMissedEmailsRequest): Promise<PageUnknownMissedEmailProjection>;

    /**
     * 
     * @summary Get MissedEmail
     * @param {string} missedEmailId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MissedEmailControllerApiInterface
     */
    getMissedEmailRaw(requestParameters: GetMissedEmailRequest): Promise<runtime.ApiResponse<MissedEmail>>;

    /**
     * Get MissedEmail
     */
    getMissedEmail(requestParameters: GetMissedEmailRequest): Promise<MissedEmail>;

    /**
     * Wait for 0 based index missed email
     * @summary Wait for Nth missed email
     * @param {number} index Zero based index of the email to wait for. If 1 missed email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param {string} [inboxId] Optional inbox ID filter
     * @param {number} [timeout] Optional timeout milliseconds
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MissedEmailControllerApiInterface
     */
    waitForNthMissedEmailRaw(requestParameters: WaitForNthMissedEmailRequest): Promise<runtime.ApiResponse<MissedEmail>>;

    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     */
    waitForNthMissedEmail(requestParameters: WaitForNthMissedEmailRequest): Promise<MissedEmail>;

}

/**
 * 
 */
export class MissedEmailControllerApi extends runtime.BaseAPI implements MissedEmailControllerApiInterface {

    /**
     * Get all MissedEmails in paginated format
     */
    async getAllMissedEmailsRaw(requestParameters: GetAllMissedEmailsRequest): Promise<runtime.ApiResponse<PageMissedEmailProjection>> {
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

        if (requestParameters.searchFilter !== undefined) {
            queryParameters['searchFilter'] = requestParameters.searchFilter;
        }

        if (requestParameters.since !== undefined) {
            queryParameters['since'] = (requestParameters.since as any).toISOString();
        }

        if (requestParameters.before !== undefined) {
            queryParameters['before'] = (requestParameters.before as any).toISOString();
        }

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/missed-emails`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageMissedEmailProjectionFromJSON(jsonValue));
    }

    /**
     * Get all MissedEmails in paginated format
     */
    async getAllMissedEmails(requestParameters: GetAllMissedEmailsRequest): Promise<PageMissedEmailProjection> {
        const response = await this.getAllMissedEmailsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     */
    async getAllUnknownMissedEmailsRaw(requestParameters: GetAllUnknownMissedEmailsRequest): Promise<runtime.ApiResponse<PageUnknownMissedEmailProjection>> {
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

        if (requestParameters.searchFilter !== undefined) {
            queryParameters['searchFilter'] = requestParameters.searchFilter;
        }

        if (requestParameters.since !== undefined) {
            queryParameters['since'] = (requestParameters.since as any).toISOString();
        }

        if (requestParameters.before !== undefined) {
            queryParameters['before'] = (requestParameters.before as any).toISOString();
        }

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/missed-emails/unknown`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageUnknownMissedEmailProjectionFromJSON(jsonValue));
    }

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     */
    async getAllUnknownMissedEmails(requestParameters: GetAllUnknownMissedEmailsRequest): Promise<PageUnknownMissedEmailProjection> {
        const response = await this.getAllUnknownMissedEmailsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get MissedEmail
     */
    async getMissedEmailRaw(requestParameters: GetMissedEmailRequest): Promise<runtime.ApiResponse<MissedEmail>> {
        if (requestParameters.missedEmailId === null || requestParameters.missedEmailId === undefined) {
            throw new runtime.RequiredError('missedEmailId','Required parameter requestParameters.missedEmailId was null or undefined when calling getMissedEmail.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/missed-emails/{missedEmailId}`.replace(`{${"missedEmailId"}}`, encodeURIComponent(String(requestParameters.missedEmailId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MissedEmailFromJSON(jsonValue));
    }

    /**
     * Get MissedEmail
     */
    async getMissedEmail(requestParameters: GetMissedEmailRequest): Promise<MissedEmail> {
        const response = await this.getMissedEmailRaw(requestParameters);
        return await response.value();
    }

    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     */
    async waitForNthMissedEmailRaw(requestParameters: WaitForNthMissedEmailRequest): Promise<runtime.ApiResponse<MissedEmail>> {
        if (requestParameters.index === null || requestParameters.index === undefined) {
            throw new runtime.RequiredError('index','Required parameter requestParameters.index was null or undefined when calling waitForNthMissedEmail.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        if (requestParameters.timeout !== undefined) {
            queryParameters['timeout'] = requestParameters.timeout;
        }

        if (requestParameters.index !== undefined) {
            queryParameters['index'] = requestParameters.index;
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
            path: `/missed-emails/waitForNthMissedEmail`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MissedEmailFromJSON(jsonValue));
    }

    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     */
    async waitForNthMissedEmail(requestParameters: WaitForNthMissedEmailRequest): Promise<MissedEmail> {
        const response = await this.waitForNthMissedEmailRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAllMissedEmailsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAllUnknownMissedEmailsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
