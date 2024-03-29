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
 * @interface UsersCreateMessagingTargetRequest
 */
export interface UsersCreateMessagingTargetRequest {
    /**
     * Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars.
     * @type {string}
     * @memberof UsersCreateMessagingTargetRequest
     */
    'targetId': string;
    /**
     * The target provider type. Can be one of the following: `email`, `sms` or `push`.
     * @type {string}
     * @memberof UsersCreateMessagingTargetRequest
     */
    'providerType': UsersCreateMessagingTargetRequestProviderTypeEnum;
    /**
     * The target identifier (token, email, phone etc.)
     * @type {string}
     * @memberof UsersCreateMessagingTargetRequest
     */
    'identifier': string;
    /**
     * Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.
     * @type {string}
     * @memberof UsersCreateMessagingTargetRequest
     */
    'providerId'?: string;
    /**
     * Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.
     * @type {string}
     * @memberof UsersCreateMessagingTargetRequest
     */
    'name'?: string;
}

type UsersCreateMessagingTargetRequestProviderTypeEnum = 'email' | 'sms' | 'push'


