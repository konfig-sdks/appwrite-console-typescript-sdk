/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Identity } from './identity';

/**
 * Identities List
 * @export
 * @interface IdentityList
 */
export interface IdentityList {
    /**
     * Total number of identities documents that matched your query.
     * @type {number}
     * @memberof IdentityList
     */
    'total': number;
    /**
     * List of identities.
     * @type {Array<Identity>}
     * @memberof IdentityList
     */
    'identities': Array<Identity>;
}

