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
 * 
 * @export
 * @interface ExpiredInboxRecordProjection
 */
export interface ExpiredInboxRecordProjection {
    /**
     * 
     * @type {Date}
     * @memberof ExpiredInboxRecordProjection
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ExpiredInboxRecordProjection
     */
    emailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof ExpiredInboxRecordProjection
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ExpiredInboxRecordProjection
     */
    userId: string;
}

export function ExpiredInboxRecordProjectionFromJSON(json: any): ExpiredInboxRecordProjection {
    return ExpiredInboxRecordProjectionFromJSONTyped(json, false);
}

export function ExpiredInboxRecordProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpiredInboxRecordProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['createdAt'])),
        'emailAddress': json['emailAddress'],
        'id': json['id'],
        'userId': json['userId'],
    };
}

export function ExpiredInboxRecordProjectionToJSON(value?: ExpiredInboxRecordProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': (value.createdAt.toISOString()),
        'emailAddress': value.emailAddress,
        'id': value.id,
        'userId': value.userId,
    };
}


