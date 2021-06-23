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
    PageSentEmailProjection,
    PageSentEmailProjectionFromJSON,
    PageSentEmailProjectionToJSON,
    SentEmailDto,
    SentEmailDtoFromJSON,
    SentEmailDtoToJSON,
} from '../models';

export interface GetSentEmailRequest {
    id: string;
}

export interface GetSentEmailsRequest {
    inboxId?: string;
    page?: number;
    searchFilter?: string;
    size?: number;
    sort?: GetSentEmailsSortEnum;
}

export interface GetSentOrganizationEmailsRequest {
    inboxId?: string;
    page?: number;
    searchFilter?: string;
    size?: number;
    sort?: GetSentOrganizationEmailsSortEnum;
}

/**
 * SentEmailsControllerApi - interface
 * 
 * @export
 * @interface SentEmailsControllerApiInterface
 */
export interface SentEmailsControllerApiInterface {
    /**
     * 
     * @summary Get sent email receipt
     * @param {string} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    getSentEmailRaw(requestParameters: GetSentEmailRequest): Promise<runtime.ApiResponse<SentEmailDto>>;

    /**
     * Get sent email receipt
     */
    getSentEmail(requestParameters: GetSentEmailRequest): Promise<SentEmailDto>;

    /**
     * 
     * @summary Get all sent emails in paginated form
     * @param {string} [inboxId] Optional inboxId to filter sender of sent emails by
     * @param {number} [page] Optional page index in inbox sent email list pagination
     * @param {string} [searchFilter] Optional search filter
     * @param {number} [size] Optional page size in inbox sent email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    getSentEmailsRaw(requestParameters: GetSentEmailsRequest): Promise<runtime.ApiResponse<PageSentEmailProjection>>;

    /**
     * Get all sent emails in paginated form
     */
    getSentEmails(requestParameters: GetSentEmailsRequest): Promise<PageSentEmailProjection>;

    /**
     * 
     * @summary Get all sent organization emails in paginated form
     * @param {string} [inboxId] Optional inboxId to filter sender of sent emails by
     * @param {number} [page] Optional page index in inbox sent email list pagination
     * @param {string} [searchFilter] Optional search filter
     * @param {number} [size] Optional page size in inbox sent email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    getSentOrganizationEmailsRaw(requestParameters: GetSentOrganizationEmailsRequest): Promise<runtime.ApiResponse<PageSentEmailProjection>>;

    /**
     * Get all sent organization emails in paginated form
     */
    getSentOrganizationEmails(requestParameters: GetSentOrganizationEmailsRequest): Promise<PageSentEmailProjection>;

}

/**
 * 
 */
export class SentEmailsControllerApi extends runtime.BaseAPI implements SentEmailsControllerApiInterface {

    /**
     * Get sent email receipt
     */
    async getSentEmailRaw(requestParameters: GetSentEmailRequest): Promise<runtime.ApiResponse<SentEmailDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSentEmail.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sent/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SentEmailDtoFromJSON(jsonValue));
    }

    /**
     * Get sent email receipt
     */
    async getSentEmail(requestParameters: GetSentEmailRequest): Promise<SentEmailDto> {
        const response = await this.getSentEmailRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all sent emails in paginated form
     */
    async getSentEmailsRaw(requestParameters: GetSentEmailsRequest): Promise<runtime.ApiResponse<PageSentEmailProjection>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.searchFilter !== undefined) {
            queryParameters['searchFilter'] = requestParameters.searchFilter;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sent`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageSentEmailProjectionFromJSON(jsonValue));
    }

    /**
     * Get all sent emails in paginated form
     */
    async getSentEmails(requestParameters: GetSentEmailsRequest): Promise<PageSentEmailProjection> {
        const response = await this.getSentEmailsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all sent organization emails in paginated form
     */
    async getSentOrganizationEmailsRaw(requestParameters: GetSentOrganizationEmailsRequest): Promise<runtime.ApiResponse<PageSentEmailProjection>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.searchFilter !== undefined) {
            queryParameters['searchFilter'] = requestParameters.searchFilter;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sent/organization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageSentEmailProjectionFromJSON(jsonValue));
    }

    /**
     * Get all sent organization emails in paginated form
     */
    async getSentOrganizationEmails(requestParameters: GetSentOrganizationEmailsRequest): Promise<PageSentEmailProjection> {
        const response = await this.getSentOrganizationEmailsRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetSentEmailsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetSentOrganizationEmailsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
