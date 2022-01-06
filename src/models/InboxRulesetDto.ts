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
 * @interface InboxRulesetDto
 */
export interface InboxRulesetDto {
    /**
     * 
     * @type {string}
     * @memberof InboxRulesetDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InboxRulesetDto
     */
    inboxId?: string;
    /**
     * 
     * @type {string}
     * @memberof InboxRulesetDto
     */
    scope?: InboxRulesetDtoScopeEnum;
    /**
     * 
     * @type {string}
     * @memberof InboxRulesetDto
     */
    action?: InboxRulesetDtoActionEnum;
    /**
     * 
     * @type {string}
     * @memberof InboxRulesetDto
     */
    target?: string;
    /**
     * 
     * @type {string}
     * @memberof InboxRulesetDto
     */
    handler?: InboxRulesetDtoHandlerEnum;
    /**
     * 
     * @type {Date}
     * @memberof InboxRulesetDto
     */
    createdAt?: Date;
}

export function InboxRulesetDtoFromJSON(json: any): InboxRulesetDto {
    return InboxRulesetDtoFromJSONTyped(json, false);
}

export function InboxRulesetDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxRulesetDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'action': !exists(json, 'action') ? undefined : json['action'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'handler': !exists(json, 'handler') ? undefined : json['handler'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function InboxRulesetDtoToJSON(value?: InboxRulesetDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'inboxId': value.inboxId,
        'scope': value.scope,
        'action': value.action,
        'target': value.target,
        'handler': value.handler,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum InboxRulesetDtoScopeEnum {
    RECEIVINGEMAILS = 'RECEIVING_EMAILS',
    SENDINGEMAILS = 'SENDING_EMAILS'
}
/**
* @export
* @enum {string}
*/
export enum InboxRulesetDtoActionEnum {
    BLOCK = 'BLOCK',
    ALLOW = 'ALLOW',
    FILTERREMOVE = 'FILTER_REMOVE'
}
/**
* @export
* @enum {string}
*/
export enum InboxRulesetDtoHandlerEnum {
    EXCEPTION = 'EXCEPTION'
}


