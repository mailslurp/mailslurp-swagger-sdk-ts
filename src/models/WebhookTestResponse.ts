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
/**
 * 
 * @export
 * @interface WebhookTestResponse
 */
export interface WebhookTestResponse {
    /**
     * 
     * @type {number}
     * @memberof WebhookTestResponse
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookTestResponse
     */
    message?: string;
}

export function WebhookTestResponseFromJSON(json: any): WebhookTestResponse {
    return WebhookTestResponseFromJSONTyped(json, false);
}

export function WebhookTestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function WebhookTestResponseToJSON(value?: WebhookTestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'message': value.message,
    };
}


