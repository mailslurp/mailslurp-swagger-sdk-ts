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
 * Options for matching emails in an inbox. Each match option object contains a `field`, `should` and `value` property. Together they form logical conditions such as `SUBJECT` should `CONTAIN` value.
 * @export
 * @interface MatchOption
 */
export interface MatchOption {
    /**
     * The email property to match on. One of SUBJECT, TO, BCC, CC or FROM
     * @type {string}
     * @memberof MatchOption
     */
    field?: MatchOptionFieldEnum;
    /**
     * What criteria to apply. CONTAIN or EQUAL. Note CONTAIN is recommended due to some SMTP servers adding new lines to fields and body content.
     * @type {string}
     * @memberof MatchOption
     */
    should?: MatchOptionShouldEnum;
    /**
     * The value you wish to compare with the value of the field specified using the `should` value passed. For example `BODY` should `CONTAIN` a value passed.
     * @type {string}
     * @memberof MatchOption
     */
    value?: string;
}

export function MatchOptionFromJSON(json: any): MatchOption {
    return MatchOptionFromJSONTyped(json, false);
}

export function MatchOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': !exists(json, 'field') ? undefined : json['field'],
        'should': !exists(json, 'should') ? undefined : json['should'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function MatchOptionToJSON(value?: MatchOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': value.field,
        'should': value.should,
        'value': value.value,
    };
}

/**
* @export
* @enum {string}
*/
export enum MatchOptionFieldEnum {
    SUBJECT = 'SUBJECT',
    TO = 'TO',
    BCC = 'BCC',
    CC = 'CC',
    FROM = 'FROM'
}
/**
* @export
* @enum {string}
*/
export enum MatchOptionShouldEnum {
    CONTAIN = 'CONTAIN',
    EQUAL = 'EQUAL'
}


