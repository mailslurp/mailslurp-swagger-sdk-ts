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
 * @interface BounceRecipient
 */
export interface BounceRecipient {
    /**
     * 
     * @type {Date}
     * @memberof BounceRecipient
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof BounceRecipient
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BounceRecipient
     */
    recipient: string;
    /**
     * 
     * @type {Date}
     * @memberof BounceRecipient
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof BounceRecipient
     */
    userId: string;
}

export function BounceRecipientFromJSON(json: any): BounceRecipient {
    return BounceRecipientFromJSONTyped(json, false);
}

export function BounceRecipientFromJSONTyped(json: any, ignoreDiscriminator: boolean): BounceRecipient {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['createdAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'recipient': json['recipient'],
        'updatedAt': (new Date(json['updatedAt'])),
        'userId': json['userId'],
    };
}

export function BounceRecipientToJSON(value?: BounceRecipient | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': (value.createdAt.toISOString()),
        'id': value.id,
        'recipient': value.recipient,
        'updatedAt': (value.updatedAt.toISOString()),
        'userId': value.userId,
    };
}

