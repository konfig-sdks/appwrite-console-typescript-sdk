/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * AuthProvider
 * @export
 * @interface AuthProvider
 */
export interface AuthProvider {
    /**
     * Auth Provider.
     * @type {string}
     * @memberof AuthProvider
     */
    'key': string;
    /**
     * Auth Provider name.
     * @type {string}
     * @memberof AuthProvider
     */
    'name': string;
    /**
     * OAuth 2.0 application ID.
     * @type {string}
     * @memberof AuthProvider
     */
    'appId': string;
    /**
     * OAuth 2.0 application secret. Might be JSON string if provider requires extra configuration.
     * @type {string}
     * @memberof AuthProvider
     */
    'secret': string;
    /**
     * Auth Provider is active and can be used to create session.
     * @type {boolean}
     * @memberof AuthProvider
     */
    'enabled': boolean;
}

