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
 * Expiration defaults for your account
 * @export
 * @interface ExpirationDefaults
 */
export interface ExpirationDefaults {
    /**
     * 
     * @type {boolean}
     * @memberof ExpirationDefaults
     */
    canPermanentInbox: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExpirationDefaults
     */
    defaultExpirationMillis?: number;
    /**
     * 
     * @type {Date}
     * @memberof ExpirationDefaults
     */
    defaultExpiresAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof ExpirationDefaults
     */
    maxExpirationMillis?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ExpirationDefaults
     */
    nextInboxAllowsPermanent: boolean;
}

export function ExpirationDefaultsFromJSON(json: any): ExpirationDefaults {
    return ExpirationDefaultsFromJSONTyped(json, false);
}

export function ExpirationDefaultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExpirationDefaults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canPermanentInbox': json['canPermanentInbox'],
        'defaultExpirationMillis': !exists(json, 'defaultExpirationMillis') ? undefined : json['defaultExpirationMillis'],
        'defaultExpiresAt': !exists(json, 'defaultExpiresAt') ? undefined : (new Date(json['defaultExpiresAt'])),
        'maxExpirationMillis': !exists(json, 'maxExpirationMillis') ? undefined : json['maxExpirationMillis'],
        'nextInboxAllowsPermanent': json['nextInboxAllowsPermanent'],
    };
}

export function ExpirationDefaultsToJSON(value?: ExpirationDefaults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canPermanentInbox': value.canPermanentInbox,
        'defaultExpirationMillis': value.defaultExpirationMillis,
        'defaultExpiresAt': value.defaultExpiresAt === undefined ? undefined : (value.defaultExpiresAt.toISOString()),
        'maxExpirationMillis': value.maxExpirationMillis,
        'nextInboxAllowsPermanent': value.nextInboxAllowsPermanent,
    };
}


