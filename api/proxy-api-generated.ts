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
import { ProxyCreateNewRuleRequest } from '../models';
// @ts-ignore
import { ProxyRule } from '../models';
// @ts-ignore
import { ProxyRuleList } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ProxyApi - axios parameter creator
 * @export
 */
export const ProxyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new proxy rule.
         * @summary Create Rule
         * @param {ProxyCreateNewRuleRequest} [proxyCreateNewRuleRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRule: async (proxyCreateNewRuleRequest?: ProxyCreateNewRuleRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/proxy/rules`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Project required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Appwrite-Project", keyParamName: "project", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: proxyCreateNewRuleRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/proxy/rules',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(proxyCreateNewRuleRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a proxy rule by its unique ID.
         * @summary Delete Rule
         * @param {string} ruleId Rule ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRuleById: async (ruleId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ruleId' is not null or undefined
            assertParamExists('deleteRuleById', 'ruleId', ruleId)
            const localVarPath = `/proxy/rules/{ruleId}`
                .replace(`{${"ruleId"}}`, encodeURIComponent(String(ruleId !== undefined ? ruleId : `-ruleId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
                pathTemplate: '/proxy/rules/{ruleId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a proxy rule by its unique ID.
         * @summary Get Rule
         * @param {string} ruleId Rule ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRuleById: async (ruleId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ruleId' is not null or undefined
            assertParamExists('getRuleById', 'ruleId', ruleId)
            const localVarPath = `/proxy/rules/{ruleId}`
                .replace(`{${"ruleId"}}`, encodeURIComponent(String(ruleId !== undefined ? ruleId : `-ruleId-`)));
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
                pathTemplate: '/proxy/rules/{ruleId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of all the proxy rules. You can use the query params to filter your results.
         * @summary List Rules
         * @param {Array<string>} [queries] Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, resourceType, resourceId, url
         * @param {string} [search] Search term to filter your list results. Max length: 256 chars.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRules: async (queries?: Array<string>, search?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/proxy/rules`;
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
            if (queries) {
                localVarQueryParameter['queries'] = queries;
            }

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/proxy/rules',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Rule Verification Status
         * @param {string} ruleId Rule ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRuleVerificationStatus: async (ruleId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ruleId' is not null or undefined
            assertParamExists('updateRuleVerificationStatus', 'ruleId', ruleId)
            const localVarPath = `/proxy/rules/{ruleId}/verification`
                .replace(`{${"ruleId"}}`, encodeURIComponent(String(ruleId !== undefined ? ruleId : `-ruleId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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
                pathTemplate: '/proxy/rules/{ruleId}/verification',
                httpMethod: 'PATCH'
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
 * ProxyApi - functional programming interface
 * @export
 */
export const ProxyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProxyApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new proxy rule.
         * @summary Create Rule
         * @param {ProxyApiCreateNewRuleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewRule(requestParameters: ProxyApiCreateNewRuleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyRule>> {
            const proxyCreateNewRuleRequest: ProxyCreateNewRuleRequest = {
                domain: requestParameters.domain,
                resourceType: requestParameters.resourceType,
                resourceId: requestParameters.resourceId
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewRule(proxyCreateNewRuleRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a proxy rule by its unique ID.
         * @summary Delete Rule
         * @param {ProxyApiDeleteRuleByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRuleById(requestParameters: ProxyApiDeleteRuleByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRuleById(requestParameters.ruleId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a proxy rule by its unique ID.
         * @summary Get Rule
         * @param {ProxyApiGetRuleByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRuleById(requestParameters: ProxyApiGetRuleByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyRule>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRuleById(requestParameters.ruleId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of all the proxy rules. You can use the query params to filter your results.
         * @summary List Rules
         * @param {ProxyApiListRulesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRules(requestParameters: ProxyApiListRulesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyRuleList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRules(requestParameters.queries, requestParameters.search, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Rule Verification Status
         * @param {ProxyApiUpdateRuleVerificationStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRuleVerificationStatus(requestParameters: ProxyApiUpdateRuleVerificationStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProxyRule>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRuleVerificationStatus(requestParameters.ruleId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProxyApi - factory interface
 * @export
 */
export const ProxyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProxyApiFp(configuration)
    return {
        /**
         * Create a new proxy rule.
         * @summary Create Rule
         * @param {ProxyApiCreateNewRuleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRule(requestParameters: ProxyApiCreateNewRuleRequest, options?: AxiosRequestConfig): AxiosPromise<ProxyRule> {
            return localVarFp.createNewRule(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a proxy rule by its unique ID.
         * @summary Delete Rule
         * @param {ProxyApiDeleteRuleByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRuleById(requestParameters: ProxyApiDeleteRuleByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRuleById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a proxy rule by its unique ID.
         * @summary Get Rule
         * @param {ProxyApiGetRuleByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRuleById(requestParameters: ProxyApiGetRuleByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ProxyRule> {
            return localVarFp.getRuleById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of all the proxy rules. You can use the query params to filter your results.
         * @summary List Rules
         * @param {ProxyApiListRulesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRules(requestParameters: ProxyApiListRulesRequest, options?: AxiosRequestConfig): AxiosPromise<ProxyRuleList> {
            return localVarFp.listRules(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Rule Verification Status
         * @param {ProxyApiUpdateRuleVerificationStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRuleVerificationStatus(requestParameters: ProxyApiUpdateRuleVerificationStatusRequest, options?: AxiosRequestConfig): AxiosPromise<ProxyRule> {
            return localVarFp.updateRuleVerificationStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewRule operation in ProxyApi.
 * @export
 * @interface ProxyApiCreateNewRuleRequest
 */
export type ProxyApiCreateNewRuleRequest = {
    
} & ProxyCreateNewRuleRequest

/**
 * Request parameters for deleteRuleById operation in ProxyApi.
 * @export
 * @interface ProxyApiDeleteRuleByIdRequest
 */
export type ProxyApiDeleteRuleByIdRequest = {
    
    /**
    * Rule ID.
    * @type {string}
    * @memberof ProxyApiDeleteRuleById
    */
    readonly ruleId: string
    
}

/**
 * Request parameters for getRuleById operation in ProxyApi.
 * @export
 * @interface ProxyApiGetRuleByIdRequest
 */
export type ProxyApiGetRuleByIdRequest = {
    
    /**
    * Rule ID.
    * @type {string}
    * @memberof ProxyApiGetRuleById
    */
    readonly ruleId: string
    
}

/**
 * Request parameters for listRules operation in ProxyApi.
 * @export
 * @interface ProxyApiListRulesRequest
 */
export type ProxyApiListRulesRequest = {
    
    /**
    * Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, resourceType, resourceId, url
    * @type {Array<string>}
    * @memberof ProxyApiListRules
    */
    readonly queries?: Array<string>
    
    /**
    * Search term to filter your list results. Max length: 256 chars.
    * @type {string}
    * @memberof ProxyApiListRules
    */
    readonly search?: string
    
}

/**
 * Request parameters for updateRuleVerificationStatus operation in ProxyApi.
 * @export
 * @interface ProxyApiUpdateRuleVerificationStatusRequest
 */
export type ProxyApiUpdateRuleVerificationStatusRequest = {
    
    /**
    * Rule ID.
    * @type {string}
    * @memberof ProxyApiUpdateRuleVerificationStatus
    */
    readonly ruleId: string
    
}

/**
 * ProxyApiGenerated - object-oriented interface
 * @export
 * @class ProxyApiGenerated
 * @extends {BaseAPI}
 */
export class ProxyApiGenerated extends BaseAPI {
    /**
     * Create a new proxy rule.
     * @summary Create Rule
     * @param {ProxyApiCreateNewRuleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProxyApiGenerated
     */
    public createNewRule(requestParameters: ProxyApiCreateNewRuleRequest, options?: AxiosRequestConfig) {
        return ProxyApiFp(this.configuration).createNewRule(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a proxy rule by its unique ID.
     * @summary Delete Rule
     * @param {ProxyApiDeleteRuleByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProxyApiGenerated
     */
    public deleteRuleById(requestParameters: ProxyApiDeleteRuleByIdRequest, options?: AxiosRequestConfig) {
        return ProxyApiFp(this.configuration).deleteRuleById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a proxy rule by its unique ID.
     * @summary Get Rule
     * @param {ProxyApiGetRuleByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProxyApiGenerated
     */
    public getRuleById(requestParameters: ProxyApiGetRuleByIdRequest, options?: AxiosRequestConfig) {
        return ProxyApiFp(this.configuration).getRuleById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of all the proxy rules. You can use the query params to filter your results.
     * @summary List Rules
     * @param {ProxyApiListRulesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProxyApiGenerated
     */
    public listRules(requestParameters: ProxyApiListRulesRequest, options?: AxiosRequestConfig) {
        return ProxyApiFp(this.configuration).listRules(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Rule Verification Status
     * @param {ProxyApiUpdateRuleVerificationStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProxyApiGenerated
     */
    public updateRuleVerificationStatus(requestParameters: ProxyApiUpdateRuleVerificationStatusRequest, options?: AxiosRequestConfig) {
        return ProxyApiFp(this.configuration).updateRuleVerificationStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
