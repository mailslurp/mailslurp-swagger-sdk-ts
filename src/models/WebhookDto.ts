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
 * Representation of a webhook for an inbox. The URL specified will be using by MailSlurp whenever an email is received by the attached inbox. A webhook entity should have a URL that points to your server. Your server should accept HTTP/S POST requests and return a success 200. MailSlurp will retry your webhooks if they fail. See https://api.mailslurp.com/schemas/webhook-payload for the payload schema.
 * @export
 * @interface WebhookDto
 */
export interface WebhookDto {
    /**
     * ID of the Webhook
     * @type {string}
     * @memberof WebhookDto
     */
    id?: string;
    /**
     * User ID of the Webhook
     * @type {string}
     * @memberof WebhookDto
     */
    userId?: string;
    /**
     * Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.
     * @type {boolean}
     * @memberof WebhookDto
     */
    basicAuth?: boolean;
    /**
     * Name of the webhook
     * @type {string}
     * @memberof WebhookDto
     */
    name?: string;
    /**
     * The inbox that the Webhook will be triggered by
     * @type {string}
     * @memberof WebhookDto
     */
    inboxId?: string;
    /**
     * URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.
     * @type {string}
     * @memberof WebhookDto
     */
    url?: string;
    /**
     * HTTP method that your server endpoint must listen for
     * @type {string}
     * @memberof WebhookDto
     */
    method?: WebhookDtoMethodEnum;
    /**
     * Deprecated. Fetch JSON Schema for webhook using the getJsonSchemaForWebhookPayload method
     * @type {string}
     * @memberof WebhookDto
     */
    payloadJsonSchema?: string;
    /**
     * When the webhook was created
     * @type {Date}
     * @memberof WebhookDto
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WebhookDto
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof WebhookDto
     */
    eventName?: WebhookDtoEventNameEnum;
}

export function WebhookDtoFromJSON(json: any): WebhookDto {
    return WebhookDtoFromJSONTyped(json, false);
}

export function WebhookDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'basicAuth': !exists(json, 'basicAuth') ? undefined : json['basicAuth'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'payloadJsonSchema': !exists(json, 'payloadJsonSchema') ? undefined : json['payloadJsonSchema'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'eventName': !exists(json, 'eventName') ? undefined : json['eventName'],
    };
}

export function WebhookDtoToJSON(value?: WebhookDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'basicAuth': value.basicAuth,
        'name': value.name,
        'inboxId': value.inboxId,
        'url': value.url,
        'method': value.method,
        'payloadJsonSchema': value.payloadJsonSchema,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'eventName': value.eventName,
    };
}

/**
* @export
* @enum {string}
*/
export enum WebhookDtoMethodEnum {
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
export enum WebhookDtoEventNameEnum {
    EMAILRECEIVED = 'EMAIL_RECEIVED',
    NEWEMAIL = 'NEW_EMAIL',
    NEWCONTACT = 'NEW_CONTACT',
    NEWATTACHMENT = 'NEW_ATTACHMENT',
    EMAILOPENED = 'EMAIL_OPENED',
    EMAILREAD = 'EMAIL_READ'
}


