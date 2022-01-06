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
 * @interface InboxPreview
 */
export interface InboxPreview {
    /**
     * ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.
     * @type {string}
     * @memberof InboxPreview
     */
    id?: string;
    /**
     * The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type {string}
     * @memberof InboxPreview
     */
    emailAddress?: string;
    /**
     * When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.
     * @type {Date}
     * @memberof InboxPreview
     */
    createdAt?: Date;
    /**
     * Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering
     * @type {boolean}
     * @memberof InboxPreview
     */
    favourite?: boolean;
    /**
     * Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search
     * @type {string}
     * @memberof InboxPreview
     */
    name?: string;
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type {Array<string>}
     * @memberof InboxPreview
     */
    tags?: Array<string>;
    /**
     * Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/
     * @type {boolean}
     * @memberof InboxPreview
     */
    teamAccess?: boolean;
    /**
     * Type of inbox. HTTP inboxes are faster and better for most cases. SMTP inboxes are more suited for public facing inbound messages (but cannot send).
     * @type {string}
     * @memberof InboxPreview
     */
    inboxType?: InboxPreviewInboxTypeEnum;
    /**
     * Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.
     * @type {string}
     * @memberof InboxPreview
     */
    expiresAt?: string;
}

export function InboxPreviewFromJSON(json: any): InboxPreview {
    return InboxPreviewFromJSONTyped(json, false);
}

export function InboxPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxPreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'favourite': !exists(json, 'favourite') ? undefined : json['favourite'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'teamAccess': !exists(json, 'teamAccess') ? undefined : json['teamAccess'],
        'inboxType': !exists(json, 'inboxType') ? undefined : json['inboxType'],
        'expiresAt': !exists(json, 'expiresAt') ? undefined : json['expiresAt'],
    };
}

export function InboxPreviewToJSON(value?: InboxPreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'emailAddress': value.emailAddress,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'favourite': value.favourite,
        'name': value.name,
        'tags': value.tags,
        'teamAccess': value.teamAccess,
        'inboxType': value.inboxType,
        'expiresAt': value.expiresAt,
    };
}

/**
* @export
* @enum {string}
*/
export enum InboxPreviewInboxTypeEnum {
    HTTPINBOX = 'HTTP_INBOX',
    SMTPINBOX = 'SMTP_INBOX'
}


