/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Rule
 * @export
 * @interface ProxyRule
 */
export interface ProxyRule {
    /**
     * Rule ID.
     * @type {string}
     * @memberof ProxyRule
     */
    '$id': string;
    /**
     * Rule creation date in ISO 8601 format.
     * @type {string}
     * @memberof ProxyRule
     */
    '$createdAt': string;
    /**
     * Rule update date in ISO 8601 format.
     * @type {string}
     * @memberof ProxyRule
     */
    '$updatedAt': string;
    /**
     * Domain name.
     * @type {string}
     * @memberof ProxyRule
     */
    'domain': string;
    /**
     * Action definition for the rule. Possible values are \"api\", \"function\", or \"redirect\"
     * @type {string}
     * @memberof ProxyRule
     */
    'resourceType': string;
    /**
     * ID of resource for the action type. If resourceType is \"api\" or \"url\", it is empty. If resourceType is \"function\", it is ID of the function.
     * @type {string}
     * @memberof ProxyRule
     */
    'resourceId': string;
    /**
     * Domain verification status. Possible values are \"created\", \"verifying\", \"verified\" and \"unverified\"
     * @type {string}
     * @memberof ProxyRule
     */
    'status': string;
    /**
     * Certificate generation logs. This will return an empty string if generation did not run, or succeeded.
     * @type {string}
     * @memberof ProxyRule
     */
    'logs': string;
    /**
     * Certificate auto-renewal date in ISO 8601 format.
     * @type {string}
     * @memberof ProxyRule
     */
    'renewAt': string;
}

