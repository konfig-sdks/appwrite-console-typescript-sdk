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
 * @interface DatabasesCreateEmailAttributeRequest
 */
export interface DatabasesCreateEmailAttributeRequest {
    /**
     * Attribute Key.
     * @type {string}
     * @memberof DatabasesCreateEmailAttributeRequest
     */
    'key': string;
    /**
     * Is attribute required?
     * @type {boolean}
     * @memberof DatabasesCreateEmailAttributeRequest
     */
    'required': boolean;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {string}
     * @memberof DatabasesCreateEmailAttributeRequest
     */
    'default'?: string;
    /**
     * Is attribute an array?
     * @type {boolean}
     * @memberof DatabasesCreateEmailAttributeRequest
     */
    'array'?: boolean;
}

