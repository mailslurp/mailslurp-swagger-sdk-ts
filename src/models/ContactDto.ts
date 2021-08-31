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
 * @interface ContactDto
 */
export interface ContactDto {
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    company?: string;
    /**
     * 
     * @type {Date}
     * @memberof ContactDto
     */
    createdAt: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContactDto
     */
    emailAddresses: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    groupId?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    lastName?: string;
    /**
     * 
     * @type {object}
     * @memberof ContactDto
     */
    metaData?: object;
    /**
     * 
     * @type {boolean}
     * @memberof ContactDto
     */
    optOut?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContactDto
     */
    primaryEmailAddress?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContactDto
     */
    tags: Array<string>;
}

export function ContactDtoFromJSON(json: any): ContactDto {
    return ContactDtoFromJSONTyped(json, false);
}

export function ContactDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'createdAt': (new Date(json['createdAt'])),
        'emailAddresses': json['emailAddresses'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'id': json['id'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'metaData': !exists(json, 'metaData') ? undefined : json['metaData'],
        'optOut': !exists(json, 'optOut') ? undefined : json['optOut'],
        'primaryEmailAddress': !exists(json, 'primaryEmailAddress') ? undefined : json['primaryEmailAddress'],
        'tags': json['tags'],
    };
}

export function ContactDtoToJSON(value?: ContactDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'createdAt': (value.createdAt.toISOString()),
        'emailAddresses': value.emailAddresses,
        'firstName': value.firstName,
        'groupId': value.groupId,
        'id': value.id,
        'lastName': value.lastName,
        'metaData': value.metaData,
        'optOut': value.optOut,
        'primaryEmailAddress': value.primaryEmailAddress,
        'tags': value.tags,
    };
}


