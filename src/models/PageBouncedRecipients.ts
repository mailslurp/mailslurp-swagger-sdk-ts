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
    BounceRecipient,
    BounceRecipientFromJSON,
    BounceRecipientFromJSONTyped,
    BounceRecipientToJSON,
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
 * Paginated bounced recipients. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full entity use the projection ID with individual method calls.
 * @export
 * @interface PageBouncedRecipients
 */
export interface PageBouncedRecipients {
    /**
     * 
     * @type {Array<BounceRecipient>}
     * @memberof PageBouncedRecipients
     */
    content?: Array<BounceRecipient>;
    /**
     * 
     * @type {Pageable}
     * @memberof PageBouncedRecipients
     */
    pageable?: Pageable;
    /**
     * 
     * @type {boolean}
     * @memberof PageBouncedRecipients
     */
    last?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    number?: number;
    /**
     * 
     * @type {Sort}
     * @memberof PageBouncedRecipients
     */
    sort?: Sort;
    /**
     * 
     * @type {boolean}
     * @memberof PageBouncedRecipients
     */
    first?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageBouncedRecipients
     */
    numberOfElements?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageBouncedRecipients
     */
    empty?: boolean;
}

export function PageBouncedRecipientsFromJSON(json: any): PageBouncedRecipients {
    return PageBouncedRecipientsFromJSONTyped(json, false);
}

export function PageBouncedRecipientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageBouncedRecipients {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': !exists(json, 'content') ? undefined : ((json['content'] as Array<any>).map(BounceRecipientFromJSON)),
        'pageable': !exists(json, 'pageable') ? undefined : PageableFromJSON(json['pageable']),
        'last': !exists(json, 'last') ? undefined : json['last'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'sort': !exists(json, 'sort') ? undefined : SortFromJSON(json['sort']),
        'first': !exists(json, 'first') ? undefined : json['first'],
        'numberOfElements': !exists(json, 'numberOfElements') ? undefined : json['numberOfElements'],
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function PageBouncedRecipientsToJSON(value?: PageBouncedRecipients | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content === undefined ? undefined : ((value.content as Array<any>).map(BounceRecipientToJSON)),
        'pageable': PageableToJSON(value.pageable),
        'last': value.last,
        'totalPages': value.totalPages,
        'totalElements': value.totalElements,
        'size': value.size,
        'number': value.number,
        'sort': SortToJSON(value.sort),
        'first': value.first,
        'numberOfElements': value.numberOfElements,
        'empty': value.empty,
    };
}


