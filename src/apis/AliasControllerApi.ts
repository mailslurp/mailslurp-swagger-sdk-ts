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
    Alias,
    AliasFromJSON,
    AliasToJSON,
    AliasDto,
    AliasDtoFromJSON,
    AliasDtoToJSON,
    CreateAliasOptions,
    CreateAliasOptionsFromJSON,
    CreateAliasOptionsToJSON,
    PageAlias,
    PageAliasFromJSON,
    PageAliasToJSON,
    PageEmailProjection,
    PageEmailProjectionFromJSON,
    PageEmailProjectionToJSON,
    PageThreadProjection,
    PageThreadProjectionFromJSON,
    PageThreadProjectionToJSON,
    ReplyToAliasEmailOptions,
    ReplyToAliasEmailOptionsFromJSON,
    ReplyToAliasEmailOptionsToJSON,
    SendEmailOptions,
    SendEmailOptionsFromJSON,
    SendEmailOptionsToJSON,
    SentEmailDto,
    SentEmailDtoFromJSON,
    SentEmailDtoToJSON,
    UpdateAliasOptions,
    UpdateAliasOptionsFromJSON,
    UpdateAliasOptionsToJSON,
} from '../models';

export interface CreateAliasRequest {
    createAliasOptions: CreateAliasOptions;
}

export interface DeleteAliasRequest {
    aliasId: string;
}

export interface GetAliasRequest {
    aliasId: string;
}

export interface GetAliasEmailsRequest {
    aliasId: string;
    page?: number;
    size?: number;
    sort?: GetAliasEmailsSortEnum;
}

export interface GetAliasThreadsRequest {
    aliasId: string;
    page?: number;
    size?: number;
    sort?: GetAliasThreadsSortEnum;
}

export interface GetAliasesRequest {
    page?: number;
    size?: number;
    sort?: GetAliasesSortEnum;
}

export interface ReplyToAliasEmailRequest {
    aliasId: string;
    emailId: string;
    replyToAliasEmailOptions: ReplyToAliasEmailOptions;
}

export interface SendAliasEmailRequest {
    aliasId: string;
    sendEmailOptions?: SendEmailOptions;
}

export interface UpdateAliasRequest {
    aliasId: string;
    updateAliasOptions: UpdateAliasOptions;
}

/**
 * AliasControllerApi - interface
 * 
 * @export
 * @interface AliasControllerApiInterface
 */
export interface AliasControllerApiInterface {
    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * @summary Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     * @param {CreateAliasOptions} createAliasOptions createAliasOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    createAliasRaw(requestParameters: CreateAliasRequest): Promise<runtime.ApiResponse<AliasDto>>;

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     */
    createAlias(requestParameters: CreateAliasRequest): Promise<AliasDto>;

    /**
     * 
     * @summary Delete an email alias
     * @param {string} aliasId aliasId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    deleteAliasRaw(requestParameters: DeleteAliasRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete an email alias
     */
    deleteAlias(requestParameters: DeleteAliasRequest): Promise<void>;

    /**
     * Get an email alias by ID
     * @summary Get an email alias
     * @param {string} aliasId aliasId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    getAliasRaw(requestParameters: GetAliasRequest): Promise<runtime.ApiResponse<AliasDto>>;

    /**
     * Get an email alias by ID
     * Get an email alias
     */
    getAlias(requestParameters: GetAliasRequest): Promise<AliasDto>;

    /**
     * Get paginated emails for an alias by ID
     * @summary Get emails for an alias
     * @param {string} aliasId aliasId
     * @param {number} [page] Optional page index alias email list pagination
     * @param {number} [size] Optional page size alias email list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    getAliasEmailsRaw(requestParameters: GetAliasEmailsRequest): Promise<runtime.ApiResponse<PageEmailProjection>>;

    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     */
    getAliasEmails(requestParameters: GetAliasEmailsRequest): Promise<PageEmailProjection>;

    /**
     * Returns threads created for an email alias in paginated form
     * @summary Get threads created for an alias
     * @param {string} aliasId aliasId
     * @param {number} [page] Optional page index in thread list pagination
     * @param {number} [size] Optional page size in thread list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    getAliasThreadsRaw(requestParameters: GetAliasThreadsRequest): Promise<runtime.ApiResponse<PageThreadProjection>>;

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     */
    getAliasThreads(requestParameters: GetAliasThreadsRequest): Promise<PageThreadProjection>;

    /**
     * Get all email aliases in paginated form
     * @summary Get all email aliases you have created
     * @param {number} [page] Optional page index in alias list pagination
     * @param {number} [size] Optional page size in alias list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    getAliasesRaw(requestParameters: GetAliasesRequest): Promise<runtime.ApiResponse<PageAlias>>;

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     */
    getAliases(requestParameters: GetAliasesRequest): Promise<PageAlias>;

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * @summary Reply to an email
     * @param {string} aliasId ID of the alias that email belongs to
     * @param {string} emailId ID of the email that should be replied to
     * @param {ReplyToAliasEmailOptions} replyToAliasEmailOptions replyToAliasEmailOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    replyToAliasEmailRaw(requestParameters: ReplyToAliasEmailRequest): Promise<runtime.ApiResponse<SentEmailDto>>;

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     */
    replyToAliasEmail(requestParameters: ReplyToAliasEmailRequest): Promise<SentEmailDto>;

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * @summary Send an email from an alias inbox
     * @param {string} aliasId aliasId
     * @param {SendEmailOptions} [sendEmailOptions] Options for the email to be sent
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    sendAliasEmailRaw(requestParameters: SendAliasEmailRequest): Promise<runtime.ApiResponse<SentEmailDto>>;

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     */
    sendAliasEmail(requestParameters: SendAliasEmailRequest): Promise<SentEmailDto>;

