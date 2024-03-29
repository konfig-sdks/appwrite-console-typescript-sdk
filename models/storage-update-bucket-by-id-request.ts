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
 * @interface StorageUpdateBucketByIdRequest
 */
export interface StorageUpdateBucketByIdRequest {
    /**
     * Bucket name
     * @type {string}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'name': string;
    /**
     * An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @type {Array<string>}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'permissions'?: Array<string>;
    /**
     * Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).
     * @type {boolean}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'fileSecurity'?: boolean;
    /**
     * Is bucket enabled? When set to \'disabled\', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.
     * @type {boolean}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'enabled'?: boolean;
    /**
     * Maximum file size allowed in bytes. Maximum allowed value is 30MB.
     * @type {number}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'maximumFileSize'?: number;
    /**
     * Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.
     * @type {Array<string>}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'allowedFileExtensions'?: Array<string>;
    /**
     * Compression algorithm choosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it\'s enabled
     * @type {string}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'compression'?: StorageUpdateBucketByIdRequestCompressionEnum;
    /**
     * Is encryption enabled? For file size above 20MB encryption is skipped even if it\'s enabled
     * @type {boolean}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'encryption'?: boolean;
    /**
     * Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it\'s enabled
     * @type {boolean}
     * @memberof StorageUpdateBucketByIdRequest
     */
    'antivirus'?: boolean;
}

type StorageUpdateBucketByIdRequestCompressionEnum = 'none' | 'gzip' | 'zstd'


