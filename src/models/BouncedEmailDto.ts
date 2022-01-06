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
 * Bounced email
 * @export
 * @interface BouncedEmailDto
 */
export interface BouncedEmailDto {
    /**
     * 
     * @type {string}
     * @memberof BouncedEmailDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BouncedEmailDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof BouncedEmailDto
     */
    notificationType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BouncedEmailDto
     */
    sentToRecipients?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BouncedEmailDto
     */
    sender?: string;
    /**
     * 
     * @type {string}
     * @memberof BouncedEmailDto
     */
    bounceMta?: string;
    /**
     * 
     * @type {string}
     * @memberof BouncedEmailDto
     */
    bounceType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BouncedEmailDto
     */
    bounceRecipients?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BouncedEmailDto
     */
    bounceSubType?: string;
    /**
     * 
     * @type {Date}
     * @memberof BouncedEmailDto
     */
    createdAt?: Date;
}

export function BouncedEmailDtoFromJSON(json: any): BouncedEmailDto {
    return BouncedEmailDtoFromJSONTyped(json, false);
}

export function BouncedEmailDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BouncedEmailDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'notificationType': !exists(json, 'notificationType') ? undefined : json['notificationType'],
        'sentToRecipients': !exists(json, 'sentToRecipients') ? undefined : json['sentToRecipients'],
        'sender': !exists(json, 'sender') ? undefined : json['sender'],
        'bounceMta': !exists(json, 'bounceMta') ? undefined : json['bounceMta'],
        'bounceType': !exists(json, 'bounceType') ? undefined : json['bounceType'],
        'bounceRecipients': !exists(json, 'bounceRecipients') ? undefined : json['bounceRecipients'],
        'bounceSubType': !exists(json, 'bounceSubType') ? undefined : json['bounceSubType'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function BouncedEmailDtoToJSON(value?: BouncedEmailDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'notificationType': value.notificationType,
        'sentToRecipients': value.sentToRecipients,
        'sender': value.sender,
        'bounceMta': value.bounceMta,
        'bounceType': value.bounceType,
        'bounceRecipients': value.bounceRecipients,
        'bounceSubType': value.bounceSubType,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}


