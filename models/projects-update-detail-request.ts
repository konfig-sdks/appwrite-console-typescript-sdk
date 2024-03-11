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
 * @interface ProjectsUpdateDetailRequest
 */
export interface ProjectsUpdateDetailRequest {
    /**
     * Project description. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'description'?: string;
    /**
     * Project name. Max length: 128 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'name': string;
    /**
     * Project logo.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'logo'?: string;
    /**
     * Project URL.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'url'?: string;
    /**
     * Project legal name. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'legalName'?: string;
    /**
     * Project legal country. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'legalCountry'?: string;
    /**
     * Project legal state. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'legalState'?: string;
    /**
     * Project legal city. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'legalCity'?: string;
    /**
     * Project legal address. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'legalAddress'?: string;
    /**
     * Project legal tax ID. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsUpdateDetailRequest
     */
    'legalTaxId'?: string;
}

