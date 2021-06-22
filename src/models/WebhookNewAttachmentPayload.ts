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
 * NEW_ATTACHMENT webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to that contains an attachment. You can use the attachmentId to download the attachment.
 * @export
 * @interface WebhookNewAttachmentPayload
 */
export interface WebhookNewAttachmentPayload {
    /**
     * ID of attachment. Use the `AttachmentController` to
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    attachmentId?: string;
    /**
     * Size of attachment in bytes
     * @type {number}
     * @memberof WebhookNewAttachmentPayload
     */
    contentLength?: number;
    /**
     * Content type of attachment such as 'image/png' or 'application/pdf
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    contentType?: string;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    eventName?: WebhookNewAttachmentPayloadEventNameEnum;
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    messageId?: string;
    /**
     * Filename of the attachment if present
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    name?: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    webhookId?: string;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookNewAttachmentPayload
     */
    webhookName?: string;
}

export function WebhookNewAttachmentPayloadFromJSON(json: any): WebhookNewAttachmentPayload {
    return WebhookNewAttachmentPayloadFromJSONTyped(json, false);
}

export function WebhookNewAttachmentPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookNewAttachmentPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachmentId': !exists(json, 'attachmentId') ? undefined : json['attachmentId'],
        'contentLength': !exists(json, 'contentLength') ? undefined : json['contentLength'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'eventName': !exists(json, 'eventName') ? undefined : json['eventName'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'webhookId': !exists(json, 'webhookId') ? undefined : json['webhookId'],
        'webhookName': !exists(json, 'webhookName') ? undefined : json['webhookName'],
    };
}

export function WebhookNewAttachmentPayloadToJSON(value?: WebhookNewAttachmentPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachmentId': value.attachmentId,
        'contentLength': value.contentLength,
        'contentType': value.contentType,
        'eventName': value.eventName,
        'messageId': value.messageId,
        'name': value.name,
        'webhookId': value.webhookId,
        'webhookName': value.webhookName,
    };
}

/**
* @export
* @enum {string}
*/
export enum WebhookNewAttachmentPayloadEventNameEnum {
    EMAILRECEIVED = 'EMAIL_RECEIVED',
    NEWEMAIL = 'NEW_EMAIL',
    NEWCONTACT = 'NEW_CONTACT',
    NEWATTACHMENT = 'NEW_ATTACHMENT'
}


