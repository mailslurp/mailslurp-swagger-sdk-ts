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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface WebhookResultDto
 */
export interface WebhookResultDto {
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    inboxId: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    webhookId: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    webhookUrl: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    messageId: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    redriveId?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    httpMethod: WebhookResultDtoHttpMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    webhookEvent: WebhookResultDtoWebhookEventEnum;
    /**
     * 
     * @type {number}
     * @memberof WebhookResultDto
     */
    responseStatus?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhookResultDto
     */
    responseTimeMillis: number;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    responseBodyExtract?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookResultDto
     */
    resultType?: WebhookResultDtoResultTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof WebhookResultDto
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof WebhookResultDto
     */
    updatedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookResultDto
     */
    seen?: boolean;
}

export function WebhookResultDtoFromJSON(json: any): WebhookResultDto {
    return WebhookResultDtoFromJSONTyped(json, false);
}

export function WebhookResultDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookResultDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': json['userId'],
        'inboxId': json['inboxId'],
        'webhookId': json['webhookId'],
        'webhookUrl': json['webhookUrl'],
        'messageId': json['messageId'],
        'redriveId': !exists(json, 'redriveId') ? undefined : json['redriveId'],
        'httpMethod': json['httpMethod'],
        'webhookEvent': json['webhookEvent'],
        'responseStatus': !exists(json, 'responseStatus') ? undefined : json['responseStatus'],
        'responseTimeMillis': json['responseTimeMillis'],
        'responseBodyExtract': !exists(json, 'responseBodyExtract') ? undefined : json['responseBodyExtract'],
        'resultType': !exists(json, 'resultType') ? undefined : json['resultType'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'seen': !exists(json, 'seen') ? undefined : json['seen'],
    };
}

export function WebhookResultDtoToJSON(value?: WebhookResultDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'inboxId': value.inboxId,
        'webhookId': value.webhookId,
        'webhookUrl': value.webhookUrl,
        'messageId': value.messageId,
        'redriveId': value.redriveId,
        'httpMethod': value.httpMethod,
        'webhookEvent': value.webhookEvent,
        'responseStatus': value.responseStatus,
        'responseTimeMillis': value.responseTimeMillis,
        'responseBodyExtract': value.responseBodyExtract,
        'resultType': value.resultType,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'seen': value.seen,
    };
}

/**
* @export
* @enum {string}
*/
export enum WebhookResultDtoHttpMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    OPTIONS = 'OPTIONS',
    TRACE = 'TRACE'
}
/**
* @export
* @enum {string}
*/
export enum WebhookResultDtoWebhookEventEnum {
    EMAILRECEIVED = 'EMAIL_RECEIVED',
    NEWEMAIL = 'NEW_EMAIL',
    NEWCONTACT = 'NEW_CONTACT',
    NEWATTACHMENT = 'NEW_ATTACHMENT',
    EMAILOPENED = 'EMAIL_OPENED',
    EMAILREAD = 'EMAIL_READ'
}
/**
* @export
* @enum {string}
*/
export enum WebhookResultDtoResultTypeEnum {
    BADRESPONSE = 'BAD_RESPONSE',
    EXCEPTION = 'EXCEPTION',
    SUCCESS = 'SUCCESS'
}


