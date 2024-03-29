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
    CreateInboxForwarderOptions,
    CreateInboxForwarderOptionsFromJSON,
    CreateInboxForwarderOptionsToJSON,
    InboxForwarderDto,
    InboxForwarderDtoFromJSON,
    InboxForwarderDtoToJSON,
    InboxForwarderTestOptions,
    InboxForwarderTestOptionsFromJSON,
    InboxForwarderTestOptionsToJSON,
    InboxForwarderTestResult,
    InboxForwarderTestResultFromJSON,
    InboxForwarderTestResultToJSON,
    PageInboxForwarderDto,
    PageInboxForwarderDtoFromJSON,
    PageInboxForwarderDtoToJSON,
    TestNewInboxForwarderOptions,
    TestNewInboxForwarderOptionsFromJSON,
    TestNewInboxForwarderOptionsToJSON,
} from '../models';

export interface CreateNewInboxForwarderRequest {
    inboxId: string;
    createInboxForwarderOptions: CreateInboxForwarderOptions;
}

export interface DeleteInboxForwarderRequest {
    id: string;
}

export interface DeleteInboxForwardersRequest {
    inboxId?: string;
}

export interface GetInboxForwarderRequest {
    id: string;
}

export interface GetInboxForwardersRequest {
    inboxId?: string;
    page?: number;
    size?: number;
    sort?: GetInboxForwardersSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}

export interface TestInboxForwarderRequest {
    id: string;
    inboxForwarderTestOptions: InboxForwarderTestOptions;
}

export interface TestInboxForwardersForInboxRequest {
    inboxId: string;
    inboxForwarderTestOptions: InboxForwarderTestOptions;
}

export interface TestNewInboxForwarderRequest {
    testNewInboxForwarderOptions: TestNewInboxForwarderOptions;
}

/**
 * InboxForwarderControllerApi - interface
 * 
 * @export
 * @interface InboxForwarderControllerApiInterface
 */
