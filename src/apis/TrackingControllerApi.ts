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
    CreateTrackingPixelOptions,
    CreateTrackingPixelOptionsFromJSON,
    CreateTrackingPixelOptionsToJSON,
    PageTrackingPixelProjection,
    PageTrackingPixelProjectionFromJSON,
    PageTrackingPixelProjectionToJSON,
    TrackingPixelDto,
    TrackingPixelDtoFromJSON,
    TrackingPixelDtoToJSON,
} from '../models';

export interface CreateTrackingPixelRequest {
    createTrackingPixelOptions: CreateTrackingPixelOptions;
}

export interface GetAllTrackingPixelsRequest {
    page?: number;
    size?: number;
    sort?: GetAllTrackingPixelsSortEnum;
    searchFilter?: string;
    since?: Date;
    before?: Date;
}

export interface GetTrackingPixelRequest {
    id: string;
}

/**
 * TrackingControllerApi - interface
 * 
 * @export
 * @interface TrackingControllerApiInterface
 */
export interface TrackingControllerApiInterface {
    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * @summary Create tracking pixel
     * @param {CreateTrackingPixelOptions} createTrackingPixelOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrackingControllerApiInterface
     */
    createTrackingPixelRaw(requestParameters: CreateTrackingPixelRequest): Promise<runtime.ApiResponse<TrackingPixelDto>>;

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     */
    createTrackingPixel(requestParameters: CreateTrackingPixelRequest): Promise<TrackingPixelDto>;

    /**
     * List tracking pixels in paginated form
     * @summary Get tracking pixels
     * @param {number} [page] Optional page index in list pagination
     * @param {number} [size] Optional page size in list pagination
     * @param {'ASC' | 'DESC'} [sort] Optional createdAt sort direction ASC or DESC
     * @param {string} [searchFilter] Optional search filter
     * @param {Date} [since] Filter by created at after the given timestamp
     * @param {Date} [before] Filter by created at before the given timestamp
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrackingControllerApiInterface
     */
    getAllTrackingPixelsRaw(requestParameters: GetAllTrackingPixelsRequest): Promise<runtime.ApiResponse<PageTrackingPixelProjection>>;

    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     */
    getAllTrackingPixels(requestParameters: GetAllTrackingPixelsRequest): Promise<PageTrackingPixelProjection>;

    /**
     * 
     * @summary Get pixel
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrackingControllerApiInterface
     */
    getTrackingPixelRaw(requestParameters: GetTrackingPixelRequest): Promise<runtime.ApiResponse<TrackingPixelDto>>;

    /**
     * Get pixel
     */
    getTrackingPixel(requestParameters: GetTrackingPixelRequest): Promise<TrackingPixelDto>;

}

/**
 * 
 */
export class TrackingControllerApi extends runtime.BaseAPI implements TrackingControllerApiInterface {

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     */
    async createTrackingPixelRaw(requestParameters: CreateTrackingPixelRequest): Promise<runtime.ApiResponse<TrackingPixelDto>> {
        if (requestParameters.createTrackingPixelOptions === null || requestParameters.createTrackingPixelOptions === undefined) {
            throw new runtime.RequiredError('createTrackingPixelOptions','Required parameter requestParameters.createTrackingPixelOptions was null or undefined when calling createTrackingPixel.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/tracking/pixels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTrackingPixelOptionsToJSON(requestParameters.createTrackingPixelOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackingPixelDtoFromJSON(jsonValue));
    }

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     */
    async createTrackingPixel(requestParameters: CreateTrackingPixelRequest): Promise<TrackingPixelDto> {
        const response = await this.createTrackingPixelRaw(requestParameters);
        return await response.value();
    }

    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     */
    async getAllTrackingPixelsRaw(requestParameters: GetAllTrackingPixelsRequest): Promise<runtime.ApiResponse<PageTrackingPixelProjection>> {
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
            path: `/tracking/pixels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PageTrackingPixelProjectionFromJSON(jsonValue));
    }

    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     */
    async getAllTrackingPixels(requestParameters: GetAllTrackingPixelsRequest): Promise<PageTrackingPixelProjection> {
        const response = await this.getAllTrackingPixelsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get pixel
     */
    async getTrackingPixelRaw(requestParameters: GetTrackingPixelRequest): Promise<runtime.ApiResponse<TrackingPixelDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTrackingPixel.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/tracking/pixels/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TrackingPixelDtoFromJSON(jsonValue));
    }

    /**
     * Get pixel
     */
    async getTrackingPixel(requestParameters: GetTrackingPixelRequest): Promise<TrackingPixelDto> {
        const response = await this.getTrackingPixelRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetAllTrackingPixelsSortEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
