/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Variable } from './variable';

/**
 * Variables List
 * @export
 * @interface VariableList
 */
export interface VariableList {
    /**
     * Total number of variables documents that matched your query.
     * @type {number}
     * @memberof VariableList
     */
    'total': number;
    /**
     * List of variables.
     * @type {Array<Variable>}
     * @memberof VariableList
     */
    'variables': Array<Variable>;
}

