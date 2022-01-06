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
 * @interface UpdateGroupContacts
 */
export interface UpdateGroupContacts {
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateGroupContacts
     */
    contactIds?: Array<string>;
}

export function UpdateGroupContactsFromJSON(json: any): UpdateGroupContacts {
    return UpdateGroupContactsFromJSONTyped(json, false);
}

export function UpdateGroupContactsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGroupContacts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactIds': !exists(json, 'contactIds') ? undefined : json['contactIds'],
    };
}

export function UpdateGroupContactsToJSON(value?: UpdateGroupContacts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contactIds': value.contactIds,
    };
}


