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
 * Options for creating an inbox. An inbox has a real email address that can send and receive emails. Inboxes can be permanent or expire at a given time. They can use a custom email address (by verifying your own domain) or a randomly assigned email ending in either `mailslurp.com` or if `useDomainPool` is enabled then ending in a similar domains such as `mailslurp.xyz` (selected at random). 
 * @export
 * @interface CreateInboxDto
 */
export interface CreateInboxDto {
    /**
     * Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @type {boolean}
     * @memberof CreateInboxDto
     */
    allowTeamAccess?: boolean;
    /**
     * Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @type {string}
     * @memberof CreateInboxDto
     */
    description?: string;
    /**
     * A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as `123@mailslurp.com`. If you use the `useDomainPool` option when the email address is null it will generate an email address with a more varied domain ending such as `123@mailslurp.info` or `123@mailslurp.biz`. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type {string}
     * @memberof CreateInboxDto
     */
    emailAddress?: string;
    /**
     * Optional inbox expiration date. If null then this inbox is permanent and the emails in it won't be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd'T'HH:mm:ss.SSSXXX.
     * @type {Date}
     * @memberof CreateInboxDto
     */
    expiresAt?: Date;
    /**
     * Number of milliseconds that inbox should exist for
     * @type {number}
     * @memberof CreateInboxDto
     */
    expiresIn?: number;
    /**
     * Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access or filtering
     * @type {boolean}
     * @memberof CreateInboxDto
     */
    favourite?: boolean;
    /**
     * HTTP or SMTP inbox
     * @type {string}
     * @memberof CreateInboxDto
     */
    inboxType?: CreateInboxDtoInboxTypeEnum;
    /**
     * Optional name of the inbox. Displayed in the dashboard for easier search
     * @type {string}
     * @memberof CreateInboxDto
     */
    name?: string;
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type {Array<string>}
     * @memberof CreateInboxDto
     */
    tags?: Array<string>;
    /**
     * Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default `@mailslurp.com` email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in `@mailslurp.{world,info,xyz,...}` . This means a TLD is randomly selecting from a list of `.biz`, `.info`, `.xyz` etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of `@mailslurp.com` or custom email address provided by the emailAddress field.
     * @type {boolean}
     * @memberof CreateInboxDto
     */
    useDomainPool?: boolean;
}

export function CreateInboxDtoFromJSON(json: any): CreateInboxDto {
    return CreateInboxDtoFromJSONTyped(json, false);
}

export function CreateInboxDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInboxDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowTeamAccess': !exists(json, 'allowTeamAccess') ? undefined : json['allowTeamAccess'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'expiresAt': !exists(json, 'expiresAt') ? undefined : (new Date(json['expiresAt'])),
        'expiresIn': !exists(json, 'expiresIn') ? undefined : json['expiresIn'],
        'favourite': !exists(json, 'favourite') ? undefined : json['favourite'],
        'inboxType': !exists(json, 'inboxType') ? undefined : json['inboxType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'useDomainPool': !exists(json, 'useDomainPool') ? undefined : json['useDomainPool'],
    };
}

export function CreateInboxDtoToJSON(value?: CreateInboxDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowTeamAccess': value.allowTeamAccess,
        'description': value.description,
        'emailAddress': value.emailAddress,
        'expiresAt': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'expiresIn': value.expiresIn,
        'favourite': value.favourite,
        'inboxType': value.inboxType,
        'name': value.name,
        'tags': value.tags,
        'useDomainPool': value.useDomainPool,
    };
}

/**
* @export
* @enum {string}
*/
export enum CreateInboxDtoInboxTypeEnum {
    HTTPINBOX = 'HTTP_INBOX',
    SMTPINBOX = 'SMTP_INBOX'
}


