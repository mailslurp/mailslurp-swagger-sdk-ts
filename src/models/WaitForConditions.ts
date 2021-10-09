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
    MatchOption,
    MatchOptionFromJSON,
    MatchOptionFromJSONTyped,
    MatchOptionToJSON,
} from './';

/**
 * Conditions that a `waitForXEmails` endpoint operates on. The methods wait until given conditions are met or a timeout is reached. If the conditions are met without needing to wait the results will be returned immediately. Can include `unreadOnly` to ignore already read emails that were returned in an API call or viewing in the dashboard. Can also include matches for emails containing `from`, `subject`, `hasAttachments` etc.
 * @export
 * @interface WaitForConditions
 */
export interface WaitForConditions {
    /**
     * ISO Date Time latest time of email to consider. Filter for matching emails that were received before this date
     * @type {Date}
     * @memberof WaitForConditions
     */
    before?: Date;
    /**
     * Number of results that should match conditions. Either exactly or at least this amount based on the `countType`. If count condition is not met and the timeout has not been reached the `waitFor` method will retry the operation.
     * @type {number}
     * @memberof WaitForConditions
     */
    count?: number;
    /**
     * How should the found count be compared to the expected count.
     * @type {string}
     * @memberof WaitForConditions
     */
    countType?: WaitForConditionsCountTypeEnum;
    /**
     * Max time in milliseconds to wait between retries if a `timeout` is specified.
     * @type {number}
     * @memberof WaitForConditions
     */
    delayTimeout?: number;
    /**
     * ID of inbox to search within and apply conditions to. Essentially filtering the emails found to give a count.
     * @type {string}
     * @memberof WaitForConditions
     */
    inboxId: string;
    /**
     * Conditions that should be matched for an email to qualify for results. Each condition will be applied in order to each email within an inbox to filter a result list of matching emails you are waiting for.
     * @type {Array<MatchOption>}
     * @memberof WaitForConditions
     */
    matches?: Array<MatchOption>;
    /**
     * ISO Date Time earliest time of email to consider. Filter for matching emails that were received after this date
     * @type {Date}
     * @memberof WaitForConditions
     */
    since?: Date;
    /**
     * Direction to sort matching emails by created time
     * @type {string}
     * @memberof WaitForConditions
     */
    sortDirection?: WaitForConditionsSortDirectionEnum;
    /**
     * Max time in milliseconds to retry the `waitFor` operation until conditions are met.
     * @type {number}
     * @memberof WaitForConditions
     */
    timeout: number;
    /**
     * Apply conditions only to **unread** emails. All emails begin with `read=false`. An email is marked `read=true` when an `EmailDto` representation of it has been returned to the user at least once. For example you have called `getEmail` or `waitForLatestEmail` etc., or you have viewed the email in the dashboard.
     * @type {boolean}
     * @memberof WaitForConditions
     */
    unreadOnly?: boolean;
}

export function WaitForConditionsFromJSON(json: any): WaitForConditions {
    return WaitForConditionsFromJSONTyped(json, false);
}

export function WaitForConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitForConditions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'before': !exists(json, 'before') ? undefined : (new Date(json['before'])),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'countType': !exists(json, 'countType') ? undefined : json['countType'],
        'delayTimeout': !exists(json, 'delayTimeout') ? undefined : json['delayTimeout'],
        'inboxId': json['inboxId'],
        'matches': !exists(json, 'matches') ? undefined : ((json['matches'] as Array<any>).map(MatchOptionFromJSON)),
        'since': !exists(json, 'since') ? undefined : (new Date(json['since'])),
        'sortDirection': !exists(json, 'sortDirection') ? undefined : json['sortDirection'],
        'timeout': json['timeout'],
        'unreadOnly': !exists(json, 'unreadOnly') ? undefined : json['unreadOnly'],
    };
}

export function WaitForConditionsToJSON(value?: WaitForConditions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'before': value.before === undefined ? undefined : (value.before.toISOString()),
        'count': value.count,
        'countType': value.countType,
        'delayTimeout': value.delayTimeout,
        'inboxId': value.inboxId,
        'matches': value.matches === undefined ? undefined : ((value.matches as Array<any>).map(MatchOptionToJSON)),
        'since': value.since === undefined ? undefined : (value.since.toISOString()),
        'sortDirection': value.sortDirection,
        'timeout': value.timeout,
        'unreadOnly': value.unreadOnly,
    };
}

/**
* @export
* @enum {string}
*/
export enum WaitForConditionsCountTypeEnum {
    EXACTLY = 'EXACTLY',
    ATLEAST = 'ATLEAST'
}
/**
* @export
* @enum {string}
*/
export enum WaitForConditionsSortDirectionEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}


