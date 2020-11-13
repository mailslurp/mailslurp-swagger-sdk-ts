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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SentEmailDto
 */
export interface SentEmailDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    attachments?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    bcc?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    bodyMD5Hash?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    cc?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    charset?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    inboxId: string;
    /**
     * 
     * @type {boolean}
     * @memberof SentEmailDto
     */
    isHTML?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof SentEmailDto
     */
    sentAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    subject?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SentEmailDto
     */
    to?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SentEmailDto
     */
    userId: string;
}

export function SentEmailDtoFromJSON(json: any): SentEmailDto {
    return SentEmailDtoFromJSONTyped(json, false);
}

export function SentEmailDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentEmailDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'bcc': !exists(json, 'bcc') ? undefined : json['bcc'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'bodyMD5Hash': !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        'cc': !exists(json, 'cc') ? undefined : json['cc'],
        'charset': !exists(json, 'charset') ? undefined : json['charset'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'id': json['id'],
        'inboxId': json['inboxId'],
        'isHTML': !exists(json, 'isHTML') ? undefined : json['isHTML'],
        'sentAt': (new Date(json['sentAt'])),
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'userId': json['userId'],
    };
}

export function SentEmailDtoToJSON(value?: SentEmailDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachments': value.attachments,
        'bcc': value.bcc,
        'body': value.body,
        'bodyMD5Hash': value.bodyMD5Hash,
        'cc': value.cc,
        'charset': value.charset,
        'from': value.from,
        'id': value.id,
        'inboxId': value.inboxId,
        'isHTML': value.isHTML,
        'sentAt': (value.sentAt.toISOString()),
        'subject': value.subject,
        'to': value.to,
        'userId': value.userId,
    };
}


