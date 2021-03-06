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
 * @interface TrackingPixelProjection
 */
export interface TrackingPixelProjection {
    /**
     * 
     * @type {Date}
     * @memberof TrackingPixelProjection
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof TrackingPixelProjection
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof TrackingPixelProjection
     */
    inboxId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackingPixelProjection
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackingPixelProjection
     */
    recipient?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TrackingPixelProjection
     */
    seen: boolean;
    /**
     * 
     * @type {Date}
     * @memberof TrackingPixelProjection
     */
    seenAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof TrackingPixelProjection
     */
    sentEmailId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackingPixelProjection
     */
    userId: string;
}

export function TrackingPixelProjectionFromJSON(json: any): TrackingPixelProjection {
    return TrackingPixelProjectionFromJSONTyped(json, false);
}

export function TrackingPixelProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackingPixelProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['createdAt'])),
        'id': json['id'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
        'seen': json['seen'],
        'seenAt': !exists(json, 'seenAt') ? undefined : (new Date(json['seenAt'])),
        'sentEmailId': !exists(json, 'sentEmailId') ? undefined : json['sentEmailId'],
        'userId': json['userId'],
    };
}

export function TrackingPixelProjectionToJSON(value?: TrackingPixelProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': (value.createdAt.toISOString()),
        'id': value.id,
        'inboxId': value.inboxId,
        'name': value.name,
        'recipient': value.recipient,
        'seen': value.seen,
        'seenAt': value.seenAt === undefined ? undefined : (value.seenAt.toISOString()),
        'sentEmailId': value.sentEmailId,
        'userId': value.userId,
    };
}


