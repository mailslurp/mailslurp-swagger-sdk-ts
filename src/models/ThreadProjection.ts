/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.   ## Resources - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
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
 * A thread is a message thread created for a message received by an alias
 * @export
 * @interface ThreadProjection
 */
export interface ThreadProjection {
    /**
     * 
     * @type {string}
     * @memberof ThreadProjection
     */
    aliasId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ThreadProjection
     */
    bcc?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ThreadProjection
     */
    cc?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof ThreadProjection
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ThreadProjection
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadProjection
     */
    inboxId: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadProjection
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadProjection
     */
    subject?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ThreadProjection
     */
    to: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof ThreadProjection
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ThreadProjection
     */
    userId: string;
}

export function ThreadProjectionFromJSON(json: any): ThreadProjection {
    return ThreadProjectionFromJSONTyped(json, false);
}

export function ThreadProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aliasId': json['aliasId'],
        'bcc': !exists(json, 'bcc') ? undefined : json['bcc'],
        'cc': !exists(json, 'cc') ? undefined : json['cc'],
        'createdAt': (new Date(json['createdAt'])),
        'id': json['id'],
        'inboxId': json['inboxId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'to': json['to'],
        'updatedAt': (new Date(json['updatedAt'])),
        'userId': json['userId'],
    };
}

export function ThreadProjectionToJSON(value?: ThreadProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aliasId': value.aliasId,
        'bcc': value.bcc,
        'cc': value.cc,
        'createdAt': (value.createdAt.toISOString()),
        'id': value.id,
        'inboxId': value.inboxId,
        'name': value.name,
        'subject': value.subject,
        'to': value.to,
        'updatedAt': (value.updatedAt.toISOString()),
        'userId': value.userId,
    };
}


