/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Message
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * Message ID.
     * @type {string}
     * @memberof Message
     */
    '$id': string;
    /**
     * Message creation time in ISO 8601 format.
     * @type {string}
     * @memberof Message
     */
    '$createdAt': string;
    /**
     * Message update date in ISO 8601 format.
     * @type {string}
     * @memberof Message
     */
    '$updatedAt': string;
    /**
     * Message provider type.
     * @type {string}
     * @memberof Message
     */
    'providerType': string;
    /**
     * Topic IDs set as recipients.
     * @type {Array<string>}
     * @memberof Message
     */
    'topics': Array<string>;
    /**
     * User IDs set as recipients.
     * @type {Array<string>}
     * @memberof Message
     */
    'users': Array<string>;
    /**
     * Target IDs set as recipients.
     * @type {Array<string>}
     * @memberof Message
     */
    'targets': Array<string>;
    /**
     * The scheduled time for message.
     * @type {string}
     * @memberof Message
     */
    'scheduledAt'?: string | null;
    /**
     * The time when the message was delivered.
     * @type {string}
     * @memberof Message
     */
    'deliveredAt'?: string | null;
    /**
     * Delivery errors if any.
     * @type {Array<string>}
     * @memberof Message
     */
    'deliveryErrors'?: Array<string> | null;
    /**
     * Number of recipients the message was delivered to.
     * @type {number}
     * @memberof Message
     */
    'deliveredTotal': number;
    /**
     * Data of the message.
     * @type {object}
     * @memberof Message
     */
    'data': object;
    /**
     * Status of delivery.
     * @type {string}
     * @memberof Message
     */
    'status': string;
}
