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
 * @interface AttachmentProjection
 */
export interface AttachmentProjection {
    /**
     * 
     * @type {string}
     * @memberof AttachmentProjection
     */
    name?: string;
    /**
     * Content length of attachment in bytes
     * @type {number}
     * @memberof AttachmentProjection
     */
    contentLength?: number;
    /**
     * Content type of attachment.
     * @type {string}
     * @memberof AttachmentProjection
     */
    contentType?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentProjection
     */
    userId?: string;
    /**
     * Attachment ID
     * @type {string}
     * @memberof AttachmentProjection
     */
    attachmentId?: string;
    /**
     * 
     * @type {Date}
     * @memberof AttachmentProjection
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AttachmentProjection
     */
    updatedAt?: Date;
}

export function AttachmentProjectionFromJSON(json: any): AttachmentProjection {
    return AttachmentProjectionFromJSONTyped(json, false);
}

export function AttachmentProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'contentLength': !exists(json, 'contentLength') ? undefined : json['contentLength'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'attachmentId': !exists(json, 'attachmentId') ? undefined : json['attachmentId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function AttachmentProjectionToJSON(value?: AttachmentProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'contentLength': value.contentLength,
        'contentType': value.contentType,
        'userId': value.userId,
        'attachmentId': value.attachmentId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


