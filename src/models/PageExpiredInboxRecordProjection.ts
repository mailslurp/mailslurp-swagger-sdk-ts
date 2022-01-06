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
import {
    ExpiredInboxRecordProjection,
    ExpiredInboxRecordProjectionFromJSON,
    ExpiredInboxRecordProjectionFromJSONTyped,
    ExpiredInboxRecordProjectionToJSON,
    PageableObject,
    PageableObjectFromJSON,
    PageableObjectFromJSONTyped,
    PageableObjectToJSON,
    Sort,
    SortFromJSON,
    SortFromJSONTyped,
    SortToJSON,
} from './';

/**
 * Paginated expired inbox results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageExpiredInboxRecordProjection
 */
export interface PageExpiredInboxRecordProjection {
    /**
     * 
     * @type {Array<ExpiredInboxRecordProjection>}
     * @memberof PageExpiredInboxRecordProjection
     */
    content?: Array<ExpiredInboxRecordProjection>;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageExpiredInboxRecordProjection
     */
    pageable?: PageableObject;
    /**
     * 
     * @type {number}
     * @memberof PageExpiredInboxRecordProjection
     */
    total?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageExpiredInboxRecordProjection
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageExpiredInboxRecordProjection
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageExpiredInboxRecordProjection
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageExpiredInboxRecordProjection
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageExpiredInboxRecordProjection
     */
    number?: number;
    /**
     * 
     * @type {Sort}
     * @memberof PageExpiredInboxRecordProjection
     */
    sort?: Sort;
    /**
     * 
     * @type {boolean}
     * @memberof PageExpiredInboxRecordProjection
     */
    first?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageExpiredInboxRecordProjection
     */
    numberOfElements?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageExpiredInboxRecordProjection
     */
    empty?: boolean;
}

export function PageExpiredInboxRecordProjectionFromJSON(json: any): PageExpiredInboxRecordProjection {
    return PageExpiredInboxRecordProjectionFromJSONTyped(json, false);
}

export function PageExpiredInboxRecordProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageExpiredInboxRecordProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(ExpiredInboxRecordProjectionFromJSON)),
        'pageable': !exists(json, 'pageable') ? undefined : PageableObjectFromJSON(json['pageable']),
        'total': !exists(json, 'total') ? undefined : json['total'],
        'last': !exists(json, 'last') ? undefined : json['last'],
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'sort': !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
        'first': !exists(json, 'first') ? undefined : json['first'],
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function PageExpiredInboxRecordProjectionToJSON(value?: PageExpiredInboxRecordProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(ExpiredInboxRecordProjectionToJSON)),
        'pageable': PageableObjectToJSON(value.pageable),
        'total': value.total,
        'last': value.last,
        'totalElements': value.totalElements,
        'totalPages': value.totalPages,
        'size': value.size,
        'number': value.number,
        'sort': SortToJSON(value.sort),
        'first': value.first,
        'numberOfElements': value.numberOfElements,
        'empty': value.empty,
    };
}


