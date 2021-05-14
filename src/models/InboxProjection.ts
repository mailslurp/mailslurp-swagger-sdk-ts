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
 * @interface InboxProjection
 */
export interface InboxProjection {
    /**
     * 
     * @type {Date}
     * @memberof InboxProjection
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof InboxProjection
     */
    emailAddress?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InboxProjection
     */
    favourite: boolean;
    /**
     * 
     * @type {string}
     * @memberof InboxProjection
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof InboxProjection
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InboxProjection
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof InboxProjection
     */
    teamAccess: boolean;
}

export function InboxProjectionFromJSON(json: any): InboxProjection {
    return InboxProjectionFromJSONTyped(json, false);
}

export function InboxProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InboxProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['createdAt'])),
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'favourite': json['favourite'],
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'teamAccess': json['teamAccess'],
    };
}

export function InboxProjectionToJSON(value?: InboxProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': (value.createdAt.toISOString()),
        'emailAddress': value.emailAddress,
        'favourite': value.favourite,
        'id': value.id,
        'name': value.name,
        'tags': value.tags,
        'teamAccess': value.teamAccess,
    };
}


