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
 * @interface ProjectsUpdateSmtpRequest
 */
export interface ProjectsUpdateSmtpRequest {
    /**
     * Enable custom SMTP service
     * @type {boolean}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'enabled': boolean;
    /**
     * Name of the email sender
     * @type {string}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'senderName'?: string;
    /**
     * Email of the sender
     * @type {string}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'senderEmail'?: string;
    /**
     * Reply to email
     * @type {string}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'replyTo'?: string;
    /**
     * SMTP server host name
     * @type {string}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'host'?: string;
    /**
     * SMTP server port
     * @type {number}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'port'?: number;
    /**
     * SMTP server username
     * @type {string}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'username'?: string;
    /**
     * SMTP server password
     * @type {string}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'password'?: string;
    /**
     * Does SMTP server use secure connection
     * @type {string}
     * @memberof ProjectsUpdateSmtpRequest
     */
    'secure'?: ProjectsUpdateSmtpRequestSecureEnum;
}

type ProjectsUpdateSmtpRequestSecureEnum = 'tls' | 'ssl'


