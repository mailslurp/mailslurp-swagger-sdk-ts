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
 * Representation of a MailSlurp inbox. An inbox has an ID and a real email address. Emails can be sent to or from this email address. Inboxes are either `SMTP` or `HTTP` mailboxes. The default, `HTTP` inboxes, use AWS SES to process emails and are best suited as test email accounts. `SMTP` inboxes use a custom mail server at `mx.mailslurp.com` and can only receive emails - they  are best used for public facing email addresses. Use the `EmailController` or the `InboxController` methods to send and receive emails and attachments. Inboxes may have a description, name, and tags for display purposes. You can also favourite an inbox for easier searching. Inboxes can be private or allow team access. Team access enabled inboxes can be seen by other members of an organization. 
 * @export
 * @interface Inbox
 */
export interface Inbox {
    /**
     * When the inbox was created. Time stamps are in ISO DateTime Format `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` e.g. `2000-10-31T01:30:00.000-05:00`.
     * @type {Date}
     * @memberof Inbox
     */
    createdAt?: Date;
    /**
     * Description of an inbox for labelling and searching purposes
     * @type {string}
     * @memberof Inbox
     */
    description?: string;
    /**
     * The inbox's email address. Inbox projections and previews may not include the email address. To view the email address fetch the inbox entity directly. Send an email to this address and the inbox will receive and store it for you. Note the email address in MailSlurp match characters exactly and are case sensitive so `+123` additions are considered different addresses. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type {string}
     * @memberof Inbox
     */
    emailAddress?: string;
    /**
     * Inbox expiration time. When, if ever, the inbox should expire and be deleted. If null then this inbox is permanent and the emails in it won't be deleted. This is the default behavior unless expiration date is set. If an expiration date is set and the time is reached MailSlurp will expire the inbox and move it to an expired inbox entity. You can still access the emails belonging to it but it can no longer send or receive email.
     * @type {string}
     * @memberof Inbox
     */
    expiresAt?: string;
    /**
     * Is the inbox a favorite inbox. Make an inbox a favorite is typically done in the dashboard for quick access or filtering
     * @type {boolean}
     * @memberof Inbox
     */
    favourite?: boolean;
    /**
     * ID of the inbox. The ID is a UUID-V4 format string. Use the inboxId for calls to Inbox and Email Controller endpoints. See the emailAddress property for the email address or the inbox. To get emails in an inbox use the WaitFor and Inbox Controller methods `waitForLatestEmail` and `getEmails` methods respectively. Inboxes can be used with aliases to forward emails automatically.
     * @type {string}
     * @memberof Inbox
     */
    id?: string;
    /**
     * Type of inbox - either HTTP (default) or SMTP. HTTP inboxes are great most cases. SMTP inboxes are receive only (cannot send) and are processed by a custom SMTP mail server and are better for public facing inboxes that receive emails from Gmail and other large providers. If using a custom domain the domain type must match the inbox type. Use an SMTP domain for SMTP inboxes that includes an MX record pointing to `10 mx.mailslurp.com` for inbound messages.
     * @type {string}
     * @memberof Inbox
     */
    inboxType?: InboxInboxTypeEnum;
    /**
     * Name of the inbox and used as the sender name when sending emails .Displayed in the dashboard for easier search
     * @type {string}
     * @memberof Inbox
     */
    name?: string;
    /**
     * Is the inbox readOnly for the caller. Read only means can not be deleted or modified. This flag is present when using team accounts and shared inboxes.
     * @type {boolean}
     * @memberof Inbox
     */
    readOnly?: boolean;
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type {Array<string>}
     * @memberof Inbox
     */
    tags?: Array<string>;
    /**
     * Does inbox permit team access for organization team members. If so team users can use inbox and emails associated with it. See the team access guide at https://www.mailslurp.com/guides/team-email-account-sharing/
     * @type {boolean}
     * @memberof Inbox
     */
    teamAccess?: boolean;
    /**
     * ID of user that inbox belongs to
     * @type {string}
     * @memberof Inbox
     */
    userId?: string;
}

export function InboxFromJSON(json: any): Inbox {
    return InboxFromJSONTyped(json, false);
}

export function InboxFromJSONTyped(json: any, ignoreDiscriminator: boolean): Inbox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'expiresAt': !exists(json, 'expiresAt') ? undefined : json['expiresAt'],
        'favourite': !exists(json, 'favourite') ? undefined : json['favourite'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inboxType': !exists(json, 'inboxType') ? undefined : json['inboxType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'teamAccess': !exists(json, 'teamAccess') ? undefined : json['teamAccess'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function InboxToJSON(value?: Inbox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'description': value.description,
        'emailAddress': value.emailAddress,
        'expiresAt': value.expiresAt,
        'favourite': value.favourite,
        'id': value.id,
        'inboxType': value.inboxType,
        'name': value.name,
        'readOnly': value.readOnly,
        'tags': value.tags,
        'teamAccess': value.teamAccess,
        'userId': value.userId,
    };
}

/**
* @export
* @enum {string}
*/
export enum InboxInboxTypeEnum {
    HTTPINBOX = 'HTTP_INBOX',
    SMTPINBOX = 'SMTP_INBOX'
}


