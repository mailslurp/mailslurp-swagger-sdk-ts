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
 * Options for replying to an alias email using the alias inbox
 * @export
 * @interface ReplyToAliasEmailOptions
 */
export interface ReplyToAliasEmailOptions {
    /**
     * Body of the reply email you want to send
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    body: string;
    /**
     * Is the reply HTML
     * @type {boolean}
     * @memberof ReplyToAliasEmailOptions
     */
    isHTML: boolean;
    /**
     * The charset that your message should be sent with. Optional. Default is UTF-8
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    charset?: string;
    /**
     * List of uploaded attachments to send with the reply. Optional.
     * @type {Array<string>}
     * @memberof ReplyToAliasEmailOptions
     */
    attachments?: Array<string>;
    /**
     * Template variables if using a template
     * @type {{ [key: string]: object; }}
     * @memberof ReplyToAliasEmailOptions
     */
    templateVariables?: { [key: string]: object; };
    /**
     * Template ID to use instead of body. Will use template variable map to fill defined variable slots.
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    template?: string;
    /**
     * How an email should be sent based on its recipients
     * @type {string}
     * @memberof ReplyToAliasEmailOptions
     */
    sendStrategy?: ReplyToAliasEmailOptionsSendStrategyEnum;
    /**
     * Optionally use inbox name as display name for sender email address
     * @type {boolean}
     * @memberof ReplyToAliasEmailOptions
     */
    useInboxName?: boolean;
}

export function ReplyToAliasEmailOptionsFromJSON(json: any): ReplyToAliasEmailOptions {
    return ReplyToAliasEmailOptionsFromJSONTyped(json, false);
}

export function ReplyToAliasEmailOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReplyToAliasEmailOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'body': json['body'],
        'isHTML': json['isHTML'],
        'charset': !exists(json, 'charset') ? undefined : json['charset'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'templateVariables': !exists(json, 'templateVariables') ? undefined : json['templateVariables'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'sendStrategy': !exists(json, 'sendStrategy') ? undefined : json['sendStrategy'],
        'useInboxName': !exists(json, 'useInboxName') ? undefined : json['useInboxName'],
    };
}

export function ReplyToAliasEmailOptionsToJSON(value?: ReplyToAliasEmailOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'body': value.body,
        'isHTML': value.isHTML,
        'charset': value.charset,
        'attachments': value.attachments,
        'templateVariables': value.templateVariables,
        'template': value.template,
        'sendStrategy': value.sendStrategy,
        'useInboxName': value.useInboxName,
    };
}

/**
* @export
* @enum {string}
*/
export enum ReplyToAliasEmailOptionsSendStrategyEnum {
    SINGLEMESSAGE = 'SINGLE_MESSAGE'
}


