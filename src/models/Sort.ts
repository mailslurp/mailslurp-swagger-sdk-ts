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
 * 
 * @export
 * @interface Sort
 */
export interface Sort {
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    sorted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    unsorted?: boolean;
}

export function SortFromJSON(json: any): Sort {
    return SortFromJSONTyped(json, false);
}

export function SortFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
        'sorted': !exists(json, 'sorted') ? undefined : json['sorted'],
        'unsorted': !exists(json, 'unsorted') ? undefined : json['unsorted'],
    };
}

export function SortToJSON(value?: Sort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'empty': value.empty,
        'sorted': value.sorted,
        'unsorted': value.unsorted,
    };
}


