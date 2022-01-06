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
 * Links found in HTML
 * @export
 * @interface EmailLinksResult
 */
export interface EmailLinksResult {
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailLinksResult
     */
    links?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EmailLinksResult
     */
    body?: string;
}

export function EmailLinksResultFromJSON(json: any): EmailLinksResult {
    return EmailLinksResultFromJSONTyped(json, false);
}

export function EmailLinksResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailLinksResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : json['links'],
        'body': !exists(json, 'body') ? undefined : json['body'],
    };
}

export function EmailLinksResultToJSON(value?: EmailLinksResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links,
        'body': value.body,
    };
}


