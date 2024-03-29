/* tslint:disable */
/* eslint-disable */
/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ConsoleVariables } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ConsoleApi - axios parameter creator
 * @export
 */
export const ConsoleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all Environment Variables that are relevant for the console.
         * @summary Get variables
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listVariables: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/console/variables`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Project required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Project", keyParamName: "project", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/console/variables',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConsoleApi - functional programming interface
 * @export
 */
export const ConsoleApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConsoleApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all Environment Variables that are relevant for the console.
         * @summary Get variables
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listVariables(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsoleVariables>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listVariables(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConsoleApi - factory interface
 * @export
 */
export const ConsoleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConsoleApiFp(configuration)
    return {
        /**
         * Get all Environment Variables that are relevant for the console.
         * @summary Get variables
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listVariables(options?: AxiosRequestConfig): AxiosPromise<ConsoleVariables> {
            return localVarFp.listVariables(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConsoleApiGenerated - object-oriented interface
 * @export
 * @class ConsoleApiGenerated
 * @extends {BaseAPI}
 */
export class ConsoleApiGenerated extends BaseAPI {
    /**
     * Get all Environment Variables that are relevant for the console.
     * @summary Get variables
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConsoleApiGenerated
     */
    public listVariables(options?: AxiosRequestConfig) {
        return ConsoleApiFp(this.configuration).listVariables(options).then((request) => request(this.axios, this.basePath));
    }
}
