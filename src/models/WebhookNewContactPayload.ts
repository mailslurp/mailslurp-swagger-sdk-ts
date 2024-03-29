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
 * NEW_CONTACT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains a recipient that has not been saved as a contact.
 * @export
 * @interface WebhookNewContactPayload
 */
export interface WebhookNewContactPayload {
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    messageId: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    webhookId: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    webhookName?: string;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    eventName: WebhookNewContactPayloadEventNameEnum;
    /**
     * 
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    contactId: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    groupId?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookNewContactPayload
     */
    primaryEmailAddress?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookNewContactPayload
     */
    emailAddresses: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookNewContactPayload
     */
    tags: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof WebhookNewContactPayload
     */
    metaData?: object;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookNewContactPayload
     */
    optOut?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof WebhookNewContactPayload
     */
    createdAt: Date;
}

export function WebhookNewContactPayloadFromJSON(json: any): WebhookNewContactPayload {
    return WebhookNewContactPayloadFromJSONTyped(json, false);
}

export function WebhookNewContactPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookNewContactPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messageId': json['messageId'],
        'webhookId': json['webhookId'],
        'webhookName': !exists(json, 'webhookName') ? undefined : json['webhookName'],
        'eventName': json['eventName'],
        'contactId': json['contactId'],
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'primaryEmailAddress': !exists(json, 'primaryEmailAddress') ? undefined : json['primaryEmailAddress'],
        'emailAddresses': json['emailAddresses'],
        'tags': json['tags'],
        'metaData': !exists(json, 'metaData') ? undefined : json['metaData'],
        'optOut': !exists(json, 'optOut') ? undefined : json['optOut'],
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function WebhookNewContactPayloadToJSON(value?: WebhookNewContactPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messageId': value.messageId,
        'webhookId': value.webhookId,
        'webhookName': value.webhookName,
        'eventName': value.eventName,
        'contactId': value.contactId,
        'groupId': value.groupId,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'company': value.company,
        'primaryEmailAddress': value.primaryEmailAddress,
        'emailAddresses': value.emailAddresses,
        'tags': value.tags,
        'metaData': value.metaData,
        'optOut': value.optOut,
        'createdAt': (value.createdAt.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum WebhookNewContactPayloadEventNameEnum {
    EMAILRECEIVED = 'EMAIL_RECEIVED',
    NEWEMAIL = 'NEW_EMAIL',
    NEWCONTACT = 'NEW_CONTACT',
    NEWATTACHMENT = 'NEW_ATTACHMENT',
    EMAILOPENED = 'EMAIL_OPENED',
    EMAILREAD = 'EMAIL_READ'
}


