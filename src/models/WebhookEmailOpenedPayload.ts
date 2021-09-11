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
 * EMAIL_OPENED webhook payload. Sent to your webhook url endpoint via HTTP POST when an email containing a tracking pixel is opened and the pixel image is loaded by a reader.
 * @export
 * @interface WebhookEmailOpenedPayload
 */
export interface WebhookEmailOpenedPayload {
    /**
     * Date time of event creation
     * @type {Date}
     * @memberof WebhookEmailOpenedPayload
     */
    createdAt?: Date;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    eventName?: WebhookEmailOpenedPayloadEventNameEnum;
    /**
     * Id of the inbox that received an email
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    inboxId?: string;
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    messageId?: string;
    /**
     * ID of the tracking pixel
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    pixelId?: string;
    /**
     * Email address for the recipient of the tracking pixel
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    recipient?: string;
    /**
     * ID of sent email
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    sentEmailId?: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    webhookId?: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookEmailOpenedPayload
     */
    webhookName?: string;
}

export function WebhookEmailOpenedPayloadFromJSON(json: any): WebhookEmailOpenedPayload {
    return WebhookEmailOpenedPayloadFromJSONTyped(json, false);
}

export function WebhookEmailOpenedPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEmailOpenedPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'eventName': !exists(json, 'eventName') ? undefined : json['eventName'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'pixelId': !exists(json, 'pixelId') ? undefined : json['pixelId'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
        'sentEmailId': !exists(json, 'sentEmailId') ? undefined : json['sentEmailId'],
        'webhookId': !exists(json, 'webhookId') ? undefined : json['webhookId'],
        'webhookName': !exists(json, 'webhookName') ? undefined : json['webhookName'],
    };
}

export function WebhookEmailOpenedPayloadToJSON(value?: WebhookEmailOpenedPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'eventName': value.eventName,
        'inboxId': value.inboxId,
        'messageId': value.messageId,
        'pixelId': value.pixelId,
        'recipient': value.recipient,
        'sentEmailId': value.sentEmailId,
        'webhookId': value.webhookId,
        'webhookName': value.webhookName,
    };
}

/**
* @export
* @enum {string}
*/
export enum WebhookEmailOpenedPayloadEventNameEnum {
    EMAILRECEIVED = 'EMAIL_RECEIVED',
    NEWEMAIL = 'NEW_EMAIL',
    NEWCONTACT = 'NEW_CONTACT',
    NEWATTACHMENT = 'NEW_ATTACHMENT',
    EMAILOPENED = 'EMAIL_OPENED',
    EMAILREAD = 'EMAIL_READ'
}


