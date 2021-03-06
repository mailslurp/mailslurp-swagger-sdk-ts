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
    AbstractWebhookPayload,
    AbstractWebhookPayloadFromJSON,
    AbstractWebhookPayloadToJSON,
    CreateWebhookOptions,
    CreateWebhookOptionsFromJSON,
    CreateWebhookOptionsToJSON,
    PageWebhookProjection,
    PageWebhookProjectionFromJSON,
    PageWebhookProjectionToJSON,
    PageWebhookResult,
    PageWebhookResultFromJSON,
    PageWebhookResultToJSON,
    WebhookDto,
    WebhookDtoFromJSON,
    WebhookDtoToJSON,
    WebhookEmailOpenedPayload,
    WebhookEmailOpenedPayloadFromJSON,
    WebhookEmailOpenedPayloadToJSON,
    WebhookNewAttachmentPayload,
    WebhookNewAttachmentPayloadFromJSON,
    WebhookNewAttachmentPayloadToJSON,
    WebhookNewContactPayload,
    WebhookNewContactPayloadFromJSON,
    WebhookNewContactPayloadToJSON,
    WebhookNewEmailPayload,
    WebhookNewEmailPayloadFromJSON,
    WebhookNewEmailPayloadToJSON,
    WebhookResultEntity,
    WebhookResultEntityFromJSON,
    WebhookResultEntityToJSON,
    WebhookTestResult,
    WebhookTestResultFromJSON,
    WebhookTestResultToJSON,
} from '../models';

export interface CreateWebhookRequest {
    inboxId: string;
    webhookOptions: CreateWebhookOptions;
}

export interface DeleteWebhookRequest {
    inboxId: string;
    webhookId: string;
}

export interface GetAllWebhookResultsRequest {
    page?: number;
    searchFilter?: string;
    size?: number;
    sort?: GetAllWebhookResultsSortEnum;
}

export interface GetAllWebhooksRequest {
    page?: number;
    searchFilter?: string;
    size?: number;
    sort?: GetAllWebhooksSortEnum;
}

export interface GetInboxWebhooksPaginatedRequest {
    inboxId: string;
    page?: number;
    searchFilter?: string;
    size?: number;
    sort?: GetInboxWebhooksPaginatedSortEnum;
}

export interface GetTestWebhookPayloadRequest {
    eventName?: GetTestWebhookPayloadEventNameEnum;
}

export interface GetWebhookRequest {
    webhookId: string;
}

export interface GetWebhookResultRequest {
    webhookResultId: string;
}

export interface GetWebhookResultsRequest {
    webhookId: string;
    page?: number;
    searchFilter?: string;
    size?: number;
    sort?: GetWebhookResultsSortEnum;
}

export interface GetWebhooksRequest {
    inboxId: string;
}

export interface SendTestDataRequest {
    webhookId: string;
}

/**
 * WebhookControllerApi - interface
 * 
 * @export
 * @interface WebhookControllerApiInterface
 */
export interface WebhookControllerApiInterface {
    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * @summary Attach a WebHook URL to an inbox
     * @param {string} inboxId inboxId
     * @param {CreateWebhookOptions} webhookOptions webhookOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    createWebhookRaw(requestParameters: CreateWebhookRequest): Promise<runtime.ApiResponse<WebhookDto>>;

    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     */
    createWebhook(requestParameters: CreateWebhookRequest): Promise<WebhookDto>;

    /**
     * 
     * @summary Delete and disable a Webhook for an Inbox
     * @param {string} inboxId inboxId
     * @param {string} webhookId webhookId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    deleteWebhookRaw(requestParameters: DeleteWebhookRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete and disable a Webhook for an Inbox
     */
    deleteWebhook(requestParameters: DeleteWebhookRequest): Promise<void>;

    /**
     * 
     * @summary Get results for all webhooks
     * @param {number} [page] Optional page index in list pagination
     * @param {string} [searchFilter] Optional search filter
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getAllWebhookResultsRaw(requestParameters: GetAllWebhookResultsRequest): Promise<runtime.ApiResponse<PageWebhookResult>>;

    /**
     * Get results for all webhooks
     */
    getAllWebhookResults(requestParameters: GetAllWebhookResultsRequest): Promise<PageWebhookResult>;

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * @summary List Webhooks Paginated
     * @param {number} [page] Optional page index in list pagination
     * @param {string} [searchFilter] Optional search filter
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getAllWebhooksRaw(requestParameters: GetAllWebhooksRequest): Promise<runtime.ApiResponse<PageWebhookProjection>>;

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     */
    getAllWebhooks(requestParameters: GetAllWebhooksRequest): Promise<PageWebhookProjection>;

