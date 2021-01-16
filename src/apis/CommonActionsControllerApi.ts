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
    Inbox,
    InboxFromJSON,
    InboxToJSON,
    SimpleSendEmailOptions,
    SimpleSendEmailOptionsFromJSON,
    SimpleSendEmailOptionsToJSON,
} from '../models';

export interface CreateNewEmailAddressRequest {
    expiresAt?: Date;
    expiresIn?: number;
    useDomainPool?: boolean;
}

export interface CreateNewEmailAddress1Request {
    expiresAt?: Date;
    expiresIn?: number;
    useDomainPool?: boolean;
}

export interface EmptyInboxRequest {
    inboxId: string;
}

export interface SendEmailSimpleRequest {
    emailOptions: SimpleSendEmailOptions;
}

/**
 * CommonActionsControllerApi - interface
 * 
 * @export
 * @interface CommonActionsControllerApiInterface
 */
export interface CommonActionsControllerApiInterface {
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * @summary Create new random inbox
     * @param {Date} [expiresAt] expiresAt
     * @param {number} [expiresIn] expiresIn
     * @param {boolean} [useDomainPool] useDomainPool
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonActionsControllerApiInterface
     */
    createNewEmailAddressRaw(requestParameters: CreateNewEmailAddressRequest): Promise<runtime.ApiResponse<Inbox>>;

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    createNewEmailAddress(requestParameters: CreateNewEmailAddressRequest): Promise<Inbox>;

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * @summary Create new random inbox
     * @param {Date} [expiresAt] expiresAt
     * @param {number} [expiresIn] expiresIn
     * @param {boolean} [useDomainPool] useDomainPool
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonActionsControllerApiInterface
     */
    createNewEmailAddress1Raw(requestParameters: CreateNewEmailAddress1Request): Promise<runtime.ApiResponse<Inbox>>;

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    createNewEmailAddress1(requestParameters: CreateNewEmailAddress1Request): Promise<Inbox>;

    /**
     * Deletes all emails
     * @summary Delete all emails in an inbox
     * @param {string} inboxId inboxId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonActionsControllerApiInterface
     */
    emptyInboxRaw(requestParameters: EmptyInboxRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    emptyInbox(requestParameters: EmptyInboxRequest): Promise<void>;

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * @summary Send an email
     * @param {SimpleSendEmailOptions} emailOptions emailOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommonActionsControllerApiInterface
     */
    sendEmailSimpleRaw(requestParameters: SendEmailSimpleRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     */
    sendEmailSimple(requestParameters: SendEmailSimpleRequest): Promise<void>;

}

/**
 * 
 */
export class CommonActionsControllerApi extends runtime.BaseAPI implements CommonActionsControllerApiInterface {

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    async createNewEmailAddressRaw(requestParameters: CreateNewEmailAddressRequest): Promise<runtime.ApiResponse<Inbox>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.expiresAt !== undefined) {
            queryParameters['expiresAt'] = (requestParameters.expiresAt as any).toISOString();
        }

        if (requestParameters.expiresIn !== undefined) {
            queryParameters['expiresIn'] = requestParameters.expiresIn;
        }

        if (requestParameters.useDomainPool !== undefined) {
            queryParameters['useDomainPool'] = requestParameters.useDomainPool;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/createInbox`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxFromJSON(jsonValue));
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    async createNewEmailAddress(requestParameters: CreateNewEmailAddressRequest): Promise<Inbox> {
        const response = await this.createNewEmailAddressRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    async createNewEmailAddress1Raw(requestParameters: CreateNewEmailAddress1Request): Promise<runtime.ApiResponse<Inbox>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.expiresAt !== undefined) {
            queryParameters['expiresAt'] = (requestParameters.expiresAt as any).toISOString();
        }

        if (requestParameters.expiresIn !== undefined) {
            queryParameters['expiresIn'] = requestParameters.expiresIn;
        }

        if (requestParameters.useDomainPool !== undefined) {
            queryParameters['useDomainPool'] = requestParameters.useDomainPool;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/newEmailAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InboxFromJSON(jsonValue));
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    async createNewEmailAddress1(requestParameters: CreateNewEmailAddress1Request): Promise<Inbox> {
        const response = await this.createNewEmailAddress1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    async emptyInboxRaw(requestParameters: EmptyInboxRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.inboxId === null || requestParameters.inboxId === undefined) {
            throw new runtime.RequiredError('inboxId','Required parameter requestParameters.inboxId was null or undefined when calling emptyInbox.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.inboxId !== undefined) {
            queryParameters['inboxId'] = requestParameters.inboxId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/emptyInbox`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    async emptyInbox(requestParameters: EmptyInboxRequest): Promise<void> {
        await this.emptyInboxRaw(requestParameters);
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     */
    async sendEmailSimpleRaw(requestParameters: SendEmailSimpleRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.emailOptions === null || requestParameters.emailOptions === undefined) {
            throw new runtime.RequiredError('emailOptions','Required parameter requestParameters.emailOptions was null or undefined when calling sendEmailSimple.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/sendEmail`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SimpleSendEmailOptionsToJSON(requestParameters.emailOptions),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     */
    async sendEmailSimple(requestParameters: SendEmailSimpleRequest): Promise<void> {
        await this.sendEmailSimpleRaw(requestParameters);
    }

}
