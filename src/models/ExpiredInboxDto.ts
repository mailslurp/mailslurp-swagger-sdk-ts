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
 * Expired inbox
 * @export
 * @interface ExpiredInboxDto
 */
export interface ExpiredInboxDto {
    /**
     * 
     * @type {string}
     * @memberof ExpiredInboxDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpiredInboxDto
     */
    inboxId?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpiredInboxDto
     */
    emailAddress?: string;
}

export function ExpiredInboxDtoFromJSON(json: any): ExpiredInboxDto {
    return ExpiredInboxDtoFromJSONTyped(json, false);
}

export function ExpiredInboxDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpiredInboxDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inboxId': !exists(json, 'inboxId') ? undefined : json['inboxId'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
    };
}

export function ExpiredInboxDtoToJSON(value?: ExpiredInboxDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'inboxId': value.inboxId,
        'emailAddress': value.emailAddress,
    };
}


