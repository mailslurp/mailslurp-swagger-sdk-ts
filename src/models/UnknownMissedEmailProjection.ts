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
 * @interface UnknownMissedEmailProjection
 */
export interface UnknownMissedEmailProjection {
    /**
     * 
     * @type {string}
     * @memberof UnknownMissedEmailProjection
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UnknownMissedEmailProjection
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof UnknownMissedEmailProjection
     */
    subject?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UnknownMissedEmailProjection
     */
    to?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof UnknownMissedEmailProjection
     */
    createdAt: Date;
}

export function UnknownMissedEmailProjectionFromJSON(json: any): UnknownMissedEmailProjection {
    return UnknownMissedEmailProjectionFromJSONTyped(json, false);
}

export function UnknownMissedEmailProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnknownMissedEmailProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function UnknownMissedEmailProjectionToJSON(value?: UnknownMissedEmailProjection | null): any {
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
        'to': value.to,
        'createdAt': (value.createdAt.toISOString()),
    };
}


