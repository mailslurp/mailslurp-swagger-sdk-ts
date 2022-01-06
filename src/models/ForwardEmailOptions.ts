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
 * Options for forwarding an email
 * @export
 * @interface ForwardEmailOptions
 */
export interface ForwardEmailOptions {
    /**
     * To recipients for forwarded email
     * @type {Array<string>}
     * @memberof ForwardEmailOptions
     */
    to: Array<string>;
    /**
     * Subject for forwarded email
     * @type {string}
     * @memberof ForwardEmailOptions
     */
    subject?: string;
    /**
     * Optional cc recipients
     * @type {Array<string>}
     * @memberof ForwardEmailOptions
     */
    cc?: Array<string>;
    /**
     * Optional bcc recipients
     * @type {Array<string>}
     * @memberof ForwardEmailOptions
     */
    bcc?: Array<string>;
    /**
     * Optional from override
     * @type {string}
     * @memberof ForwardEmailOptions
     */
    from?: string;
    /**
     * Optionally use inbox name as display name for sender email address
     * @type {boolean}
     * @memberof ForwardEmailOptions
     */
    useInboxName?: boolean;
}

export function ForwardEmailOptionsFromJSON(json: any): ForwardEmailOptions {
    return ForwardEmailOptionsFromJSONTyped(json, false);
}

export function ForwardEmailOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForwardEmailOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'to': json['to'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'cc': !exists(json, 'cc') ? undefined : json['cc'],
        'bcc': !exists(json, 'bcc') ? undefined : json['bcc'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'useInboxName': !exists(json, 'useInboxName') ? undefined : json['useInboxName'],
    };
}

export function ForwardEmailOptionsToJSON(value?: ForwardEmailOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'to': value.to,
        'subject': value.subject,
        'cc': value.cc,
        'bcc': value.bcc,
        'from': value.from,
        'useInboxName': value.useInboxName,
    };
}