    /**
     * 
     * @summary Update an email alias
     * @param {string} aliasId aliasId
     * @param {UpdateAliasOptions} updateAliasOptions updateAliasOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AliasControllerApiInterface
     */
    updateAliasRaw(requestParameters: UpdateAliasRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Update an email alias
     */
    updateAlias(requestParameters: UpdateAliasRequest): Promise<void>;

}

/**
 * 
 */
export class AliasControllerApi extends runtime.BaseAPI implements AliasControllerApiInterface {

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     */
    async createAliasRaw(requestParameters: CreateAliasRequest): Promise<runtime.ApiResponse<AliasDto>> {
        if (requestParameters.createAliasOptions === null || requestParameters.createAliasOptions === undefined) {
            throw new runtime.RequiredError('createAliasOptions','Required parameter requestParameters.createAliasOptions was null or undefined when calling createAlias.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAliasOptionsToJSON(requestParameters.createAliasOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasDtoFromJSON(jsonValue));
    }

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     */
    async createAlias(requestParameters: CreateAliasRequest): Promise<AliasDto> {
        const response = await this.createAliasRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an email alias
     */
    async deleteAliasRaw(requestParameters: DeleteAliasRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling deleteAlias.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases/{aliasId}`.replace(`{${"aliasId"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an email alias
     */
    async deleteAlias(requestParameters: DeleteAliasRequest): Promise<void> {
        await this.deleteAliasRaw(requestParameters);
    }

    /**
     * Get an email alias by ID
     * Get an email alias
     */
    async getAliasRaw(requestParameters: GetAliasRequest): Promise<runtime.ApiResponse<AliasDto>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling getAlias.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases/{aliasId}`.replace(`{${"aliasId"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasDtoFromJSON(jsonValue));
    }

    /**
     * Get an email alias by ID
     * Get an email alias
     */
    async getAlias(requestParameters: GetAliasRequest): Promise<AliasDto> {
        const response = await this.getAliasRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     */
    async getAliasEmailsRaw(requestParameters: GetAliasEmailsRequest): Promise<runtime.ApiResponse<PageEmailProjection>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling getAliasEmails.');
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases/{aliasId}/emails`.replace(`{${"aliasId"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageEmailProjectionFromJSON(jsonValue));
    }

    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     */
    async getAliasEmails(requestParameters: GetAliasEmailsRequest): Promise<PageEmailProjection> {
        const response = await this.getAliasEmailsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     */
    async getAliasThreadsRaw(requestParameters: GetAliasThreadsRequest): Promise<runtime.ApiResponse<PageThreadProjection>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling getAliasThreads.');
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases/{aliasId}/threads`.replace(`{${"aliasId"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageThreadProjectionFromJSON(jsonValue));
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     */
    async getAliasThreads(requestParameters: GetAliasThreadsRequest): Promise<PageThreadProjection> {
        const response = await this.getAliasThreadsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     */
    async getAliasesRaw(requestParameters: GetAliasesRequest): Promise<runtime.ApiResponse<PageAlias>> {
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
            path: `/aliases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageAliasFromJSON(jsonValue));
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     */
    async getAliases(requestParameters: GetAliasesRequest): Promise<PageAlias> {
        const response = await this.getAliasesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     */
    async replyToAliasEmailRaw(requestParameters: ReplyToAliasEmailRequest): Promise<runtime.ApiResponse<SentEmailDto>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling replyToAliasEmail.');
        }

        if (requestParameters.emailId === null || requestParameters.emailId === undefined) {
            throw new runtime.RequiredError('emailId','Required parameter requestParameters.emailId was null or undefined when calling replyToAliasEmail.');
        }

        if (requestParameters.replyToAliasEmailOptions === null || requestParameters.replyToAliasEmailOptions === undefined) {
            throw new runtime.RequiredError('replyToAliasEmailOptions','Required parameter requestParameters.replyToAliasEmailOptions was null or undefined when calling replyToAliasEmail.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases/{aliasId}/emails/{emailId}`.replace(`{${"aliasId"}}`, encodeURIComponent(String(requestParameters.aliasId))).replace(`{${"emailId"}}`, encodeURIComponent(String(requestParameters.emailId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReplyToAliasEmailOptionsToJSON(requestParameters.replyToAliasEmailOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SentEmailDtoFromJSON(jsonValue));
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     */
    async replyToAliasEmail(requestParameters: ReplyToAliasEmailRequest): Promise<SentEmailDto> {
        const response = await this.replyToAliasEmailRaw(requestParameters);
        return await response.value();
    }

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     */
    async sendAliasEmailRaw(requestParameters: SendAliasEmailRequest): Promise<runtime.ApiResponse<SentEmailDto>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling sendAliasEmail.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases/{aliasId}/emails`.replace(`{${"aliasId"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendEmailOptionsToJSON(requestParameters.sendEmailOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SentEmailDtoFromJSON(jsonValue));
    }

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     */
    async sendAliasEmail(requestParameters: SendAliasEmailRequest): Promise<SentEmailDto> {
        const response = await this.sendAliasEmailRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an email alias
     */
    async updateAliasRaw(requestParameters: UpdateAliasRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling updateAlias.');
        }

        if (requestParameters.updateAliasOptions === null || requestParameters.updateAliasOptions === undefined) {
            throw new runtime.RequiredError('updateAliasOptions','Required parameter requestParameters.updateAliasOptions was null or undefined when calling updateAlias.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/aliases/{aliasId}`.replace(`{${"aliasId"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAliasOptionsToJSON(requestParameters.updateAliasOptions),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update an email alias
     */
    async updateAlias(requestParameters: UpdateAliasRequest): Promise<void> {
        await this.updateAliasRaw(requestParameters);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAliasEmailsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAliasThreadsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum GetAliasesSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
