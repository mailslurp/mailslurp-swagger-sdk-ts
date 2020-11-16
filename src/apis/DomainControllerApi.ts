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
    CreateDomainOptions,
    CreateDomainOptionsFromJSON,
    CreateDomainOptionsToJSON,
    DomainDto,
    DomainDtoFromJSON,
    DomainDtoToJSON,
    DomainPreview,
    DomainPreviewFromJSON,
    DomainPreviewToJSON,
} from '../models';

export interface CreateDomainRequest {
    domainOptions: CreateDomainOptions;
}

export interface DeleteDomainRequest {
    id: string;
}

export interface GetDomainRequest {
    id: string;
}

/**
 * DomainControllerApi - interface
 * 
 * @export
 * @interface DomainControllerApiInterface
 */
export interface DomainControllerApiInterface {
    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
     * @summary Create Domain
     * @param {CreateDomainOptions} domainOptions domainOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainControllerApiInterface
     */
    createDomainRaw(requestParameters: CreateDomainRequest): Promise<runtime.ApiResponse<DomainDto>>;

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
     * Create Domain
     */
    createDomain(requestParameters: CreateDomainRequest): Promise<DomainDto>;

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * @summary Delete a domain
     * @param {string} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainControllerApiInterface
     */
    deleteDomainRaw(requestParameters: DeleteDomainRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     */
    deleteDomain(requestParameters: DeleteDomainRequest): Promise<void>;

    /**
     * Returns domain verification status and tokens for a given domain
     * @summary Get a domain
     * @param {string} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainControllerApiInterface
     */
    getDomainRaw(requestParameters: GetDomainRequest): Promise<runtime.ApiResponse<DomainDto>>;

    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     */
    getDomain(requestParameters: GetDomainRequest): Promise<DomainDto>;

    /**
     * List all custom domains you have created
     * @summary Get domains
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainControllerApiInterface
     */
    getDomainsRaw(): Promise<runtime.ApiResponse<Array<DomainPreview>>>;

    /**
     * List all custom domains you have created
     * Get domains
     */
    getDomains(): Promise<Array<DomainPreview>>;

}

/**
 * 
 */
export class DomainControllerApi extends runtime.BaseAPI implements DomainControllerApiInterface {

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
     * Create Domain
     */
    async createDomainRaw(requestParameters: CreateDomainRequest): Promise<runtime.ApiResponse<DomainDto>> {
        if (requestParameters.domainOptions === null || requestParameters.domainOptions === undefined) {
            throw new runtime.RequiredError('domainOptions','Required parameter requestParameters.domainOptions was null or undefined when calling createDomain.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/domains`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateDomainOptionsToJSON(requestParameters.domainOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainDtoFromJSON(jsonValue));
    }

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider\'s DNS setup to verify the domain.
     * Create Domain
     */
    async createDomain(requestParameters: CreateDomainRequest): Promise<DomainDto> {
        const response = await this.createDomainRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     */
    async deleteDomainRaw(requestParameters: DeleteDomainRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteDomain.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/domains/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     */
    async deleteDomain(requestParameters: DeleteDomainRequest): Promise<void> {
        await this.deleteDomainRaw(requestParameters);
    }

    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     */
    async getDomainRaw(requestParameters: GetDomainRequest): Promise<runtime.ApiResponse<DomainDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getDomain.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/domains/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DomainDtoFromJSON(jsonValue));
    }

    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     */
    async getDomain(requestParameters: GetDomainRequest): Promise<DomainDto> {
        const response = await this.getDomainRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all custom domains you have created
     * Get domains
     */
    async getDomainsRaw(): Promise<runtime.ApiResponse<Array<DomainPreview>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/domains`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DomainPreviewFromJSON));
    }

    /**
     * List all custom domains you have created
     * Get domains
     */
    async getDomains(): Promise<Array<DomainPreview>> {
        const response = await this.getDomainsRaw();
        return await response.value();
    }

}
