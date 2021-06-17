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
 * Content of attachment
 * @export
 * @interface DownloadAttachmentDto
 */
export interface DownloadAttachmentDto {
    /**
     * Base64 encoded string of attachment bytes. Decode the base64 encoded string to get the raw contents. If the file has a content type such as `text/html` you can read the contents directly by converting it to string using `utf-8` encoding.
     * @type {string}
     * @memberof DownloadAttachmentDto
     */
    base64FileContents?: string;
    /**
     * Content type of attachment. Examples are `image/png`, `application/msword`, `text/csv` etc.
     * @type {string}
     * @memberof DownloadAttachmentDto
     */
    contentType?: string;
    /**
     * Size in bytes of attachment content
     * @type {number}
     * @memberof DownloadAttachmentDto
     */
    sizeBytes?: number;
}

export function DownloadAttachmentDtoFromJSON(json: any): DownloadAttachmentDto {
    return DownloadAttachmentDtoFromJSONTyped(json, false);
}

export function DownloadAttachmentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DownloadAttachmentDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'base64FileContents': !exists(json, 'base64FileContents') ? undefined : json['base64FileContents'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'sizeBytes': !exists(json, 'sizeBytes') ? undefined : json['sizeBytes'],
    };
}

export function DownloadAttachmentDtoToJSON(value?: DownloadAttachmentDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base64FileContents': value.base64FileContents,
        'contentType': value.contentType,
        'sizeBytes': value.sizeBytes,
    };
}


