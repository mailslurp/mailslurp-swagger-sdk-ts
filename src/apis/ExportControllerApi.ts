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
    ExportLink,
    ExportLinkFromJSON,
    ExportLinkToJSON,
    ExportOptions,
    ExportOptionsFromJSON,
    ExportOptionsToJSON,
} from '../models';

export interface ExportEntitiesRequest {
    exportType: ExportEntitiesExportTypeEnum;
    apiKey: string;
    outputFormat: ExportEntitiesOutputFormatEnum;
    filter?: string;
    listSeparatorToken?: string;
    excludePreviouslyExported?: boolean;
    createdEarliestTime?: Date;
    createdOldestTime?: Date;
}

export interface GetExportLinkRequest {
    exportType: GetExportLinkExportTypeEnum;
    exportOptions: ExportOptions;
    apiKey?: string;
}

/**
 * ExportControllerApi - interface
 * 
 * @export
 * @interface ExportControllerApiInterface
 */
export interface ExportControllerApiInterface {
    /**
     * 
     * @summary Export inboxes link callable via browser
     * @param {'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'} exportType 
     * @param {string} apiKey 
     * @param {'CSV_DEFAULT' | 'CSV_EXCEL'} outputFormat 
     * @param {string} [filter] 
     * @param {string} [listSeparatorToken] 
     * @param {boolean} [excludePreviouslyExported] 
     * @param {Date} [createdEarliestTime] 
     * @param {Date} [createdOldestTime] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExportControllerApiInterface
     */
    exportEntitiesRaw(requestParameters: ExportEntitiesRequest): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Export inboxes link callable via browser
     */
    exportEntities(requestParameters: ExportEntitiesRequest): Promise<Array<string>>;

    /**
     * 
     * @summary Get export link
     * @param {'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'} exportType 
     * @param {ExportOptions} exportOptions 
     * @param {string} [apiKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExportControllerApiInterface
     */
    getExportLinkRaw(requestParameters: GetExportLinkRequest): Promise<runtime.ApiResponse<ExportLink>>;

    /**
     * Get export link
     */
    getExportLink(requestParameters: GetExportLinkRequest): Promise<ExportLink>;

}

/**
 * 
 */
export class ExportControllerApi extends runtime.BaseAPI implements ExportControllerApiInterface {

    /**
     * Export inboxes link callable via browser
     */
    async exportEntitiesRaw(requestParameters: ExportEntitiesRequest): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.exportType === null || requestParameters.exportType === undefined) {
            throw new runtime.RequiredError('exportType','Required parameter requestParameters.exportType was null or undefined when calling exportEntities.');
        }

        if (requestParameters.apiKey === null || requestParameters.apiKey === undefined) {
            throw new runtime.RequiredError('apiKey','Required parameter requestParameters.apiKey was null or undefined when calling exportEntities.');
        }

        if (requestParameters.outputFormat === null || requestParameters.outputFormat === undefined) {
            throw new runtime.RequiredError('outputFormat','Required parameter requestParameters.outputFormat was null or undefined when calling exportEntities.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.exportType !== undefined) {
            queryParameters['exportType'] = requestParameters.exportType;
        }

        if (requestParameters.apiKey !== undefined) {
            queryParameters['apiKey'] = requestParameters.apiKey;
        }

        if (requestParameters.outputFormat !== undefined) {
            queryParameters['outputFormat'] = requestParameters.outputFormat;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.listSeparatorToken !== undefined) {
            queryParameters['listSeparatorToken'] = requestParameters.listSeparatorToken;
        }

        if (requestParameters.excludePreviouslyExported !== undefined) {
            queryParameters['excludePreviouslyExported'] = requestParameters.excludePreviouslyExported;
        }

        if (requestParameters.createdEarliestTime !== undefined) {
            queryParameters['createdEarliestTime'] = (requestParameters.createdEarliestTime as any).toISOString();
        }

        if (requestParameters.createdOldestTime !== undefined) {
            queryParameters['createdOldestTime'] = (requestParameters.createdOldestTime as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Export inboxes link callable via browser
     */
    async exportEntities(requestParameters: ExportEntitiesRequest): Promise<Array<string>> {
        const response = await this.exportEntitiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get export link
     */
    async getExportLinkRaw(requestParameters: GetExportLinkRequest): Promise<runtime.ApiResponse<ExportLink>> {
        if (requestParameters.exportType === null || requestParameters.exportType === undefined) {
            throw new runtime.RequiredError('exportType','Required parameter requestParameters.exportType was null or undefined when calling getExportLink.');
        }

        if (requestParameters.exportOptions === null || requestParameters.exportOptions === undefined) {
            throw new runtime.RequiredError('exportOptions','Required parameter requestParameters.exportOptions was null or undefined when calling getExportLink.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.exportType !== undefined) {
            queryParameters['exportType'] = requestParameters.exportType;
        }

        if (requestParameters.apiKey !== undefined) {
            queryParameters['apiKey'] = requestParameters.apiKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/export`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExportOptionsToJSON(requestParameters.exportOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExportLinkFromJSON(jsonValue));
    }

    /**
     * Get export link
     */
    async getExportLink(requestParameters: GetExportLinkRequest): Promise<ExportLink> {
        const response = await this.getExportLinkRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum ExportEntitiesExportTypeEnum {
    INBOXES = 'INBOXES',
    CONTACTS = 'CONTACTS',
    ATTACHMENTS = 'ATTACHMENTS',
    EMAILS = 'EMAILS'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportEntitiesOutputFormatEnum {
    DEFAULT = 'CSV_DEFAULT',
    EXCEL = 'CSV_EXCEL'
}
/**
    * @export
    * @enum {string}
    */
export enum GetExportLinkExportTypeEnum {
    INBOXES = 'INBOXES',
    CONTACTS = 'CONTACTS',
    ATTACHMENTS = 'ATTACHMENTS',
    EMAILS = 'EMAILS'
}
