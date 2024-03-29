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
    CreateInboxRulesetOptions,
    CreateInboxRulesetOptionsFromJSON,
    CreateInboxRulesetOptionsToJSON,
    InboxRulesetDto,
    InboxRulesetDtoFromJSON,
    InboxRulesetDtoToJSON,
    InboxRulesetTestOptions,
    InboxRulesetTestOptionsFromJSON,
    InboxRulesetTestOptionsToJSON,
    InboxRulesetTestResult,
    InboxRulesetTestResultFromJSON,
    InboxRulesetTestResultToJSON,
    PageInboxRulesetDto,
    PageInboxRulesetDtoFromJSON,
    PageInboxRulesetDtoToJSON,
    TestNewInboxRulesetOptions,
    TestNewInboxRulesetOptionsFromJSON,
    TestNewInboxRulesetOptionsToJSON,
} from '../models';

export interface CreateNewInboxRulesetRequest {
    inboxId: string;
    createInboxRulesetOptions: CreateInboxRulesetOptions;
}

export interface DeleteInboxRulesetRequest {
    id: string;
}

export interface DeleteInboxRulesetsRequest {
    inboxId?: string;
}

export interface GetInboxRulesetRequest {
    id: string;
}

export interface GetInboxRulesetsRequest {
    inboxId?: string;
    page?: number;
    size?: number;
    sort?: GetInboxRulesetsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}

export interface TestInboxRulesetRequest {
    id: string;
    inboxRulesetTestOptions: InboxRulesetTestOptions;
}

export interface TestInboxRulesetsForInboxRequest {
    inboxId: string;
    inboxRulesetTestOptions: InboxRulesetTestOptions;
}

export interface TestNewInboxRulesetRequest {
    testNewInboxRulesetOptions: TestNewInboxRulesetOptions;
}

/**
 * InboxRulesetControllerApi - interface
 * 
 * @export
 * @interface InboxRulesetControllerApiInterface
 */