    /**
     * 
     * @summary Get paginated webhooks for an Inbox
     * @param {string} inboxId inboxId
     * @param {number} [page] Optional page index in list pagination
     * @param {string} [searchFilter] Optional search filter
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getInboxWebhooksPaginatedRaw(requestParameters: GetInboxWebhooksPaginatedRequest): Promise<runtime.ApiResponse<PageWebhookProjection>>;

    /**
     * Get paginated webhooks for an Inbox
     */
    getInboxWebhooksPaginated(requestParameters: GetInboxWebhooksPaginatedRequest): Promise<PageWebhookProjection>;

    /**
     * 
     * @summary Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param {'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED'} [eventName] eventName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getTestWebhookPayloadRaw(requestParameters: GetTestWebhookPayloadRequest): Promise<runtime.ApiResponse<AbstractWebhookPayload>>;

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     */
    getTestWebhookPayload(requestParameters: GetTestWebhookPayloadRequest): Promise<AbstractWebhookPayload>;

    /**
     * 
     * @summary Get webhook test payload for email opened event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getTestWebhookPayloadEmailOpenedRaw(): Promise<runtime.ApiResponse<WebhookEmailOpenedPayload>>;

    /**
     * Get webhook test payload for email opened event
     */
    getTestWebhookPayloadEmailOpened(): Promise<WebhookEmailOpenedPayload>;

    /**
     * 
     * @summary Get webhook test payload for new attachment event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getTestWebhookPayloadNewAttachmentRaw(): Promise<runtime.ApiResponse<WebhookNewAttachmentPayload>>;

    /**
     * Get webhook test payload for new attachment event
     */
    getTestWebhookPayloadNewAttachment(): Promise<WebhookNewAttachmentPayload>;

    /**
     * 
     * @summary Get webhook test payload for new contact event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getTestWebhookPayloadNewContactRaw(): Promise<runtime.ApiResponse<WebhookNewContactPayload>>;

    /**
     * Get webhook test payload for new contact event
     */
    getTestWebhookPayloadNewContact(): Promise<WebhookNewContactPayload>;

    /**
     * 
     * @summary Get webhook test payload for new email event
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getTestWebhookPayloadNewEmailRaw(): Promise<runtime.ApiResponse<WebhookNewEmailPayload>>;

    /**
     * Get webhook test payload for new email event
     */
    getTestWebhookPayloadNewEmail(): Promise<WebhookNewEmailPayload>;

    /**
     * 
     * @summary Get a webhook for an Inbox
     * @param {string} webhookId webhookId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getWebhookRaw(requestParameters: GetWebhookRequest): Promise<runtime.ApiResponse<WebhookDto>>;

    /**
     * Get a webhook for an Inbox
     */
    getWebhook(requestParameters: GetWebhookRequest): Promise<WebhookDto>;

    /**
     * 
     * @summary Get a webhook result for a webhook
     * @param {string} webhookResultId Webhook Result ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getWebhookResultRaw(requestParameters: GetWebhookResultRequest): Promise<runtime.ApiResponse<WebhookResultEntity>>;

    /**
     * Get a webhook result for a webhook
     */
    getWebhookResult(requestParameters: GetWebhookResultRequest): Promise<WebhookResultEntity>;

    /**
     * 
     * @summary Get a webhook results for a webhook
     * @param {string} webhookId ID of webhook to get results for
     * @param {number} [page] Optional page index in list pagination
     * @param {string} [searchFilter] Optional search filter
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getWebhookResultsRaw(requestParameters: GetWebhookResultsRequest): Promise<runtime.ApiResponse<PageWebhookResult>>;

    /**
     * Get a webhook results for a webhook
     */
    getWebhookResults(requestParameters: GetWebhookResultsRequest): Promise<PageWebhookResult>;

    /**
     * 
     * @summary Get all webhooks for an Inbox
     * @param {string} inboxId inboxId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    getWebhooksRaw(requestParameters: GetWebhooksRequest): Promise<runtime.ApiResponse<Array<WebhookDto>>>;

    /**
     * Get all webhooks for an Inbox
     */
    getWebhooks(requestParameters: GetWebhooksRequest): Promise<Array<WebhookDto>>;

    /**
     * 
     * @summary Send webhook test data
     * @param {string} webhookId webhookId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookControllerApiInterface
     */
    sendTestDataRaw(requestParameters: SendTestDataRequest): Promise<runtime.ApiResponse<WebhookTestResult>>;

    /**
     * Send webhook test data
     */
    sendTestData(requestParameters: SendTestDataRequest): Promise<WebhookTestResult>;

}

/**
 * 
 */
