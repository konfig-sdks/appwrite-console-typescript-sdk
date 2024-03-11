/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface MessagingCreateMailgunProviderRequest
 */
export interface MessagingCreateMailgunProviderRequest {
    /**
     * Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'providerId': string;
    /**
     * Provider name.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'name': string;
    /**
     * Mailgun API Key.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'apiKey'?: string;
    /**
     * Mailgun Domain.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'domain'?: string;
    /**
     * Set as EU region.
     * @type {boolean}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'isEuRegion'?: boolean;
    /**
     * Sender Name.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'fromName'?: string;
    /**
     * Sender email address.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'fromEmail'?: string;
    /**
     * Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'replyToName'?: string;
    /**
     * Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.
     * @type {string}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'replyToEmail'?: string;
    /**
     * Set as enabled.
     * @type {boolean}
     * @memberof MessagingCreateMailgunProviderRequest
     */
    'enabled'?: boolean;
}