export interface InboxRulesetControllerApiInterface {
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * @summary Create an inbox ruleset
     * @param {string} inboxId Inbox id to attach ruleset to
     * @param {CreateInboxRulesetOptions} createInboxRulesetOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    createNewInboxRulesetRaw(requestParameters: CreateNewInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetDto>>;

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     */
    createNewInboxRuleset(requestParameters: CreateNewInboxRulesetRequest): Promise<InboxRulesetDto>;

    /**
     * Delete inbox ruleset
     * @summary Delete an inbox ruleset
     * @param {string} id ID of inbox ruleset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    deleteInboxRulesetRaw(requestParameters: DeleteInboxRulesetRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     */
    deleteInboxRuleset(requestParameters: DeleteInboxRulesetRequest): Promise<void>;

    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * @summary Delete inbox rulesets
     * @param {string} [inboxId] Optional inbox id to attach ruleset to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    deleteInboxRulesetsRaw(requestParameters: DeleteInboxRulesetsRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     */
    deleteInboxRulesets(requestParameters: DeleteInboxRulesetsRequest): Promise<void>;

    /**
     * Get inbox ruleset
     * @summary Get an inbox ruleset
     * @param {string} id ID of inbox ruleset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    getInboxRulesetRaw(requestParameters: GetInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetDto>>;

    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     */
    getInboxRuleset(requestParameters: GetInboxRulesetRequest): Promise<InboxRulesetDto>;

    /**
     * List all rulesets attached to an inbox
     * @summary List inbox rulesets
     * @param {string} [inboxId] Optional inbox id to get rulesets from
     * @param {number} [page] Optional page index in inbox ruleset list pagination
     * @param {number} [size] Optional page size in inbox ruleset list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    getInboxRulesetsRaw(requestParameters: GetInboxRulesetsRequest): Promise<runtime.ApiResponse<PageInboxRulesetDto>>;

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     */
    getInboxRulesets(requestParameters: GetInboxRulesetsRequest): Promise<PageInboxRulesetDto>;

    /**
     * Test an inbox ruleset
     * @summary Test an inbox ruleset
     * @param {string} id ID of inbox ruleset
     * @param {InboxRulesetTestOptions} inboxRulesetTestOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    testInboxRulesetRaw(requestParameters: TestInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetTestResult>>;

    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     */
    testInboxRuleset(requestParameters: TestInboxRulesetRequest): Promise<InboxRulesetTestResult>;

    /**
     * Test inbox rulesets for inbox
     * @summary Test inbox rulesets for inbox
     * @param {string} inboxId ID of inbox
     * @param {InboxRulesetTestOptions} inboxRulesetTestOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    testInboxRulesetsForInboxRaw(requestParameters: TestInboxRulesetsForInboxRequest): Promise<runtime.ApiResponse<InboxRulesetTestResult>>;

    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     */
    testInboxRulesetsForInbox(requestParameters: TestInboxRulesetsForInboxRequest): Promise<InboxRulesetTestResult>;

    /**
     * Test new inbox ruleset
     * @summary Test new inbox ruleset
     * @param {TestNewInboxRulesetOptions} testNewInboxRulesetOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboxRulesetControllerApiInterface
     */
    testNewInboxRulesetRaw(requestParameters: TestNewInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetTestResult>>;

    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     */
    testNewInboxRuleset(requestParameters: TestNewInboxRulesetRequest): Promise<InboxRulesetTestResult>;

}

/**
 * 
 */
export class InboxRulesetControllerApi extends runtime.BaseAPI implements InboxRulesetControllerApiInterface {

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     */
    async createNewInboxRulesetRaw(requestParameters: CreateNewInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetDto>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling createNewInboxRuleset.');
        }

        if (requestParameters.createInboxRulesetOptions === null || requestParameters.createInboxRulesetOptions === undefined) {
            throw new runtime.RequiredError('createInboxRulesetOptions','Required parameter requestParameters.createInboxRulesetOptions was null or undefined when calling createNewInboxRuleset.');
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
            path: `/rulesets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateInboxRulesetOptionsToJSON(requestParameters.createInboxRulesetOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxRulesetDtoFromJSON(jsonValue));
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     */
    async createNewInboxRuleset(requestParameters: CreateNewInboxRulesetRequest): Promise<InboxRulesetDto> {
        const response = await this.createNewInboxRulesetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     */
    async deleteInboxRulesetRaw(requestParameters: DeleteInboxRulesetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteInboxRuleset.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/rulesets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     */
    async deleteInboxRuleset(requestParameters: DeleteInboxRulesetRequest): Promise<void> {
        await this.deleteInboxRulesetRaw(requestParameters);
    }

    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     */
    async deleteInboxRulesetsRaw(requestParameters: DeleteInboxRulesetsRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/rulesets`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     */
    async deleteInboxRulesets(requestParameters: DeleteInboxRulesetsRequest): Promise<void> {
        await this.deleteInboxRulesetsRaw(requestParameters);
    }

    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     */
    async getInboxRulesetRaw(requestParameters: GetInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getInboxRuleset.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/rulesets/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxRulesetDtoFromJSON(jsonValue));
    }

    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     */
    async getInboxRuleset(requestParameters: GetInboxRulesetRequest): Promise<InboxRulesetDto> {
        const response = await this.getInboxRulesetRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     */
    async getInboxRulesetsRaw(requestParameters: GetInboxRulesetsRequest): Promise<runtime.ApiResponse<PageInboxRulesetDto>> {
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
            path: `/rulesets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageInboxRulesetDtoFromJSON(jsonValue));
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     */
    async getInboxRulesets(requestParameters: GetInboxRulesetsRequest): Promise<PageInboxRulesetDto> {
        const response = await this.getInboxRulesetsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     */
    async testInboxRulesetRaw(requestParameters: TestInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetTestResult>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling testInboxRuleset.');
        }

        if (requestParameters.inboxRulesetTestOptions === null || requestParameters.inboxRulesetTestOptions === undefined) {
            throw new runtime.RequiredError('inboxRulesetTestOptions','Required parameter requestParameters.inboxRulesetTestOptions was null or undefined when calling testInboxRuleset.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/rulesets/{id}/test`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InboxRulesetTestOptionsToJSON(requestParameters.inboxRulesetTestOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxRulesetTestResultFromJSON(jsonValue));
    }

    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     */
    async testInboxRuleset(requestParameters: TestInboxRulesetRequest): Promise<InboxRulesetTestResult> {
        const response = await this.testInboxRulesetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     */
    async testInboxRulesetsForInboxRaw(requestParameters: TestInboxRulesetsForInboxRequest): Promise<runtime.ApiResponse<InboxRulesetTestResult>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling testInboxRulesetsForInbox.');
        }

        if (requestParameters.inboxRulesetTestOptions === null || requestParameters.inboxRulesetTestOptions === undefined) {
            throw new runtime.RequiredError('inboxRulesetTestOptions','Required parameter requestParameters.inboxRulesetTestOptions was null or undefined when calling testInboxRulesetsForInbox.');
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
            path: `/rulesets`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: InboxRulesetTestOptionsToJSON(requestParameters.inboxRulesetTestOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxRulesetTestResultFromJSON(jsonValue));
    }

    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     */
    async testInboxRulesetsForInbox(requestParameters: TestInboxRulesetsForInboxRequest): Promise<InboxRulesetTestResult> {
        const response = await this.testInboxRulesetsForInboxRaw(requestParameters);
        return await response.value();
    }

    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     */
    async testNewInboxRulesetRaw(requestParameters: TestNewInboxRulesetRequest): Promise<runtime.ApiResponse<InboxRulesetTestResult>> {
        if (requestParameters.testNewInboxRulesetOptions === null || requestParameters.testNewInboxRulesetOptions === undefined) {
            throw new runtime.RequiredError('testNewInboxRulesetOptions','Required parameter requestParameters.testNewInboxRulesetOptions was null or undefined when calling testNewInboxRuleset.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/rulesets`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TestNewInboxRulesetOptionsToJSON(requestParameters.testNewInboxRulesetOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxRulesetTestResultFromJSON(jsonValue));
    }

    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     */
    async testNewInboxRuleset(requestParameters: TestNewInboxRulesetRequest): Promise<InboxRulesetTestResult> {
        const response = await this.testNewInboxRulesetRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetInboxRulesetsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
