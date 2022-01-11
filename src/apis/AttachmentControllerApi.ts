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
    AttachmentEntity,
    AttachmentEntityFromJSON,
    AttachmentEntityToJSON,
    AttachmentMetaData,
    AttachmentMetaDataFromJSON,
    AttachmentMetaDataToJSON,
    DownloadAttachmentDto,
    DownloadAttachmentDtoFromJSON,
    DownloadAttachmentDtoToJSON,
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    PageAttachmentEntity,
    PageAttachmentEntityFromJSON,
    PageAttachmentEntityToJSON,
    UploadAttachmentOptions,
    UploadAttachmentOptionsFromJSON,
    UploadAttachmentOptionsToJSON,
} from '../models';

export interface DeleteAttachmentRequest {
    attachmentId: string;
}

export interface DownloadAttachmentAsBase64EncodedRequest {
    attachmentId: string;
}

export interface DownloadAttachmentAsBytesRequest {
    attachmentId: string;
}

export interface GetAttachmentRequest {
    attachmentId: string;
}

export interface GetAttachmentInfoRequest {
    attachmentId: string;
}

export interface GetAttachmentsRequest {
    page?: number;
    size?: number;
    sort?: GetAttachmentsSortEnum;
    fileNameFilter?: string;
    since?: Date;
    before?: Date;
}

export interface UploadAttachmentRequest {
    uploadAttachmentOptions: UploadAttachmentOptions;
}

export interface UploadAttachmentBytesRequest {
    requestBody: Array<string>;
    contentType?: string;
    filename?: string;
}

export interface UploadMultipartFormRequest {
    contentType?: string;
    filename?: string;
    xFilename?: string;
    inlineObject?: InlineObject;
}

/**
 * AttachmentControllerApi - interface
 * 
 * @export
 * @interface AttachmentControllerApiInterface
 */
export interface AttachmentControllerApiInterface {
    /**
     * 
     * @summary Delete all attachments
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    deleteAllAttachmentsRaw(): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete all attachments
     */
    deleteAllAttachments(): Promise<void>;

    /**
     * 
     * @summary Delete an attachment
     * @param {string} attachmentId ID of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    deleteAttachmentRaw(requestParameters: DeleteAttachmentRequest): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete an attachment
     */
    deleteAttachment(requestParameters: DeleteAttachmentRequest): Promise<void>;

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * @summary Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     * @param {string} attachmentId ID of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    downloadAttachmentAsBase64EncodedRaw(requestParameters: DownloadAttachmentAsBase64EncodedRequest): Promise<runtime.ApiResponse<DownloadAttachmentDto>>;

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     */
    downloadAttachmentAsBase64Encoded(requestParameters: DownloadAttachmentAsBase64EncodedRequest): Promise<DownloadAttachmentDto>;

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * @summary Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * @param {string} attachmentId ID of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    downloadAttachmentAsBytesRaw(requestParameters: DownloadAttachmentAsBytesRequest): Promise<runtime.ApiResponse<string>>;

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     */
    downloadAttachmentAsBytes(requestParameters: DownloadAttachmentAsBytesRequest): Promise<string>;

    /**
     * 
     * @summary Get an attachment entity
     * @param {string} attachmentId ID of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    getAttachmentRaw(requestParameters: GetAttachmentRequest): Promise<runtime.ApiResponse<AttachmentEntity>>;

    /**
     * Get an attachment entity
     */
    getAttachment(requestParameters: GetAttachmentRequest): Promise<AttachmentEntity>;

    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * @summary Get email attachment metadata information
     * @param {string} attachmentId ID of attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    getAttachmentInfoRaw(requestParameters: GetAttachmentInfoRequest): Promise<runtime.ApiResponse<AttachmentMetaData>>;

    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     */
    getAttachmentInfo(requestParameters: GetAttachmentInfoRequest): Promise<AttachmentMetaData>;

    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * @summary Get email attachments
     * @param {number} [page] Optional page index event list pagination
     * @param {number} [size] Optional page size event list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [fileNameFilter] Optional file name and content type search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    getAttachmentsRaw(requestParameters: GetAttachmentsRequest): Promise<runtime.ApiResponse<PageAttachmentEntity>>;

    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     */
    getAttachments(requestParameters: GetAttachmentsRequest): Promise<PageAttachmentEntity>;

    /**
     * 
     * @summary Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param {UploadAttachmentOptions} uploadAttachmentOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    uploadAttachmentRaw(requestParameters: UploadAttachmentRequest): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     */
    uploadAttachment(requestParameters: UploadAttachmentRequest): Promise<Array<string>>;

    /**
     * 
     * @summary Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param {Array<string>} requestBody 
     * @param {string} [contentType] Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param {string} [filename] Optional filename to save upload with
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    uploadAttachmentBytesRaw(requestParameters: UploadAttachmentBytesRequest): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     */
    uploadAttachmentBytes(requestParameters: UploadAttachmentBytesRequest): Promise<Array<string>>;

    /**
     * 
     * @summary Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param {string} [contentType] Optional content type of attachment
     * @param {string} [filename] Optional name of file
     * @param {string} [xFilename] Optional content type header of attachment
     * @param {InlineObject} [inlineObject] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentControllerApiInterface
     */
    uploadMultipartFormRaw(requestParameters: UploadMultipartFormRequest): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     */
    uploadMultipartForm(requestParameters: UploadMultipartFormRequest): Promise<Array<string>>;

}

/**
 * 
 */
export class AttachmentControllerApi extends runtime.BaseAPI implements AttachmentControllerApiInterface {

    /**
     * Delete all attachments
     */
    async deleteAllAttachmentsRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete all attachments
     */
    async deleteAllAttachments(): Promise<void> {
        await this.deleteAllAttachmentsRaw();
    }

