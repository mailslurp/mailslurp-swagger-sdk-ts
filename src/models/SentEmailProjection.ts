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
    id: string;
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
    userId: string;
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
    inboxId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    to: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    attachments: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof SentEmailProjection
     */
    createdAt: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    bcc: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailProjection
     */
    cc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SentEmailProjection
     */
    bodyMD5Hash?: string;
}

export function SentEmailProjectionFromJSON(json: any): SentEmailProjection {
    return SentEmailProjectionFromJSONTyped(json, false);
}

export function SentEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentEmailProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'userId': json['userId'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'inboxId': json['inboxId'],
        'to': json['to'],
        'attachments': json['attachments'],
        'createdAt': (new Date(json['createdAt'])),
        'bcc': json['bcc'],
        'cc': json['cc'],
        'bodyMD5Hash': !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
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
        'inboxId': value.inboxId,
        'to': value.to,
        'attachments': value.attachments,
        'createdAt': (value.createdAt.toISOString()),
        'bcc': value.bcc,
        'cc': value.cc,
        'bodyMD5Hash': value.bodyMD5Hash,
    };
}


