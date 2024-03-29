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
    CreateTemplateOptions,
    CreateTemplateOptionsFromJSON,
    CreateTemplateOptionsToJSON,
    PageTemplateProjection,
    PageTemplateProjectionFromJSON,
    PageTemplateProjectionToJSON,
    TemplateDto,
    TemplateDtoFromJSON,
    TemplateDtoToJSON,
    TemplateProjection,
    TemplateProjectionFromJSON,
    TemplateProjectionToJSON,
} from '../models';

export interface CreateTemplateRequest {
    createTemplateOptions: CreateTemplateOptions;
}

export interface DeleteTemplateRequest {
    templateId: string;
}

export interface GetAllTemplatesRequest {
    page?: number;
    size?: number;
    sort?: GetAllTemplatesSortEnum;
    since?: Date;
    before?: Date;
}

export interface GetTemplateRequest {
    templateId: string;
}

export interface UpdateTemplateRequest {
    templateId: string;
    createTemplateOptions: CreateTemplateOptions;
}

/**
 * TemplateControllerApi - interface
 * 
 * @export
 * @interface TemplateControllerApiInterface
 */
export interface TemplateControllerApiInterface {
    /**
     * 
     * @summary Create a Template
     * @param {CreateTemplateOptions} createTemplateOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplateControllerApiInterface
     */
    createTemplateRaw(requestParameters: CreateTemplateRequest): Promise<runtime.ApiResponse<TemplateDto>>;

    /**
     * Create a Template
     */
    createTemplate(requestParameters: CreateTemplateRequest): Promise<TemplateDto>;

    /**
     * 
     * @summary Delete Template
     * @param {string} templateId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplateControllerApiInterface
     */
    deleteTemplateRaw(requestParameters: DeleteTemplateRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete Template
     */
    deleteTemplate(requestParameters: DeleteTemplateRequest): Promise<void>;

    /**
     * 
     * @summary Get all Templates in paginated format
     * @param {number} [page] Optional page index in list pagination
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplateControllerApiInterface
     */
    getAllTemplatesRaw(requestParameters: GetAllTemplatesRequest): Promise<runtime.ApiResponse<PageTemplateProjection>>;

    /**
     * Get all Templates in paginated format
     */
    getAllTemplates(requestParameters: GetAllTemplatesRequest): Promise<PageTemplateProjection>;

    /**
     * 
     * @summary Get Template
     * @param {string} templateId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplateControllerApiInterface
     */
    getTemplateRaw(requestParameters: GetTemplateRequest): Promise<runtime.ApiResponse<TemplateDto>>;

    /**
     * Get Template
     */
    getTemplate(requestParameters: GetTemplateRequest): Promise<TemplateDto>;

    /**
     * 
     * @summary Get all Templates
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplateControllerApiInterface
     */
    getTemplatesRaw(): Promise<runtime.ApiResponse<Array<TemplateProjection>>>;

    /**
     * Get all Templates
     */
    getTemplates(): Promise<Array<TemplateProjection>>;

    /**
     * 
     * @summary Update a Template
     * @param {string} templateId 
     * @param {CreateTemplateOptions} createTemplateOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplateControllerApiInterface
     */
    updateTemplateRaw(requestParameters: UpdateTemplateRequest): Promise<runtime.ApiResponse<TemplateDto>>;

    /**
     * Update a Template
     */
    updateTemplate(requestParameters: UpdateTemplateRequest): Promise<TemplateDto>;

}

/**
 * 
 */
export class TemplateControllerApi extends runtime.BaseAPI implements TemplateControllerApiInterface {

    /**
     * Create a Template
     */
    async createTemplateRaw(requestParameters: CreateTemplateRequest): Promise<runtime.ApiResponse<TemplateDto>> {
        if (requestParameters.createTemplateOptions === null || requestParameters.createTemplateOptions === undefined) {
            throw new runtime.RequiredError('createTemplateOptions','Required parameter requestParameters.createTemplateOptions was null or undefined when calling createTemplate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/templates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTemplateOptionsToJSON(requestParameters.createTemplateOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateDtoFromJSON(jsonValue));
    }

    /**
     * Create a Template
     */
    async createTemplate(requestParameters: CreateTemplateRequest): Promise<TemplateDto> {
        const response = await this.createTemplateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete Template
     */
    async deleteTemplateRaw(requestParameters: DeleteTemplateRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling deleteTemplate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/templates/{templateId}`.replace(`{${"templateId"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Template
     */
    async deleteTemplate(requestParameters: DeleteTemplateRequest): Promise<void> {
        await this.deleteTemplateRaw(requestParameters);
    }

    /**
     * Get all Templates in paginated format
     */
    async getAllTemplatesRaw(requestParameters: GetAllTemplatesRequest): Promise<runtime.ApiResponse<PageTemplateProjection>> {
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
            path: `/templates/paginated`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageTemplateProjectionFromJSON(jsonValue));
    }

    /**
     * Get all Templates in paginated format
     */
    async getAllTemplates(requestParameters: GetAllTemplatesRequest): Promise<PageTemplateProjection> {
        const response = await this.getAllTemplatesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get Template
     */
    async getTemplateRaw(requestParameters: GetTemplateRequest): Promise<runtime.ApiResponse<TemplateDto>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling getTemplate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/templates/{templateId}`.replace(`{${"templateId"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateDtoFromJSON(jsonValue));
    }

    /**
     * Get Template
     */
    async getTemplate(requestParameters: GetTemplateRequest): Promise<TemplateDto> {
        const response = await this.getTemplateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all Templates
     */
    async getTemplatesRaw(): Promise<runtime.ApiResponse<Array<TemplateProjection>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/templates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TemplateProjectionFromJSON));
    }

    /**
     * Get all Templates
     */
    async getTemplates(): Promise<Array<TemplateProjection>> {
        const response = await this.getTemplatesRaw();
        return await response.value();
    }

    /**
     * Update a Template
     */
    async updateTemplateRaw(requestParameters: UpdateTemplateRequest): Promise<runtime.ApiResponse<TemplateDto>> {
        if (requestParameters.templateId === null || requestParameters.templateId === undefined) {
            throw new runtime.RequiredError('templateId','Required parameter requestParameters.templateId was null or undefined when calling updateTemplate.');
        }

        if (requestParameters.createTemplateOptions === null || requestParameters.createTemplateOptions === undefined) {
            throw new runtime.RequiredError('createTemplateOptions','Required parameter requestParameters.createTemplateOptions was null or undefined when calling updateTemplate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/templates/{templateId}`.replace(`{${"templateId"}}`, encodeURIComponent(String(requestParameters.templateId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTemplateOptionsToJSON(requestParameters.createTemplateOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TemplateDtoFromJSON(jsonValue));
    }

    /**
     * Update a Template
     */
    async updateTemplate(requestParameters: UpdateTemplateRequest): Promise<TemplateDto> {
        const response = await this.updateTemplateRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAllTemplatesSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
