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
 * Email alias representation
 * @export
 * @interface AliasDto
 */
export interface AliasDto {
    /**
     * 
     * @type {Date}
     * @memberof AliasDto
     */
    createdAt?: Date;
    /**
     * The alias's email address for receiving email
     * @type {string}
     * @memberof AliasDto
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof AliasDto
     */
    id: string;
    /**
     * Inbox that is associated with the alias
     * @type {string}
     * @memberof AliasDto
     */
    inboxId?: string;
    /**
     * Has the alias been verified. You must verify an alias if the masked email address has not yet been verified by your account
     * @type {boolean}
     * @memberof AliasDto
     */
    isVerified?: boolean;
    /**
     * The underlying email address that is hidden and will received forwarded email
     * @type {string}
     * @memberof AliasDto
     */
    maskedEmailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof AliasDto
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof AliasDto
     */
    updatedAt?: Date;
    /**
     * If alias will generate response threads or not when email are received by it
     * @type {boolean}
     * @memberof AliasDto
     */
    useThreads?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AliasDto
     */
    userId: string;
}

export function AliasDtoFromJSON(json: any): AliasDto {
    return AliasDtoFromJSONTyped(json, false);
}

export function AliasDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'id': json['id'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'isVerified': !exists(json, 'isVerified') ? undefined : json['isVerified'],
        'maskedEmailAddress': !exists(json, 'maskedEmailAddress') ? undefined : json['maskedEmailAddress'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'useThreads': !exists(json, 'useThreads') ? undefined : json['useThreads'],
        'userId': json['userId'],
    };
}

export function AliasDtoToJSON(value?: AliasDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'emailAddress': value.emailAddress,
        'id': value.id,
        'inboxId': value.inboxId,
        'isVerified': value.isVerified,
        'maskedEmailAddress': value.maskedEmailAddress,
        'name': value.name,
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'useThreads': value.useThreads,
        'userId': value.userId,
    };
}


