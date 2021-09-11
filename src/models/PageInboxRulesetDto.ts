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
    InboxRulesetDto,
    InboxRulesetDtoFromJSON,
    InboxRulesetDtoFromJSONTyped,
    InboxRulesetDtoToJSON,
    Pageable,
    PageableFromJSON,
    PageableFromJSONTyped,
    PageableToJSON,
    Sort,
    SortFromJSON,
    SortFromJSONTyped,
    SortToJSON,
} from './';

/**
 * Paginated inbox ruleset results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageInboxRulesetDto
 */
export interface PageInboxRulesetDto {
    /**
     * 
     * @type {Array<InboxRulesetDto>}
     * @memberof PageInboxRulesetDto
     */
    content?: Array<InboxRulesetDto>;
    /**
     * 
     * @type {boolean}
     * @memberof PageInboxRulesetDto
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageInboxRulesetDto
     */
    first?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageInboxRulesetDto
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    number?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    numberOfElements?: number;
    /**
     * 
     * @type {Pageable}
     * @memberof PageInboxRulesetDto
     */
    pageable?: Pageable;
    /**
     * 
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    size?: number;
    /**
     * 
     * @type {Sort}
     * @memberof PageInboxRulesetDto
     */
    sort?: Sort;
    /**
     * 
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInboxRulesetDto
     */
    totalPages?: number;
}

export function PageInboxRulesetDtoFromJSON(json: any): PageInboxRulesetDto {
    return PageInboxRulesetDtoFromJSONTyped(json, false);
}

export function PageInboxRulesetDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInboxRulesetDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(InboxRulesetDtoFromJSON)),
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
        'first': !exists(json, 'first') ? undefined : json['first'],
        'last': !exists(json, 'last') ? undefined : json['last'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'pageable': !exists(json, 'pageable') ? undefined : PageableFromJSON(json['pageable']),
        'size': !exists(json, 'size') ? undefined : json['size'],
        'sort': !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
    };
}

export function PageInboxRulesetDtoToJSON(value?: PageInboxRulesetDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(InboxRulesetDtoToJSON)),
        'empty': value.empty,
        'first': value.first,
        'last': value.last,
        'number': value.number,
        'numberOfElements': value.numberOfElements,
        'pageable': PageableToJSON(value.pageable),
        'size': value.size,
        'sort': SortToJSON(value.sort),
        'totalElements': value.totalElements,
        'totalPages': value.totalPages,
    };
}


