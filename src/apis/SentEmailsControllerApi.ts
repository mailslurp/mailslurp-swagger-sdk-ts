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
    PageSentEmailProjection,
    PageSentEmailProjectionFromJSON,
    PageSentEmailProjectionToJSON,
    PageTrackingPixelProjection,
    PageTrackingPixelProjectionFromJSON,
    PageTrackingPixelProjectionToJSON,
    SentEmailDto,
    SentEmailDtoFromJSON,
    SentEmailDtoToJSON,
} from '../models';

export interface DeleteSentEmailRequest {
    id: string;
}

export interface GetAllSentTrackingPixelsRequest {
    page?: number;
    size?: number;
    sort?: GetAllSentTrackingPixelsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}

export interface GetSentEmailRequest {
    id: string;
}

export interface GetSentEmailHTMLContentRequest {
    id: string;
}

export interface GetSentEmailTrackingPixelsRequest {
    id: string;
    page?: number;
    size?: number;
    sort?: GetSentEmailTrackingPixelsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}

export interface GetSentEmailsRequest {
    inboxId?: string;
    page?: number;
    size?: number;
    sort?: GetSentEmailsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}

export interface GetSentOrganizationEmailsRequest {
    inboxId?: string;
    page?: number;
    size?: number;
    sort?: GetSentOrganizationEmailsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
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
     * @summary Delete all sent email receipts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    deleteAllSentEmailsRaw(): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete all sent email receipts
     */
    deleteAllSentEmails(): Promise<void>;

    /**
     * 
     * @summary Delete sent email receipt
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    deleteSentEmailRaw(requestParameters: DeleteSentEmailRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete sent email receipt
     */
    deleteSentEmail(requestParameters: DeleteSentEmailRequest): Promise<void>;

    /**
     * Get all sent email tracking pixels in paginated form
     * @param {number} [page] Optional page index in sent email tracking pixel list pagination
     * @param {number} [size] Optional page size in sent email tracking pixel list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    getAllSentTrackingPixelsRaw(requestParameters: GetAllSentTrackingPixelsRequest): Promise<runtime.ApiResponse<PageTrackingPixelProjection>>;

    /**
     * Get all sent email tracking pixels in paginated form
     */
    getAllSentTrackingPixels(requestParameters: GetAllSentTrackingPixelsRequest): Promise<PageTrackingPixelProjection>;

    /**
     * 
     * @summary Get sent email receipt
     * @param {string} id 
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
     * @summary Get sent email HTML content
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    getSentEmailHTMLContentRaw(requestParameters: GetSentEmailHTMLContentRequest): Promise<runtime.ApiResponse<string>>;

    /**
     * Get sent email HTML content
     */
    getSentEmailHTMLContent(requestParameters: GetSentEmailHTMLContentRequest): Promise<string>;

    /**
     * Get all tracking pixels for a sent email in paginated form
     * @param {string} id 
     * @param {number} [page] Optional page index in sent email tracking pixel list pagination
     * @param {number} [size] Optional page size in sent email tracking pixel list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SentEmailsControllerApiInterface
     */
    getSentEmailTrackingPixelsRaw(requestParameters: GetSentEmailTrackingPixelsRequest): Promise<runtime.ApiResponse<PageTrackingPixelProjection>>;

    /**
     * Get all tracking pixels for a sent email in paginated form
     */
    getSentEmailTrackingPixels(requestParameters: GetSentEmailTrackingPixelsRequest): Promise<PageTrackingPixelProjection>;

    /**
     * 
     * @summary Get all sent emails in paginated form
     * @param {string} [inboxId] Optional inboxId to filter sender of sent emails by
     * @param {number} [page] Optional page index in inbox sent email list pagination
     * @param {number} [size] Optional page size in inbox sent email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
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
     * Get all sent organization emails in paginated form
     * @param {string} [inboxId] Optional inboxId to filter sender of sent emails by
     * @param {number} [page] Optional page index in sent email list pagination
     * @param {number} [size] Optional page size in sent email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
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
     * Delete all sent email receipts
     */
    async deleteAllSentEmailsRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sent`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete all sent email receipts
     */
    async deleteAllSentEmails(): Promise<void> {
        await this.deleteAllSentEmailsRaw();
    }

    /**
     * Delete sent email receipt
     */
    async deleteSentEmailRaw(requestParameters: DeleteSentEmailRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteSentEmail.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sent/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete sent email receipt
     */
    async deleteSentEmail(requestParameters: DeleteSentEmailRequest): Promise<void> {
        await this.deleteSentEmailRaw(requestParameters);
    }

    /**
     * Get all sent email tracking pixels in paginated form
     */
    async getAllSentTrackingPixelsRaw(requestParameters: GetAllSentTrackingPixelsRequest): Promise<runtime.ApiResponse<PageTrackingPixelProjection>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sent/tracking-pixels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageTrackingPixelProjectionFromJSON(jsonValue));
    }

    /**
     * Get all sent email tracking pixels in paginated form
     */
    async getAllSentTrackingPixels(requestParameters: GetAllSentTrackingPixelsRequest): Promise<PageTrackingPixelProjection> {
        const response = await this.getAllSentTrackingPixelsRaw(requestParameters);
        return await response.value();
    }

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
     * Get sent email HTML content
     */
    async getSentEmailHTMLContentRaw(requestParameters: GetSentEmailHTMLContentRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSentEmailHTMLContent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sent/{id}/html`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get sent email HTML content
     */
    async getSentEmailHTMLContent(requestParameters: GetSentEmailHTMLContentRequest): Promise<string> {
        const response = await this.getSentEmailHTMLContentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all tracking pixels for a sent email in paginated form
     */
    async getSentEmailTrackingPixelsRaw(requestParameters: GetSentEmailTrackingPixelsRequest): Promise<runtime.ApiResponse<PageTrackingPixelProjection>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSentEmailTrackingPixels.');
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

        if (requestParameters.searchFilter !== undefined) {
            queryParameters['searchFilter'] = requestParameters.searchFilter;
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
            path: `/sent/{id}/tracking-pixels`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageTrackingPixelProjectionFromJSON(jsonValue));
    }

    /**
     * Get all tracking pixels for a sent email in paginated form
     */
    async getSentEmailTrackingPixels(requestParameters: GetSentEmailTrackingPixelsRequest): Promise<PageTrackingPixelProjection> {
        const response = await this.getSentEmailTrackingPixelsRaw(requestParameters);
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
export enum GetAllSentTrackingPixelsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetSentEmailTrackingPixelsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
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
