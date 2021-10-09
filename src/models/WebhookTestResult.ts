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

import { exists, mapValues } from '../runtime';
import {
    WebhookTestRequest,
    WebhookTestRequestFromJSON,
    WebhookTestRequestFromJSONTyped,
    WebhookTestRequestToJSON,
    WebhookTestResponse,
    WebhookTestResponseFromJSON,
    WebhookTestResponseFromJSONTyped,
    WebhookTestResponseToJSON,
} from './';

/**
 * Results of testing a webhook
 * @export
 * @interface WebhookTestResult
 */
export interface WebhookTestResult {
    /**
     * 
     * @type {string}
     * @memberof WebhookTestResult
     */
    message?: string;
    /**
     * 
     * @type {WebhookTestRequest}
     * @memberof WebhookTestResult
     */
    request: WebhookTestRequest;
    /**
     * 
     * @type {WebhookTestResponse}
     * @memberof WebhookTestResult
     */
    response: WebhookTestResponse;
}

export function WebhookTestResultFromJSON(json: any): WebhookTestResult {
    return WebhookTestResultFromJSONTyped(json, false);
}

export function WebhookTestResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTestResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'request': WebhookTestRequestFromJSON(json['request']),
        'response': WebhookTestResponseFromJSON(json['response']),
    };
}

export function WebhookTestResultToJSON(value?: WebhookTestResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'request': WebhookTestRequestToJSON(value.request),
        'response': WebhookTestResponseToJSON(value.response),
    };
}


