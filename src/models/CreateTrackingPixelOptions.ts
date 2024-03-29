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
 * @interface CreateTrackingPixelOptions
 */
export interface CreateTrackingPixelOptions {
    /**
     * 
     * @type {string}
     * @memberof CreateTrackingPixelOptions
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTrackingPixelOptions
     */
    recipient?: string;
}

export function CreateTrackingPixelOptionsFromJSON(json: any): CreateTrackingPixelOptions {
    return CreateTrackingPixelOptionsFromJSONTyped(json, false);
}

export function CreateTrackingPixelOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTrackingPixelOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
    };
}

export function CreateTrackingPixelOptionsToJSON(value?: CreateTrackingPixelOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'recipient': value.recipient,
    };
}


