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
 * @interface ProxyCreateNewRuleRequest
 */
export interface ProxyCreateNewRuleRequest {
    /**
     * Domain name.
     * @type {string}
     * @memberof ProxyCreateNewRuleRequest
     */
    'domain': string;
    /**
     * Action definition for the rule. Possible values are \"api\", \"function\"
     * @type {string}
     * @memberof ProxyCreateNewRuleRequest
     */
    'resourceType': ProxyCreateNewRuleRequestResourceTypeEnum;
    /**
     * ID of resource for the action type. If resourceType is \"api\", leave empty. If resourceType is \"function\", provide ID of the function.
     * @type {string}
     * @memberof ProxyCreateNewRuleRequest
     */
    'resourceId'?: string;
}

type ProxyCreateNewRuleRequestResourceTypeEnum = 'api' | 'function'

