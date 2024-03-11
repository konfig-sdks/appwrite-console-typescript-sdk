/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * AttributeInteger
 * @export
 * @interface AttributeInteger
 */
export interface AttributeInteger {
    /**
     * Attribute Key.
     * @type {string}
     * @memberof AttributeInteger
     */
    'key': string;
    /**
     * Attribute type.
     * @type {string}
     * @memberof AttributeInteger
     */
    'type': string;
    /**
     * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
     * @type {string}
     * @memberof AttributeInteger
     */
    'status': string;
    /**
     * Error message. Displays error generated on failure of creating or deleting an attribute.
     * @type {string}
     * @memberof AttributeInteger
     */
    'error': string;
    /**
     * Is attribute required?
     * @type {boolean}
     * @memberof AttributeInteger
     */
    'required': boolean;
    /**
     * Is attribute an array?
     * @type {boolean}
     * @memberof AttributeInteger
     */
    'array'?: boolean | null;
    /**
     * Minimum value to enforce for new documents.
     * @type {number}
     * @memberof AttributeInteger
     */
    'min'?: number | null;
    /**
     * Maximum value to enforce for new documents.
     * @type {number}
     * @memberof AttributeInteger
     */
    'max'?: number | null;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {number}
     * @memberof AttributeInteger
     */
    'default'?: number | null;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {number}
     * @memberof AttributeInteger
     */
    'example'?: number | null;
    /**
     * Default value for attribute when not provided. Cannot be set when attribute is required.
     * @type {number}
     * @memberof AttributeInteger
     */
    'x-konfig-original-example'?: number | null;
}
