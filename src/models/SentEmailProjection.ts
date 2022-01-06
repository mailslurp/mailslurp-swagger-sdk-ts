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
 * Collection of items
 * @export
 * @interface SentEmailProjection
 */
export interface SentEmailProjection {
    /**
     * 
     * @type {string}
     * @memberof SentEmailProjection
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailProjection
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailProjection
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailProjection
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailProjection
     */
    bodyMD5Hash?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailProjection
     */
    inboxId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    to?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    attachments?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    bcc?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    cc?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof SentEmailProjection
     */
    createdAt?: Date;
}

export function SentEmailProjectionFromJSON(json: any): SentEmailProjection {
    return SentEmailProjectionFromJSONTyped(json, false);
}

export function SentEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentEmailProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'bodyMD5Hash': !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'bcc': !exists(json, 'bcc') ? undefined : json['bcc'],
        'cc': !exists(json, 'cc') ? undefined : json['cc'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function SentEmailProjectionToJSON(value?: SentEmailProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'from': value.from,
        'userId': value.userId,
        'subject': value.subject,
        'bodyMD5Hash': value.bodyMD5Hash,
        'inboxId': value.inboxId,
        'to': value.to,
        'attachments': value.attachments,
        'bcc': value.bcc,
        'cc': value.cc,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}


