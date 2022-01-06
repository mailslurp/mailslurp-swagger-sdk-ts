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
 * @interface GravatarUrl
 */
export interface GravatarUrl {
    /**
     * 
     * @type {string}
     * @memberof GravatarUrl
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof GravatarUrl
     */
    hash?: string;
}

export function GravatarUrlFromJSON(json: any): GravatarUrl {
    return GravatarUrlFromJSONTyped(json, false);
}

export function GravatarUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): GravatarUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
    };
}

export function GravatarUrlToJSON(value?: GravatarUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'hash': value.hash,
    };
}


