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
 * @interface TeamsUpdateMembershipRolesRequest
 */
export interface TeamsUpdateMembershipRolesRequest {
    /**
     * An array of strings. Use this param to set the user\'s roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.
     * @type {Array<string>}
     * @memberof TeamsUpdateMembershipRolesRequest
     */
    'roles': Array<string>;
}

