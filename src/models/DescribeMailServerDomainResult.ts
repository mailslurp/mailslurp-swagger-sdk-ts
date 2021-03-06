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
import {
    NameServerRecord,
    NameServerRecordFromJSON,
    NameServerRecordFromJSONTyped,
    NameServerRecordToJSON,
} from './';

/**
 * Name Server lookup result
 * @export
 * @interface DescribeMailServerDomainResult
 */
export interface DescribeMailServerDomainResult {
    /**
     * 
     * @type {string}
     * @memberof DescribeMailServerDomainResult
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof DescribeMailServerDomainResult
     */
    message?: string;
    /**
     * 
     * @type {Array<NameServerRecord>}
     * @memberof DescribeMailServerDomainResult
     */
    mxRecords: Array<NameServerRecord>;
}

export function DescribeMailServerDomainResultFromJSON(json: any): DescribeMailServerDomainResult {
    return DescribeMailServerDomainResultFromJSONTyped(json, false);
}

export function DescribeMailServerDomainResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeMailServerDomainResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': json['domain'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'mxRecords': ((json['mxRecords'] as Array<any>).map(NameServerRecordFromJSON)),
    };
}

export function DescribeMailServerDomainResultToJSON(value?: DescribeMailServerDomainResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': value.domain,
        'message': value.message,
        'mxRecords': ((value.mxRecords as Array<any>).map(NameServerRecordToJSON)),
    };
}


