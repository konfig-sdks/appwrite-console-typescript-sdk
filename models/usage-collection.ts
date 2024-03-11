/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Metric } from './metric';

/**
 * UsageCollection
 * @export
 * @interface UsageCollection
 */
export interface UsageCollection {
    /**
     * Time range of the usage stats.
     * @type {string}
     * @memberof UsageCollection
     */
    'range': string;
    /**
     * Total aggregated number of of documents.
     * @type {number}
     * @memberof UsageCollection
     */
    'documentsTotal': number;
    /**
     * Aggregated  number of documents per period.
     * @type {Array<Metric>}
     * @memberof UsageCollection
     */
    'documents': Array<Metric>;
}

