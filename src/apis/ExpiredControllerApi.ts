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
    ExpirationDefaults,
    ExpirationDefaultsFromJSON,
    ExpirationDefaultsToJSON,
    ExpiredInboxDto,
    ExpiredInboxDtoFromJSON,
    ExpiredInboxDtoToJSON,
    PageExpiredInboxRecordProjection,
    PageExpiredInboxRecordProjectionFromJSON,
    PageExpiredInboxRecordProjectionToJSON,
} from '../models';

export interface GetExpiredInboxByInboxIdRequest {
    inboxId: string;
}

export interface GetExpiredInboxRecordRequest {
    expiredId: string;
}

export interface GetExpiredInboxesRequest {
    page?: number;
    size?: number;
    sort?: GetExpiredInboxesSortEnum;
}

/**
 * ExpiredControllerApi - interface
 * 
 * @export
 * @interface ExpiredControllerApiInterface
 */
export interface ExpiredControllerApiInterface {
    /**
     * Return default times used for inbox expiration
     * @summary Get default expiration settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpiredControllerApiInterface
     */
    getExpirationDefaultsRaw(): Promise<runtime.ApiResponse<ExpirationDefaults>>;

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    getExpirationDefaults(): Promise<ExpirationDefaults>;

    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * @summary Get expired inbox record for a previously existing inbox
     * @param {string} inboxId ID of inbox you want to retrieve (not the inbox ID)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpiredControllerApiInterface
     */
    getExpiredInboxByInboxIdRaw(requestParameters: GetExpiredInboxByInboxIdRequest): Promise<runtime.ApiResponse<ExpiredInboxDto>>;

    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     */
    getExpiredInboxByInboxId(requestParameters: GetExpiredInboxByInboxIdRequest): Promise<ExpiredInboxDto>;

    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * @summary Get an expired inbox record
     * @param {string} expiredId ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpiredControllerApiInterface
     */
    getExpiredInboxRecordRaw(requestParameters: GetExpiredInboxRecordRequest): Promise<runtime.ApiResponse<ExpiredInboxDto>>;

    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     */
    getExpiredInboxRecord(requestParameters: GetExpiredInboxRecordRequest): Promise<ExpiredInboxDto>;

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * @summary List records of expired inboxes
     * @param {number} [page] Optional page index in inbox sent email list pagination
     * @param {number} [size] Optional page size in inbox sent email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpiredControllerApiInterface
     */
    getExpiredInboxesRaw(requestParameters: GetExpiredInboxesRequest): Promise<runtime.ApiResponse<PageExpiredInboxRecordProjection>>;

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     */
    getExpiredInboxes(requestParameters: GetExpiredInboxesRequest): Promise<PageExpiredInboxRecordProjection>;

}

/**
 * 
 */
export class ExpiredControllerApi extends runtime.BaseAPI implements ExpiredControllerApiInterface {

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    async getExpirationDefaultsRaw(): Promise<runtime.ApiResponse<ExpirationDefaults>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/expired/defaults`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpirationDefaultsFromJSON(jsonValue));
    }

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    async getExpirationDefaults(): Promise<ExpirationDefaults> {
        const response = await this.getExpirationDefaultsRaw();
        return await response.value();
    }

    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     */
    async getExpiredInboxByInboxIdRaw(requestParameters: GetExpiredInboxByInboxIdRequest): Promise<runtime.ApiResponse<ExpiredInboxDto>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling getExpiredInboxByInboxId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/expired/inbox/{inboxId}`.replace(`{${"inboxId"}}`, encodeURIComponent(String(requestParameters.inboxId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpiredInboxDtoFromJSON(jsonValue));
    }

    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     */
    async getExpiredInboxByInboxId(requestParameters: GetExpiredInboxByInboxIdRequest): Promise<ExpiredInboxDto> {
        const response = await this.getExpiredInboxByInboxIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     */
    async getExpiredInboxRecordRaw(requestParameters: GetExpiredInboxRecordRequest): Promise<runtime.ApiResponse<ExpiredInboxDto>> {
        if (requestParameters.expiredId === null || requestParameters.expiredId === undefined) {
            throw new runtime.RequiredError('expiredId','Required parameter requestParameters.expiredId was null or undefined when calling getExpiredInboxRecord.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/expired/{expiredId}`.replace(`{${"expiredId"}}`, encodeURIComponent(String(requestParameters.expiredId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpiredInboxDtoFromJSON(jsonValue));
    }

    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     */
    async getExpiredInboxRecord(requestParameters: GetExpiredInboxRecordRequest): Promise<ExpiredInboxDto> {
        const response = await this.getExpiredInboxRecordRaw(requestParameters);
        return await response.value();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     */
    async getExpiredInboxesRaw(requestParameters: GetExpiredInboxesRequest): Promise<runtime.ApiResponse<PageExpiredInboxRecordProjection>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/expired`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageExpiredInboxRecordProjectionFromJSON(jsonValue));
    }

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     */
    async getExpiredInboxes(requestParameters: GetExpiredInboxesRequest): Promise<PageExpiredInboxRecordProjection> {
        const response = await this.getExpiredInboxesRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetExpiredInboxesSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
