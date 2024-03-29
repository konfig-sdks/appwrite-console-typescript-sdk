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
 * @interface ProjectsCreateNewProjectRequest
 */
export interface ProjectsCreateNewProjectRequest {
    /**
     * Project description. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'description'?: string;
    /**
     * Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can\'t start with a special char. Max length is 36 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'projectId': string;
    /**
     * Project name. Max length: 128 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'name': string;
    /**
     * Team unique ID.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'teamId': string;
    /**
     * Project Region.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'region'?: ProjectsCreateNewProjectRequestRegionEnum;
    /**
     * Project logo.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'logo'?: string;
    /**
     * Project URL.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'url'?: string;
    /**
     * Project legal Name. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'legalName'?: string;
    /**
     * Project legal Country. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'legalCountry'?: string;
    /**
     * Project legal State. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'legalState'?: string;
    /**
     * Project legal City. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'legalCity'?: string;
    /**
     * Project legal Address. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'legalAddress'?: string;
    /**
     * Project legal Tax ID. Max length: 256 chars.
     * @type {string}
     * @memberof ProjectsCreateNewProjectRequest
     */
    'legalTaxId'?: string;
}

type ProjectsCreateNewProjectRequestRegionEnum = 'default' | 'fra'


