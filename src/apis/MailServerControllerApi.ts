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
    DNSLookupOptions,
    DNSLookupOptionsFromJSON,
    DNSLookupOptionsToJSON,
    DNSLookupResults,
    DNSLookupResultsFromJSON,
    DNSLookupResultsToJSON,
    DescribeDomainOptions,
    DescribeDomainOptionsFromJSON,
    DescribeDomainOptionsToJSON,
    DescribeMailServerDomainResult,
    DescribeMailServerDomainResultFromJSON,
    DescribeMailServerDomainResultToJSON,
    EmailVerificationResult,
    EmailVerificationResultFromJSON,
    EmailVerificationResultToJSON,
    IPAddressResult,
    IPAddressResultFromJSON,
    IPAddressResultToJSON,
    VerifyEmailAddressOptions,
    VerifyEmailAddressOptionsFromJSON,
    VerifyEmailAddressOptionsToJSON,
} from '../models';

export interface DescribeMailServerDomainRequest {
    describeDomainOptions: DescribeDomainOptions;
}

export interface GetDnsLookupRequest {
    dNSLookupOptions: DNSLookupOptions;
}

export interface GetIpAddressRequest {
    name: string;
}

export interface VerifyEmailAddressRequest {
    verifyEmailAddressOptions: VerifyEmailAddressOptions;
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
     * @param {DescribeDomainOptions} describeDomainOptions 
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
     * @summary Lookup DNS records for a domain
     * @param {DNSLookupOptions} dNSLookupOptions 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailServerControllerApiInterface
     */
    getDnsLookupRaw(requestParameters: GetDnsLookupRequest): Promise<runtime.ApiResponse<DNSLookupResults>>;

    /**
     * Lookup DNS records for a domain
     */
    getDnsLookup(requestParameters: GetDnsLookupRequest): Promise<DNSLookupResults>;

    /**
     * 
     * @summary Get IP address for a domain
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailServerControllerApiInterface
     */
    getIpAddressRaw(requestParameters: GetIpAddressRequest): Promise<runtime.ApiResponse<IPAddressResult>>;

    /**
     * Get IP address for a domain
     */
    getIpAddress(requestParameters: GetIpAddressRequest): Promise<IPAddressResult>;

    /**
     * 
     * @summary Verify the existence of an email address at a given mail server.
     * @param {VerifyEmailAddressOptions} verifyEmailAddressOptions 
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
        if (requestParameters.describeDomainOptions === null || requestParameters.describeDomainOptions === undefined) {
            throw new runtime.RequiredError('describeDomainOptions','Required parameter requestParameters.describeDomainOptions was null or undefined when calling describeMailServerDomain.');
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
            body: DescribeDomainOptionsToJSON(requestParameters.describeDomainOptions),
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
     * Lookup DNS records for a domain
     */
    async getDnsLookupRaw(requestParameters: GetDnsLookupRequest): Promise<runtime.ApiResponse<DNSLookupResults>> {
        if (requestParameters.dNSLookupOptions === null || requestParameters.dNSLookupOptions === undefined) {
            throw new runtime.RequiredError('dNSLookupOptions','Required parameter requestParameters.dNSLookupOptions was null or undefined when calling getDnsLookup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/mail-server/describe/dns-lookup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DNSLookupOptionsToJSON(requestParameters.dNSLookupOptions),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DNSLookupResultsFromJSON(jsonValue));
    }

    /**
     * Lookup DNS records for a domain
     */
    async getDnsLookup(requestParameters: GetDnsLookupRequest): Promise<DNSLookupResults> {
        const response = await this.getDnsLookupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get IP address for a domain
     */
    async getIpAddressRaw(requestParameters: GetIpAddressRequest): Promise<runtime.ApiResponse<IPAddressResult>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getIpAddress.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = this.configuration.apiKey("x-api-key"); // API_KEY authentication
        }

        const response = await this.request({
            path: `/mail-server/describe/ip-address`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IPAddressResultFromJSON(jsonValue));
    }

    /**
     * Get IP address for a domain
     */
    async getIpAddress(requestParameters: GetIpAddressRequest): Promise<IPAddressResult> {
        const response = await this.getIpAddressRaw(requestParameters);
        return await response.value();
    }

    /**
     * Verify the existence of an email address at a given mail server.
     */
    async verifyEmailAddressRaw(requestParameters: VerifyEmailAddressRequest): Promise<runtime.ApiResponse<EmailVerificationResult>> {
        if (requestParameters.verifyEmailAddressOptions === null || requestParameters.verifyEmailAddressOptions === undefined) {
            throw new runtime.RequiredError('verifyEmailAddressOptions','Required parameter requestParameters.verifyEmailAddressOptions was null or undefined when calling verifyEmailAddress.');
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
            body: VerifyEmailAddressOptionsToJSON(requestParameters.verifyEmailAddressOptions),
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
