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
import {
    AttachmentMetaData,
    AttachmentMetaDataFromJSON,
    AttachmentMetaDataFromJSONTyped,
    AttachmentMetaDataToJSON,
} from './';

/**
 * NEW_EMAIL webhook payload. Sent to your webhook url endpoint via HTTP POST when an email is received by the inbox that your webhook is attached to. Use the email ID to fetch the full email body or attachments.
 * @export
 * @interface WebhookNewEmailPayload
 */
export interface WebhookNewEmailPayload {
    /**
     * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    messageId: string;
    /**
     * ID of webhook entity being triggered
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    webhookId: string;
    /**
     * Name of the event type webhook is being triggered for.
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    eventName: WebhookNewEmailPayloadEventNameEnum;
    /**
     * Name of the webhook being triggered
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    webhookName?: string;
    /**
     * Id of the inbox that received an email
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    inboxId: string;
    /**
     * ID of the email that was received. Use this ID for fetching the email with the `EmailController`.
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    emailId: string;
    /**
     * Date time of event creation
     * @type {Date}
     * @memberof WebhookNewEmailPayload
     */
    createdAt: Date;
    /**
     * List of `To` recipient email addresses that the email was addressed to. See recipients object for names.
     * @type {Array<string>}
     * @memberof WebhookNewEmailPayload
     */
    to: Array<string>;
    /**
     * Who the email was sent from. An email address - see fromName for the sender name.
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    from: string;
    /**
     * List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.
     * @type {Array<string>}
     * @memberof WebhookNewEmailPayload
     */
    cc: Array<string>;
    /**
     * List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.
     * @type {Array<string>}
     * @memberof WebhookNewEmailPayload
     */
    bcc: Array<string>;
    /**
     * The subject line of the email message as specified by SMTP subject header
     * @type {string}
     * @memberof WebhookNewEmailPayload
     */
    subject?: string;
    /**
     * List of attachment meta data objects if attachments present
     * @type {Array<AttachmentMetaData>}
     * @memberof WebhookNewEmailPayload
     */
    attachmentMetaDatas: Array<AttachmentMetaData>;
}

export function WebhookNewEmailPayloadFromJSON(json: any): WebhookNewEmailPayload {
    return WebhookNewEmailPayloadFromJSONTyped(json, false);
}

export function WebhookNewEmailPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookNewEmailPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'messageId': json['messageId'],
        'webhookId': json['webhookId'],
        'eventName': json['eventName'],
        'webhookName': !exists(json, 'webhookName') ? undefined : json['webhookName'],
        'inboxId': json['inboxId'],
        'emailId': json['emailId'],
        'createdAt': (new Date(json['createdAt'])),
        'to': json['to'],
        'from': json['from'],
        'cc': json['cc'],
        'bcc': json['bcc'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'attachmentMetaDatas': ((json['attachmentMetaDatas'] as Array<any>).map(AttachmentMetaDataFromJSON)),
    };
}

export function WebhookNewEmailPayloadToJSON(value?: WebhookNewEmailPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'messageId': value.messageId,
        'webhookId': value.webhookId,
        'eventName': value.eventName,
        'webhookName': value.webhookName,
        'inboxId': value.inboxId,
        'emailId': value.emailId,
        'createdAt': (value.createdAt.toISOString()),
        'to': value.to,
        'from': value.from,
        'cc': value.cc,
        'bcc': value.bcc,
        'subject': value.subject,
        'attachmentMetaDatas': ((value.attachmentMetaDatas as Array<any>).map(AttachmentMetaDataToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum WebhookNewEmailPayloadEventNameEnum {
    EMAILRECEIVED = 'EMAIL_RECEIVED',
    NEWEMAIL = 'NEW_EMAIL',
    NEWCONTACT = 'NEW_CONTACT',
    NEWATTACHMENT = 'NEW_ATTACHMENT',
    EMAILOPENED = 'EMAIL_OPENED',
    EMAILREAD = 'EMAIL_READ'
}


