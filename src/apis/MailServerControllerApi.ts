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
    DescribeDomainOptions,
    DescribeDomainOptionsFromJSON,
    DescribeDomainOptionsToJSON,
    DescribeMailServerDomainResult,
    DescribeMailServerDomainResultFromJSON,
    DescribeMailServerDomainResultToJSON,
    EmailVerificationResult,
    EmailVerificationResultFromJSON,
    EmailVerificationResultToJSON,
    VerifyEmailAddressOptions,
    VerifyEmailAddressOptionsFromJSON,
    VerifyEmailAddressOptionsToJSON,
} from '../models';

export interface DescribeMailServerDomainRequest {
    describeOptions: DescribeDomainOptions;
}

export interface VerifyEmailAddressRequest {
    verifyOptions: VerifyEmailAddressOptions;
}

/**
 * MailServerControllerApi - interface
 * 
 * @export
 * @interface MailServerControllerApiInterface
 */
export interface MailServerControllerApiInterface {
    /**
     * 
     * @summary Get DNS Mail Server records for a domain
     * @param {DescribeDomainOptions} describeOptions describeOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailServerControllerApiInterface
     */
    describeMailServerDomainRaw(requestParameters: DescribeMailServerDomainRequest): Promise<runtime.ApiResponse<DescribeMailServerDomainResult>>;

    /**
     * Get DNS Mail Server records for a domain
     */
    describeMailServerDomain(requestParameters: DescribeMailServerDomainRequest): Promise<DescribeMailServerDomainResult>;

    /**
     * 
     * @summary Verify the existence of an email address at a given mail server.
     * @param {VerifyEmailAddressOptions} verifyOptions verifyOptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailServerControllerApiInterface
     */
    verifyEmailAddressRaw(requestParameters: VerifyEmailAddressRequest): Promise<runtime.ApiResponse<EmailVerificationResult>>;

    /**
     * Verify the existence of an email address at a given mail server.
     */
    verifyEmailAddress(requestParameters: VerifyEmailAddressRequest): Promise<EmailVerificationResult>;

}

/**
 * 
 */
export class MailServerControllerApi extends runtime.BaseAPI implements MailServerControllerApiInterface {

    /**
     * Get DNS Mail Server records for a domain
     */
    async describeMailServerDomainRaw(requestParameters: DescribeMailServerDomainRequest): Promise<runtime.ApiResponse<DescribeMailServerDomainResult>> {
        if (requestParameters.describeOptions === null || requestParameters.describeOptions === undefined) {
            throw new runtime.RequiredError('describeOptions','Required parameter requestParameters.describeOptions was null or undefined when calling describeMailServerDomain.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/mail-server/describe/domain`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DescribeDomainOptionsToJSON(requestParameters.describeOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DescribeMailServerDomainResultFromJSON(jsonValue));
    }

    /**
     * Get DNS Mail Server records for a domain
     */
    async describeMailServerDomain(requestParameters: DescribeMailServerDomainRequest): Promise<DescribeMailServerDomainResult> {
        const response = await this.describeMailServerDomainRaw(requestParameters);
        return await response.value();
    }

    /**
     * Verify the existence of an email address at a given mail server.
     */
    async verifyEmailAddressRaw(requestParameters: VerifyEmailAddressRequest): Promise<runtime.ApiResponse<EmailVerificationResult>> {
        if (requestParameters.verifyOptions === null || requestParameters.verifyOptions === undefined) {
            throw new runtime.RequiredError('verifyOptions','Required parameter requestParameters.verifyOptions was null or undefined when calling verifyEmailAddress.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/mail-server/verify/email-address`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VerifyEmailAddressOptionsToJSON(requestParameters.verifyOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EmailVerificationResultFromJSON(jsonValue));
    }

    /**
     * Verify the existence of an email address at a given mail server.
     */
    async verifyEmailAddress(requestParameters: VerifyEmailAddressRequest): Promise<EmailVerificationResult> {
        const response = await this.verifyEmailAddressRaw(requestParameters);
        return await response.value();
    }

}