export class WebhookControllerApi extends runtime.BaseAPI implements WebhookControllerApiInterface {

    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     */
    async createWebhookRaw(requestParameters: CreateWebhookRequest): Promise<runtime.ApiResponse<WebhookDto>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling createWebhook.');
        }

        if (requestParameters.webhookOptions === null || requestParameters.webhookOptions === undefined) {
            throw new runtime.RequiredError('webhookOptions','Required parameter requestParameters.webhookOptions was null or undefined when calling createWebhook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/inboxes/{inboxId}/webhooks`.replace(`{${"inboxId"}}`, encodeURIComponent(String(requestParameters.inboxId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateWebhookOptionsToJSON(requestParameters.webhookOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookDtoFromJSON(jsonValue));
    }

    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     */
    async createWebhook(requestParameters: CreateWebhookRequest): Promise<WebhookDto> {
        const response = await this.createWebhookRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete and disable a Webhook for an Inbox
     */
    async deleteWebhookRaw(requestParameters: DeleteWebhookRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling deleteWebhook.');
        }

        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling deleteWebhook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/inboxes/{inboxId}/webhooks/{webhookId}`.replace(`{${"inboxId"}}`, encodeURIComponent(String(requestParameters.inboxId))).replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete and disable a Webhook for an Inbox
     */
    async deleteWebhook(requestParameters: DeleteWebhookRequest): Promise<void> {
        await this.deleteWebhookRaw(requestParameters);
    }

    /**
     * Get results for all webhooks
     */
    async getAllWebhookResultsRaw(requestParameters: GetAllWebhookResultsRequest): Promise<runtime.ApiResponse<PageWebhookResult>> {
        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/webhooks/results`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageWebhookResultFromJSON(jsonValue));
    }

    /**
     * Get results for all webhooks
     */
    async getAllWebhookResults(requestParameters: GetAllWebhookResultsRequest): Promise<PageWebhookResult> {
        const response = await this.getAllWebhookResultsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     */
    async getAllWebhooksRaw(requestParameters: GetAllWebhooksRequest): Promise<runtime.ApiResponse<PageWebhookProjection>> {
        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/webhooks/paginated`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageWebhookProjectionFromJSON(jsonValue));
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     */
    async getAllWebhooks(requestParameters: GetAllWebhooksRequest): Promise<PageWebhookProjection> {
        const response = await this.getAllWebhooksRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get paginated webhooks for an Inbox
     */
    async getInboxWebhooksPaginatedRaw(requestParameters: GetInboxWebhooksPaginatedRequest): Promise<runtime.ApiResponse<PageWebhookProjection>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling getInboxWebhooksPaginated.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/inboxes/{inboxId}/webhooks/paginated`.replace(`{${"inboxId"}}`, encodeURIComponent(String(requestParameters.inboxId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageWebhookProjectionFromJSON(jsonValue));
    }

    /**
     * Get paginated webhooks for an Inbox
     */
    async getInboxWebhooksPaginated(requestParameters: GetInboxWebhooksPaginatedRequest): Promise<PageWebhookProjection> {
        const response = await this.getInboxWebhooksPaginatedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     */
    async getTestWebhookPayloadRaw(requestParameters: GetTestWebhookPayloadRequest): Promise<runtime.ApiResponse<AbstractWebhookPayload>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.eventName !== undefined) {
            queryParameters['eventName'] = requestParameters.eventName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/test`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AbstractWebhookPayloadFromJSON(jsonValue));
    }

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     */
    async getTestWebhookPayload(requestParameters: GetTestWebhookPayloadRequest): Promise<AbstractWebhookPayload> {
        const response = await this.getTestWebhookPayloadRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get webhook test payload for email opened event
     */
    async getTestWebhookPayloadEmailOpenedRaw(): Promise<runtime.ApiResponse<WebhookEmailOpenedPayload>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/test/email-opened-payload`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookEmailOpenedPayloadFromJSON(jsonValue));
    }

    /**
     * Get webhook test payload for email opened event
     */
    async getTestWebhookPayloadEmailOpened(): Promise<WebhookEmailOpenedPayload> {
        const response = await this.getTestWebhookPayloadEmailOpenedRaw();
        return await response.value();
    }

    /**
     * Get webhook test payload for new attachment event
     */
    async getTestWebhookPayloadNewAttachmentRaw(): Promise<runtime.ApiResponse<WebhookNewAttachmentPayload>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/test/new-attachment-payload`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookNewAttachmentPayloadFromJSON(jsonValue));
    }

    /**
     * Get webhook test payload for new attachment event
     */
    async getTestWebhookPayloadNewAttachment(): Promise<WebhookNewAttachmentPayload> {
        const response = await this.getTestWebhookPayloadNewAttachmentRaw();
        return await response.value();
    }

    /**
     * Get webhook test payload for new contact event
     */
    async getTestWebhookPayloadNewContactRaw(): Promise<runtime.ApiResponse<WebhookNewContactPayload>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/test/new-contact-payload`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookNewContactPayloadFromJSON(jsonValue));
    }

    /**
     * Get webhook test payload for new contact event
     */
    async getTestWebhookPayloadNewContact(): Promise<WebhookNewContactPayload> {
        const response = await this.getTestWebhookPayloadNewContactRaw();
        return await response.value();
    }

    /**
     * Get webhook test payload for new email event
     */
    async getTestWebhookPayloadNewEmailRaw(): Promise<runtime.ApiResponse<WebhookNewEmailPayload>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/test/new-email-payload`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookNewEmailPayloadFromJSON(jsonValue));
    }

    /**
     * Get webhook test payload for new email event
     */
    async getTestWebhookPayloadNewEmail(): Promise<WebhookNewEmailPayload> {
        const response = await this.getTestWebhookPayloadNewEmailRaw();
        return await response.value();
    }

    /**
     * Get a webhook for an Inbox
     */
    async getWebhookRaw(requestParameters: GetWebhookRequest): Promise<runtime.ApiResponse<WebhookDto>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling getWebhook.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/{webhookId}`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookDtoFromJSON(jsonValue));
    }

    /**
     * Get a webhook for an Inbox
     */
    async getWebhook(requestParameters: GetWebhookRequest): Promise<WebhookDto> {
        const response = await this.getWebhookRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a webhook result for a webhook
     */
    async getWebhookResultRaw(requestParameters: GetWebhookResultRequest): Promise<runtime.ApiResponse<WebhookResultEntity>> {
        if (requestParameters.webhookResultId === null || requestParameters.webhookResultId === undefined) {
            throw new runtime.RequiredError('webhookResultId','Required parameter requestParameters.webhookResultId was null or undefined when calling getWebhookResult.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/results/{webhookResultId}`.replace(`{${"webhookResultId"}}`, encodeURIComponent(String(requestParameters.webhookResultId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookResultEntityFromJSON(jsonValue));
    }

    /**
     * Get a webhook result for a webhook
     */
    async getWebhookResult(requestParameters: GetWebhookResultRequest): Promise<WebhookResultEntity> {
        const response = await this.getWebhookResultRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a webhook results for a webhook
     */
    async getWebhookResultsRaw(requestParameters: GetWebhookResultsRequest): Promise<runtime.ApiResponse<PageWebhookResult>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling getWebhookResults.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/webhooks/{webhookId}/results`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageWebhookResultFromJSON(jsonValue));
    }

    /**
     * Get a webhook results for a webhook
     */
    async getWebhookResults(requestParameters: GetWebhookResultsRequest): Promise<PageWebhookResult> {
        const response = await this.getWebhookResultsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all webhooks for an Inbox
     */
    async getWebhooksRaw(requestParameters: GetWebhooksRequest): Promise<runtime.ApiResponse<Array<WebhookDto>>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling getWebhooks.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/inboxes/{inboxId}/webhooks`.replace(`{${"inboxId"}}`, encodeURIComponent(String(requestParameters.inboxId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WebhookDtoFromJSON));
    }

    /**
     * Get all webhooks for an Inbox
     */
    async getWebhooks(requestParameters: GetWebhooksRequest): Promise<Array<WebhookDto>> {
        const response = await this.getWebhooksRaw(requestParameters);
        return await response.value();
    }

    /**
     * Send webhook test data
     */
    async sendTestDataRaw(requestParameters: SendTestDataRequest): Promise<runtime.ApiResponse<WebhookTestResult>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling sendTestData.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/webhooks/{webhookId}/test`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookTestResultFromJSON(jsonValue));
    }

    /**
     * Send webhook test data
     */
    async sendTestData(requestParameters: SendTestDataRequest): Promise<WebhookTestResult> {
        const response = await this.sendTestDataRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAllWebhookResultsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAllWebhooksSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetInboxWebhooksPaginatedSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetTestWebhookPayloadEventNameEnum {
    EMAILRECEIVED = 'EMAIL_RECEIVED',
    NEWEMAIL = 'NEW_EMAIL',
    NEWCONTACT = 'NEW_CONTACT',
    NEWATTACHMENT = 'NEW_ATTACHMENT',
    EMAILOPENED = 'EMAIL_OPENED'
}
/**
    * @export
    * @enum {string}
    */
export enum GetWebhookResultsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
