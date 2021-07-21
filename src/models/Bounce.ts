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
 * @interface Bounce
 */
export interface Bounce {
    /**
     * 
     * @type {string}
     * @memberof Bounce
     */
    bounceMta?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Bounce
     */
    bounceRecipients?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Bounce
     */
    bounceSubType?: string;
    /**
     * 
     * @type {string}
     * @memberof Bounce
     */
    bounceType?: string;
    /**
     * 
     * @type {Date}
     * @memberof Bounce
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Bounce
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Bounce
     */
    notificationType: string;
    /**
     * 
     * @type {string}
     * @memberof Bounce
     */
    sender: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Bounce
     */
    sentToRecipients?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof Bounce
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Bounce
     */
    userId: string;
}

export function BounceFromJSON(json: any): Bounce {
    return BounceFromJSONTyped(json, false);
}

export function BounceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Bounce {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bounceMta': !exists(json, 'bounceMta') ? undefined : json['bounceMta'],
        'bounceRecipients': !exists(json, 'bounceRecipients') ? undefined : json['bounceRecipients'],
        'bounceSubType': !exists(json, 'bounceSubType') ? undefined : json['bounceSubType'],
        'bounceType': !exists(json, 'bounceType') ? undefined : json['bounceType'],
        'createdAt': (new Date(json['createdAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'notificationType': json['notificationType'],
        'sender': json['sender'],
        'sentToRecipients': !exists(json, 'sentToRecipients') ? undefined : json['sentToRecipients'],
        'updatedAt': (new Date(json['updatedAt'])),
        'userId': json['userId'],
    };
}

export function BounceToJSON(value?: Bounce | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bounceMta': value.bounceMta,
        'bounceRecipients': value.bounceRecipients,
        'bounceSubType': value.bounceSubType,
        'bounceType': value.bounceType,
        'createdAt': (value.createdAt.toISOString()),
        'id': value.id,
        'notificationType': value.notificationType,
        'sender': value.sender,
        'sentToRecipients': value.sentToRecipients,
        'updatedAt': (value.updatedAt.toISOString()),
        'userId': value.userId,
    };
}


