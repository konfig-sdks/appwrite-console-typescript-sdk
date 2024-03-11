/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FirebaseProject } from './firebase-project';

/**
 * Migrations Firebase Projects List
 * @export
 * @interface FirebaseProjectList
 */
export interface FirebaseProjectList {
    /**
     * Total number of projects documents that matched your query.
     * @type {number}
     * @memberof FirebaseProjectList
     */
    'total': number;
    /**
     * List of projects.
     * @type {Array<FirebaseProject>}
     * @memberof FirebaseProjectList
     */
    'projects': Array<FirebaseProject>;
}

