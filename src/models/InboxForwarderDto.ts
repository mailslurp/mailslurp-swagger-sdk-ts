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
 * @interface InboxForwarderDto
 */
export interface InboxForwarderDto {
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderDto
     */
    inboxId?: string;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderDto
     */
    field?: InboxForwarderDtoFieldEnum;
    /**
     * 
     * @type {string}
     * @memberof InboxForwarderDto
     */
    match?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InboxForwarderDto
     */
    forwardToRecipients?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof InboxForwarderDto
     */
    createdAt?: Date;
}

export function InboxForwarderDtoFromJSON(json: any): InboxForwarderDto {
    return InboxForwarderDtoFromJSONTyped(json, false);
}

export function InboxForwarderDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxForwarderDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'field': !exists(json, 'field') ? undefined : json['field'],
        'match': !exists(json, 'match') ? undefined : json['match'],
        'forwardToRecipients': !exists(json, 'forwardToRecipients') ? undefined : json['forwardToRecipients'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function InboxForwarderDtoToJSON(value?: InboxForwarderDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'inboxId': value.inboxId,
        'field': value.field,
        'match': value.match,
        'forwardToRecipients': value.forwardToRecipients,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum InboxForwarderDtoFieldEnum {
    RECIPIENTS = 'RECIPIENTS',
    SENDER = 'SENDER',
    SUBJECT = 'SUBJECT',
    ATTACHMENTS = 'ATTACHMENTS'
}


