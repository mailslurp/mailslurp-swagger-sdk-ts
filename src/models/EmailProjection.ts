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
 * A compact representation of a full email. Used in list endpoints to keep response sizes low. Body and attachments are not included. To get all fields of the email use the `getEmail` method with the email projection's ID. See `EmailDto` for documentation on projection properties.
 * @export
 * @interface EmailProjection
 */
export interface EmailProjection {
    /**
     * 
     * @type {string}
     * @memberof EmailProjection
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EmailProjection
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailProjection
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailProjection
     */
    inboxId: string;
    /**
     * 
     * @type {Date}
     * @memberof EmailProjection
     */
    createdAt: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    to: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    attachments?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    bcc?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailProjection
     */
    cc?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof EmailProjection
     */
    teamAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailProjection
     */
    read?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailProjection
     */
    bodyMD5Hash?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailProjection
     */
    bodyExcerpt?: string;
}

export function EmailProjectionFromJSON(json: any): EmailProjection {
    return EmailProjectionFromJSONTyped(json, false);
}

export function EmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'inboxId': json['inboxId'],
        'createdAt': (new Date(json['createdAt'])),
        'to': json['to'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'bcc': !exists(json, 'bcc') ? undefined : json['bcc'],
        'cc': !exists(json, 'cc') ? undefined : json['cc'],
        'teamAccess': !exists(json, 'teamAccess') ? undefined : json['teamAccess'],
        'read': !exists(json, 'read') ? undefined : json['read'],
        'bodyMD5Hash': !exists(json, 'bodyMD5Hash') ? undefined : json['bodyMD5Hash'],
        'bodyExcerpt': !exists(json, 'bodyExcerpt') ? undefined : json['bodyExcerpt'],
    };
}

export function EmailProjectionToJSON(value?: EmailProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'from': value.from,
        'subject': value.subject,
        'inboxId': value.inboxId,
        'createdAt': (value.createdAt.toISOString()),
        'to': value.to,
        'attachments': value.attachments,
        'bcc': value.bcc,
        'cc': value.cc,
        'teamAccess': value.teamAccess,
        'read': value.read,
        'bodyMD5Hash': value.bodyMD5Hash,
        'bodyExcerpt': value.bodyExcerpt,
    };
}


