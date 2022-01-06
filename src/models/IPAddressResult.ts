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
 * IP Address look up result for a given domain / hostname
 * @export
 * @interface IPAddressResult
 */
export interface IPAddressResult {
    /**
     * 
     * @type {string}
     * @memberof IPAddressResult
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof IPAddressResult
     */
    hostname: string;
}

export function IPAddressResultFromJSON(json: any): IPAddressResult {
    return IPAddressResultFromJSONTyped(json, false);
}

export function IPAddressResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): IPAddressResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'hostname': json['hostname'],
    };
}

export function IPAddressResultToJSON(value?: IPAddressResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'hostname': value.hostname,
    };
}


