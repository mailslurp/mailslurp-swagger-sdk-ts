/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.   ## Resources - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
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
    BulkSendEmailOptions,
    BulkSendEmailOptionsFromJSON,
    BulkSendEmailOptionsToJSON,
    Inbox,
    InboxFromJSON,
    InboxToJSON,
} from '../models';

export interface BulkCreateInboxesRequest {
    count: number;
}

export interface BulkDeleteInboxesRequest {
    ids: Array<string>;
}

export interface BulkSendEmailsRequest {
    bulkSendEmailOptions: BulkSendEmailOptions;
}

/**
 * BulkActionsControllerApi - interface
 * 
 * @export
 * @interface BulkActionsControllerApiInterface
 */
export interface BulkActionsControllerApiInterface {
    /**
     * 
     * @summary Bulk create Inboxes (email addresses)
     * @param {number} count Number of inboxes to be created in bulk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BulkActionsControllerApiInterface
     */
    bulkCreateInboxesRaw(requestParameters: BulkCreateInboxesRequest): Promise<runtime.ApiResponse<Array<Inbox>>>;

    /**
     * Bulk create Inboxes (email addresses)
     */
    bulkCreateInboxes(requestParameters: BulkCreateInboxesRequest): Promise<Array<Inbox>>;

    /**
     * 
     * @summary Bulk Delete Inboxes
     * @param {Array<string>} ids ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BulkActionsControllerApiInterface
     */
    bulkDeleteInboxesRaw(requestParameters: BulkDeleteInboxesRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Bulk Delete Inboxes
     */
    bulkDeleteInboxes(requestParameters: BulkDeleteInboxesRequest): Promise<void>;

    /**
     * 
     * @summary Bulk Send Emails
     * @param {BulkSendEmailOptions} bulkSendEmailOptions bulkSendEmailOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BulkActionsControllerApiInterface
     */
    bulkSendEmailsRaw(requestParameters: BulkSendEmailsRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Bulk Send Emails
     */
    bulkSendEmails(requestParameters: BulkSendEmailsRequest): Promise<void>;

}

/**
 * 
 */
export class BulkActionsControllerApi extends runtime.BaseAPI implements BulkActionsControllerApiInterface {

    /**
     * Bulk create Inboxes (email addresses)
     */
    async bulkCreateInboxesRaw(requestParameters: BulkCreateInboxesRequest): Promise<runtime.ApiResponse<Array<Inbox>>> {
        if (requestParameters.count === null || requestParameters.count === undefined) {
            throw new runtime.RequiredError('count','Required parameter requestParameters.count was null or undefined when calling bulkCreateInboxes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/bulk/inboxes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InboxFromJSON));
    }

    /**
     * Bulk create Inboxes (email addresses)
     */
    async bulkCreateInboxes(requestParameters: BulkCreateInboxesRequest): Promise<Array<Inbox>> {
        const response = await this.bulkCreateInboxesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Bulk Delete Inboxes
     */
    async bulkDeleteInboxesRaw(requestParameters: BulkDeleteInboxesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling bulkDeleteInboxes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/bulk/inboxes`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ids,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bulk Delete Inboxes
     */
    async bulkDeleteInboxes(requestParameters: BulkDeleteInboxesRequest): Promise<void> {
        await this.bulkDeleteInboxesRaw(requestParameters);
    }

    /**
     * Bulk Send Emails
     */
    async bulkSendEmailsRaw(requestParameters: BulkSendEmailsRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.bulkSendEmailOptions === null || requestParameters.bulkSendEmailOptions === undefined) {
            throw new runtime.RequiredError('bulkSendEmailOptions','Required parameter requestParameters.bulkSendEmailOptions was null or undefined when calling bulkSendEmails.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/bulk/send`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BulkSendEmailOptionsToJSON(requestParameters.bulkSendEmailOptions),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bulk Send Emails
     */
    async bulkSendEmails(requestParameters: BulkSendEmailsRequest): Promise<void> {
        await this.bulkSendEmailsRaw(requestParameters);
    }

}