export interface InboxForwarderControllerApiInterface {
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * @summary Create an inbox forwarder
     * @param {string} inboxId Inbox id to attach forwarder to
     * @param {CreateInboxForwarderOptions} createInboxForwarderOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    createNewInboxForwarderRaw(requestParameters: CreateNewInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderDto>>;

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     */
    createNewInboxForwarder(requestParameters: CreateNewInboxForwarderRequest): Promise<InboxForwarderDto>;

    /**
     * Delete inbox forwarder
     * @summary Delete an inbox forwarder
     * @param {string} id ID of inbox forwarder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    deleteInboxForwarderRaw(requestParameters: DeleteInboxForwarderRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     */
    deleteInboxForwarder(requestParameters: DeleteInboxForwarderRequest): Promise<void>;

    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * @summary Delete inbox forwarders
     * @param {string} [inboxId] Optional inbox id to attach forwarder to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    deleteInboxForwardersRaw(requestParameters: DeleteInboxForwardersRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     */
    deleteInboxForwarders(requestParameters: DeleteInboxForwardersRequest): Promise<void>;

    /**
     * Get inbox ruleset
     * @summary Get an inbox forwarder
     * @param {string} id ID of inbox forwarder
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    getInboxForwarderRaw(requestParameters: GetInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderDto>>;

    /**
     * Get inbox ruleset
     * Get an inbox forwarder
     */
    getInboxForwarder(requestParameters: GetInboxForwarderRequest): Promise<InboxForwarderDto>;

    /**
     * List all forwarders attached to an inbox
     * @summary List inbox forwarders
     * @param {string} [inboxId] Optional inbox id to get forwarders from
     * @param {number} [page] Optional page index in inbox forwarder list pagination
     * @param {number} [size] Optional page size in inbox forwarder list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    getInboxForwardersRaw(requestParameters: GetInboxForwardersRequest): Promise<runtime.ApiResponse<PageInboxForwarderDto>>;

    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     */
    getInboxForwarders(requestParameters: GetInboxForwardersRequest): Promise<PageInboxForwarderDto>;

    /**
     * Test an inbox forwarder
     * @summary Test an inbox forwarder
     * @param {string} id ID of inbox forwarder
     * @param {InboxForwarderTestOptions} inboxForwarderTestOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    testInboxForwarderRaw(requestParameters: TestInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderTestResult>>;

    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     */
    testInboxForwarder(requestParameters: TestInboxForwarderRequest): Promise<InboxForwarderTestResult>;

    /**
     * Test inbox forwarders for inbox
     * @summary Test inbox forwarders for inbox
     * @param {string} inboxId ID of inbox
     * @param {InboxForwarderTestOptions} inboxForwarderTestOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    testInboxForwardersForInboxRaw(requestParameters: TestInboxForwardersForInboxRequest): Promise<runtime.ApiResponse<InboxForwarderTestResult>>;

    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     */
    testInboxForwardersForInbox(requestParameters: TestInboxForwardersForInboxRequest): Promise<InboxForwarderTestResult>;

    /**
     * Test new inbox forwarder
     * @summary Test new inbox forwarder
     * @param {TestNewInboxForwarderOptions} testNewInboxForwarderOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxForwarderControllerApiInterface
     */
    testNewInboxForwarderRaw(requestParameters: TestNewInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderTestResult>>;

    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     */
    testNewInboxForwarder(requestParameters: TestNewInboxForwarderRequest): Promise<InboxForwarderTestResult>;

}

/**
 * 
 */
export class InboxForwarderControllerApi extends runtime.BaseAPI implements InboxForwarderControllerApiInterface {

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     */
    async createNewInboxForwarderRaw(requestParameters: CreateNewInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderDto>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling createNewInboxForwarder.');
        }

        if (requestParameters.createInboxForwarderOptions === null || requestParameters.createInboxForwarderOptions === undefined) {
            throw new runtime.RequiredError('createInboxForwarderOptions','Required parameter requestParameters.createInboxForwarderOptions was null or undefined when calling createNewInboxForwarder.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/forwarders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateInboxForwarderOptionsToJSON(requestParameters.createInboxForwarderOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxForwarderDtoFromJSON(jsonValue));
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     */
    async createNewInboxForwarder(requestParameters: CreateNewInboxForwarderRequest): Promise<InboxForwarderDto> {
        const response = await this.createNewInboxForwarderRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     */
    async deleteInboxForwarderRaw(requestParameters: DeleteInboxForwarderRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteInboxForwarder.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/forwarders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     */
    async deleteInboxForwarder(requestParameters: DeleteInboxForwarderRequest): Promise<void> {
        await this.deleteInboxForwarderRaw(requestParameters);
    }

    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     */
    async deleteInboxForwardersRaw(requestParameters: DeleteInboxForwardersRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/forwarders`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     */
    async deleteInboxForwarders(requestParameters: DeleteInboxForwardersRequest): Promise<void> {
        await this.deleteInboxForwardersRaw(requestParameters);
    }

    /**
     * Get inbox ruleset
     * Get an inbox forwarder
     */
    async getInboxForwarderRaw(requestParameters: GetInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getInboxForwarder.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/forwarders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxForwarderDtoFromJSON(jsonValue));
    }

    /**
     * Get inbox ruleset
     * Get an inbox forwarder
     */
    async getInboxForwarder(requestParameters: GetInboxForwarderRequest): Promise<InboxForwarderDto> {
        const response = await this.getInboxForwarderRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     */
    async getInboxForwardersRaw(requestParameters: GetInboxForwardersRequest): Promise<runtime.ApiResponse<PageInboxForwarderDto>> {
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
            path: `/forwarders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageInboxForwarderDtoFromJSON(jsonValue));
    }

    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     */
    async getInboxForwarders(requestParameters: GetInboxForwardersRequest): Promise<PageInboxForwarderDto> {
        const response = await this.getInboxForwardersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     */
    async testInboxForwarderRaw(requestParameters: TestInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderTestResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling testInboxForwarder.');
        }

        if (requestParameters.inboxForwarderTestOptions === null || requestParameters.inboxForwarderTestOptions === undefined) {
            throw new runtime.RequiredError('inboxForwarderTestOptions','Required parameter requestParameters.inboxForwarderTestOptions was null or undefined when calling testInboxForwarder.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/forwarders/{id}/test`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InboxForwarderTestOptionsToJSON(requestParameters.inboxForwarderTestOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxForwarderTestResultFromJSON(jsonValue));
    }

    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     */
    async testInboxForwarder(requestParameters: TestInboxForwarderRequest): Promise<InboxForwarderTestResult> {
        const response = await this.testInboxForwarderRaw(requestParameters);
        return await response.value();
    }

    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     */
    async testInboxForwardersForInboxRaw(requestParameters: TestInboxForwardersForInboxRequest): Promise<runtime.ApiResponse<InboxForwarderTestResult>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling testInboxForwardersForInbox.');
        }

        if (requestParameters.inboxForwarderTestOptions === null || requestParameters.inboxForwarderTestOptions === undefined) {
            throw new runtime.RequiredError('inboxForwarderTestOptions','Required parameter requestParameters.inboxForwarderTestOptions was null or undefined when calling testInboxForwardersForInbox.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/forwarders`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InboxForwarderTestOptionsToJSON(requestParameters.inboxForwarderTestOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxForwarderTestResultFromJSON(jsonValue));
    }

    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     */
    async testInboxForwardersForInbox(requestParameters: TestInboxForwardersForInboxRequest): Promise<InboxForwarderTestResult> {
        const response = await this.testInboxForwardersForInboxRaw(requestParameters);
        return await response.value();
    }

    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     */
    async testNewInboxForwarderRaw(requestParameters: TestNewInboxForwarderRequest): Promise<runtime.ApiResponse<InboxForwarderTestResult>> {
        if (requestParameters.testNewInboxForwarderOptions === null || requestParameters.testNewInboxForwarderOptions === undefined) {
            throw new runtime.RequiredError('testNewInboxForwarderOptions','Required parameter requestParameters.testNewInboxForwarderOptions was null or undefined when calling testNewInboxForwarder.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/forwarders`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TestNewInboxForwarderOptionsToJSON(requestParameters.testNewInboxForwarderOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxForwarderTestResultFromJSON(jsonValue));
    }

    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     */
    async testNewInboxForwarder(requestParameters: TestNewInboxForwarderRequest): Promise<InboxForwarderTestResult> {
        const response = await this.testNewInboxForwarderRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetInboxForwardersSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
