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
 * 
 * @export
 * @interface ContactProjection
 */
export interface ContactProjection {
    /**
     * 
     * @type {string}
     * @memberof ContactProjection
     */
    company?: string;
    /**
     * 
     * @type {Date}
     * @memberof ContactProjection
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ContactProjection
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactProjection
     */
    groupId?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactProjection
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ContactProjection
     */
    lastName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ContactProjection
     */
    optOut?: boolean;
}

export function ContactProjectionFromJSON(json: any): ContactProjection {
    return ContactProjectionFromJSONTyped(json, false);
}

export function ContactProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'createdAt': (new Date(json['createdAt'])),
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'id': json['id'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'optOut': !exists(json, 'optOut') ? undefined : json['optOut'],
    };
}

export function ContactProjectionToJSON(value?: ContactProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'createdAt': (value.createdAt.toISOString()),
        'firstName': value.firstName,
        'groupId': value.groupId,
        'id': value.id,
        'lastName': value.lastName,
        'optOut': value.optOut,
    };
}