    /**
     * Delete an attachment
     */
    async deleteAttachmentRaw(requestParameters: DeleteAttachmentRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
            throw new runtime.RequiredError('attachmentId','Required parameter requestParameters.attachmentId was null or undefined when calling deleteAttachment.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments/{attachmentId}`.replace(`{${"attachmentId"}}`, encodeURIComponent(String(requestParameters.attachmentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an attachment
     */
    async deleteAttachment(requestParameters: DeleteAttachmentRequest): Promise<void> {
        await this.deleteAttachmentRaw(requestParameters);
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     */
    async downloadAttachmentAsBase64EncodedRaw(requestParameters: DownloadAttachmentAsBase64EncodedRequest): Promise<runtime.ApiResponse<DownloadAttachmentDto>> {
        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
            throw new runtime.RequiredError('attachmentId','Required parameter requestParameters.attachmentId was null or undefined when calling downloadAttachmentAsBase64Encoded.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments/{attachmentId}/base64`.replace(`{${"attachmentId"}}`, encodeURIComponent(String(requestParameters.attachmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DownloadAttachmentDtoFromJSON(jsonValue));
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     */
    async downloadAttachmentAsBase64Encoded(requestParameters: DownloadAttachmentAsBase64EncodedRequest): Promise<DownloadAttachmentDto> {
        const response = await this.downloadAttachmentAsBase64EncodedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     */
    async downloadAttachmentAsBytesRaw(requestParameters: DownloadAttachmentAsBytesRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
            throw new runtime.RequiredError('attachmentId','Required parameter requestParameters.attachmentId was null or undefined when calling downloadAttachmentAsBytes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments/{attachmentId}/bytes`.replace(`{${"attachmentId"}}`, encodeURIComponent(String(requestParameters.attachmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     */
    async downloadAttachmentAsBytes(requestParameters: DownloadAttachmentAsBytesRequest): Promise<string> {
        const response = await this.downloadAttachmentAsBytesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get an attachment entity
     */
    async getAttachmentRaw(requestParameters: GetAttachmentRequest): Promise<runtime.ApiResponse<AttachmentEntity>> {
        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
            throw new runtime.RequiredError('attachmentId','Required parameter requestParameters.attachmentId was null or undefined when calling getAttachment.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments/{attachmentId}`.replace(`{${"attachmentId"}}`, encodeURIComponent(String(requestParameters.attachmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentEntityFromJSON(jsonValue));
    }

    /**
     * Get an attachment entity
     */
    async getAttachment(requestParameters: GetAttachmentRequest): Promise<AttachmentEntity> {
        const response = await this.getAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     */
    async getAttachmentInfoRaw(requestParameters: GetAttachmentInfoRequest): Promise<runtime.ApiResponse<AttachmentMetaData>> {
        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
            throw new runtime.RequiredError('attachmentId','Required parameter requestParameters.attachmentId was null or undefined when calling getAttachmentInfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments/{attachmentId}/metadata`.replace(`{${"attachmentId"}}`, encodeURIComponent(String(requestParameters.attachmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentMetaDataFromJSON(jsonValue));
    }

    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     */
    async getAttachmentInfo(requestParameters: GetAttachmentInfoRequest): Promise<AttachmentMetaData> {
        const response = await this.getAttachmentInfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     */
    async getAttachmentsRaw(requestParameters: GetAttachmentsRequest): Promise<runtime.ApiResponse<PageAttachmentEntity>> {
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

        if (requestParameters.fileNameFilter !== undefined) {
            queryParameters['fileNameFilter'] = requestParameters.fileNameFilter;
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
            path: `/attachments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageAttachmentEntityFromJSON(jsonValue));
    }

    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     */
    async getAttachments(requestParameters: GetAttachmentsRequest): Promise<PageAttachmentEntity> {
        const response = await this.getAttachmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     */
    async uploadAttachmentRaw(requestParameters: UploadAttachmentRequest): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.uploadAttachmentOptions === null || requestParameters.uploadAttachmentOptions === undefined) {
            throw new runtime.RequiredError('uploadAttachmentOptions','Required parameter requestParameters.uploadAttachmentOptions was null or undefined when calling uploadAttachment.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UploadAttachmentOptionsToJSON(requestParameters.uploadAttachmentOptions),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     */
    async uploadAttachment(requestParameters: UploadAttachmentRequest): Promise<Array<string>> {
        const response = await this.uploadAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     */
    async uploadAttachmentBytesRaw(requestParameters: UploadAttachmentBytesRequest): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling uploadAttachmentBytes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.contentType !== undefined) {
            queryParameters['contentType'] = requestParameters.contentType;
        }

        if (requestParameters.filename !== undefined) {
            queryParameters['filename'] = requestParameters.filename;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/octet-stream';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments/bytes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     */
    async uploadAttachmentBytes(requestParameters: UploadAttachmentBytesRequest): Promise<Array<string>> {
        const response = await this.uploadAttachmentBytesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     */
    async uploadMultipartFormRaw(requestParameters: UploadMultipartFormRequest): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.contentType !== undefined) {
            queryParameters['contentType'] = requestParameters.contentType;
        }

        if (requestParameters.filename !== undefined) {
            queryParameters['filename'] = requestParameters.filename;
        }

        if (requestParameters.xFilename !== undefined) {
            queryParameters['x-filename'] = requestParameters.xFilename;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/attachments/multipart`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     */
    async uploadMultipartForm(requestParameters: UploadMultipartFormRequest): Promise<Array<string>> {
        const response = await this.uploadMultipartFormRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAttachmentsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
