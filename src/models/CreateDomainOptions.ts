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
/**
 * Options for creating a domain to use with MailSlurp. You must have ownership access to this domain in order to verify it. Domains will not functionally currently until the domain has been verified. See https://www.mailslurp.com/guides/custom-domains for help.
 * @export
 * @interface CreateDomainOptions
 */
export interface CreateDomainOptions {
    /**
     * Whether to create a catch all inbox for the domain. Any email sent to an address using your domain that cannot be matched to an existing inbox you created with the domain will be routed to the created catch all inbox. You can access emails using the regular methods on this inbox ID.
     * @type {boolean}
     * @memberof CreateDomainOptions
     */
    createdCatchAllInbox?: boolean;
    /**
     * Optional description of the domain.
     * @type {string}
     * @memberof CreateDomainOptions
     */
    description?: string;
    /**
     * The top level domain you wish to use with MailSlurp. Do not specify subdomain just the top level. So `test.com` covers all subdomains such as `mail.test.com`. Don't include a protocol such as `http://`. Once added you must complete the verification steps by adding the returned records to your domain.
     * @type {string}
     * @memberof CreateDomainOptions
     */
    domain?: string;
    /**
     * Domain type to create. HTTP or SMTP domain. HTTP domain uses MailSlurps SES MX records. SMTP uses a custom SMTP server MX record
     * @type {string}
     * @memberof CreateDomainOptions
     */
    domainType?: CreateDomainOptionsDomainTypeEnum;
}

export function CreateDomainOptionsFromJSON(json: any): CreateDomainOptions {
    return CreateDomainOptionsFromJSONTyped(json, false);
}

export function CreateDomainOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDomainOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdCatchAllInbox': !exists(json, 'createdCatchAllInbox') ? undefined : json['createdCatchAllInbox'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'domainType': !exists(json, 'domainType') ? undefined : json['domainType'],
    };
}

export function CreateDomainOptionsToJSON(value?: CreateDomainOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdCatchAllInbox': value.createdCatchAllInbox,
        'description': value.description,
        'domain': value.domain,
        'domainType': value.domainType,
    };
}

/**
* @export
* @enum {string}
*/
export enum CreateDomainOptionsDomainTypeEnum {
    HTTPINBOX = 'HTTP_INBOX',
    SMTPDOMAIN = 'SMTP_DOMAIN'
}


