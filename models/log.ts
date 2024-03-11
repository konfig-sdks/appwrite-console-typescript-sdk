/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Log
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * Event name.
     * @type {string}
     * @memberof Log
     */
    'event': string;
    /**
     * User ID.
     * @type {string}
     * @memberof Log
     */
    'userId': string;
    /**
     * User Email.
     * @type {string}
     * @memberof Log
     */
    'userEmail': string;
    /**
     * User Name.
     * @type {string}
     * @memberof Log
     */
    'userName': string;
    /**
     * API mode when event triggered.
     * @type {string}
     * @memberof Log
     */
    'mode': string;
    /**
     * IP session in use when the session was created.
     * @type {string}
     * @memberof Log
     */
    'ip': string;
    /**
     * Log creation date in ISO 8601 format.
     * @type {string}
     * @memberof Log
     */
    'time': string;
    /**
     * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
     * @type {string}
     * @memberof Log
     */
    'osCode': string;
    /**
     * Operating system name.
     * @type {string}
     * @memberof Log
     */
    'osName': string;
    /**
     * Operating system version.
     * @type {string}
     * @memberof Log
     */
    'osVersion': string;
    /**
     * Client type.
     * @type {string}
     * @memberof Log
     */
    'clientType': string;
    /**
     * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
     * @type {string}
     * @memberof Log
     */
    'clientCode': string;
    /**
     * Client name.
     * @type {string}
     * @memberof Log
     */
    'clientName': string;
    /**
     * Client version.
     * @type {string}
     * @memberof Log
     */
    'clientVersion': string;
    /**
     * Client engine name.
     * @type {string}
     * @memberof Log
     */
    'clientEngine': string;
    /**
     * Client engine name.
     * @type {string}
     * @memberof Log
     */
    'clientEngineVersion': string;
    /**
     * Device name.
     * @type {string}
     * @memberof Log
     */
    'deviceName': string;
    /**
     * Device brand name.
     * @type {string}
     * @memberof Log
     */
    'deviceBrand': string;
    /**
     * Device model name.
     * @type {string}
     * @memberof Log
     */
    'deviceModel': string;
    /**
     * Country two-character ISO 3166-1 alpha code.
     * @type {string}
     * @memberof Log
     */
    'countryCode': string;
    /**
     * Country name.
     * @type {string}
     * @memberof Log
     */
    'countryName': string;
}

