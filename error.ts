/*
Appwrite

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

The version of the OpenAPI document: 1.5.0
Contact: team@appwrite.io

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import type { AxiosError } from "axios";

/**
 * This class provides a wrapper for network errors when making requests to Appwrite
 */
export class AppwriteConsoleError extends Error {
  /**
   * The response body
   */
  readonly responseBody: unknown;

  /**
   * The error code provided from the underlying "axios" library which can be
   * more descriptive than the HTTP status descriptions.
   */
  readonly code?: string;

  /**
   * The status code from the response.
   * For explanations, refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
   */
  readonly status?: number;

  /**
   * The status text from the response.
   * For explanations, refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
   */
  readonly statusText?: string;

  /**
   * The URL that the original request was sent to
   */
  readonly url?: string;

  /**
   * HTTP request method (see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
   */
  readonly method?: string;

  constructor(axiosError: AxiosError, responseBody: unknown) {
    super(axiosError.message);
    this.name = "AppwriteConsoleError";
    this.code = axiosError.code;
    this.method = axiosError.config?.method?.toUpperCase();
    this.url = axiosError.config?.url;
    this.status = axiosError.response?.status;
    this.statusText = axiosError.response?.statusText;
    this.responseBody = responseBody;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      method: this.method,
      url: this.url,
      code: this.code,
      status: this.status,
      statusText: this.statusText,
      responseBody: this.responseBody,
    };
  }
}

export async function readableStreamToString(stream: ReadableStream) {
  // Step 1: Create a new TextDecoder
  const decoder = new TextDecoder();

  // Step 2: Create a new ReadableStreamDefaultReader
  const reader = stream.getReader();

  // Step 3: Initialize an empty string to hold the result
  let result = "";

  try {
    while (true) {
      // Step 4: Read data from the stream
      const { done, value } = await reader.read();

      // If there is no more data to read, break the loop
      if (done) break;

      // Convert the chunk of data to a string using the TextDecoder
      const chunk = decoder.decode(value, { stream: true });

      // Concatenate the chunk to the result
      result += chunk;
    }
  } finally {
    // Step 5: Release the ReadableStreamDefaultReader when done or in case of an error
    reader.releaseLock();
  }

  // Return the final result as a string
  return result;
}

export function parseIfJson(input: unknown): object | unknown {
  if (typeof input !== "string") {
    // If the input is not a string, return the original input
    return input;
  }

  try {
    // Attempt to parse the input as JSON
    const parsedJSON = JSON.parse(input);

    // Check if the parsed result is an object (not an array or primitive value)
    if (typeof parsedJSON === "object" && parsedJSON !== null) {
      return parsedJSON;
    } else {
      // Return the original input if the parsed result is not an object
      return input;
    }
  } catch (error) {
    // Return the original input if parsing fails (invalid JSON)
    return input;
  }
}
