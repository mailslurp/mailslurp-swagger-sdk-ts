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
    DomainNameRecord,
    DomainNameRecordFromJSON,
    DomainNameRecordFromJSONTyped,
    DomainNameRecordToJSON,
} from './';

/**
 * Domain plus verification records and status
 * @export
 * @interface DomainDto
 */
export interface DomainDto {
    /**
     * The optional catch all inbox that will receive emails sent to the domain that cannot be matched.
     * @type {string}
     * @memberof DomainDto
     */
    catchAllInboxId?: string;
    /**
     * 
     * @type {Date}
     * @memberof DomainDto
     */
    createdAt: Date;
    /**
     * Unique token DKIM tokens
     * @type {Array<string>}
     * @memberof DomainDto
     */
    dkimTokens?: Array<string>;
    /**
     * Custom domain name
     * @type {string}
     * @memberof DomainDto
     */
    domain?: string;
    /**
     * List of DNS domain name records (C, MX, TXT) etc that you must add to the DNS server associated with your domain provider.
     * @type {Array<DomainNameRecord>}
     * @memberof DomainDto
     */
    domainNameRecords?: Array<DomainNameRecord>;
    /**
     * The type of domain. SMTP or HTTP domains differ in what inboxes can be used with them.
     * @type {string}
     * @memberof DomainDto
     */
    domainType?: DomainDtoDomainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DomainDto
     */
    id: string;
    /**
     * Whether domain has been verified or not. If the domain is not verified after 72 hours there is most likely an issue with the domains DNS records.
     * @type {boolean}
     * @memberof DomainDto
     */
    isVerified?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof DomainDto
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof DomainDto
     */
    userId: string;
    /**
     * Verification tokens
     * @type {string}
     * @memberof DomainDto
     */
    verificationToken?: string;
}

export function DomainDtoFromJSON(json: any): DomainDto {
    return DomainDtoFromJSONTyped(json, false);
}

export function DomainDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'catchAllInboxId': !exists(json, 'catchAllInboxId') ? undefined : json['catchAllInboxId'],
        'createdAt': (new Date(json['createdAt'])),
        'dkimTokens': !exists(json, 'dkimTokens') ? undefined : json['dkimTokens'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'domainNameRecords': !exists(json, 'domainNameRecords') ? undefined : ((json['domainNameRecords'] as Array<any>).map(DomainNameRecordFromJSON)),
        'domainType': !exists(json, 'domainType') ? undefined : json['domainType'],
        'id': json['id'],
        'isVerified': !exists(json, 'isVerified') ? undefined : json['isVerified'],
        'updatedAt': (new Date(json['updatedAt'])),
        'userId': json['userId'],
        'verificationToken': !exists(json, 'verificationToken') ? undefined : json['verificationToken'],
    };
}

export function DomainDtoToJSON(value?: DomainDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'catchAllInboxId': value.catchAllInboxId,
        'createdAt': (value.createdAt.toISOString()),
        'dkimTokens': value.dkimTokens,
        'domain': value.domain,
        'domainNameRecords': value.domainNameRecords === undefined ? undefined : ((value.domainNameRecords as Array<any>).map(DomainNameRecordToJSON)),
        'domainType': value.domainType,
        'id': value.id,
        'isVerified': value.isVerified,
        'updatedAt': (value.updatedAt.toISOString()),
        'userId': value.userId,
        'verificationToken': value.verificationToken,
    };
}

/**
* @export
* @enum {string}
*/
export enum DomainDtoDomainTypeEnum {
    HTTPINBOX = 'HTTP_INBOX',
    SMTPDOMAIN = 'SMTP_DOMAIN'
}


