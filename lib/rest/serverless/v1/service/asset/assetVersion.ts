/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type AssetVersionVisibility = "public" | "private" | "protected";

/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AssetVersionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface AssetVersionListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface AssetVersionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface AssetVersionContext {
  /**
   * Fetch a AssetVersionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssetVersionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssetVersionInstance) => any
  ): Promise<AssetVersionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssetVersionContextSolution {
  serviceSid?: string;
  assetSid?: string;
  sid?: string;
}

export class AssetVersionContextImpl implements AssetVersionContext {
  protected _solution: AssetVersionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    serviceSid: string,
    assetSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(assetSid)) {
      throw new Error("Parameter 'assetSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, assetSid, sid };
    this._uri = `/Services/${serviceSid}/Assets/${assetSid}/Versions/${sid}`;
  }

  fetch(callback?: any): Promise<AssetVersionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssetVersionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.assetSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface AssetVersionPayload
  extends AssetVersionResource,
    TwilioResponsePayload {}

interface AssetVersionResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  asset_sid?: string | null;
  path?: string | null;
  visibility?: AssetVersionVisibility;
  date_created?: Date | null;
  url?: string | null;
}

export class AssetVersionInstance {
  protected _solution: AssetVersionContextSolution;
  protected _context?: AssetVersionContext;

  constructor(
    protected _version: V1,
    payload: AssetVersionPayload,
    serviceSid: string,
    assetSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.assetSid = payload.asset_sid;
    this.path = payload.path;
    this.visibility = payload.visibility;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { serviceSid, assetSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Asset Version resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Asset Version resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Asset Version resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Asset resource that is the parent of the Asset Version
   */
  assetSid?: string | null;
  /**
   * The URL-friendly string by which the Asset Version can be referenced
   */
  path?: string | null;
  visibility?: AssetVersionVisibility;
  /**
   * The ISO 8601 date and time in GMT when the Asset Version resource was created
   */
  dateCreated?: Date | null;
  /**
   * The absolute URL of the Asset Version resource
   */
  url?: string | null;

  private get _proxy(): AssetVersionContext {
    this._context =
      this._context ||
      new AssetVersionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.assetSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a AssetVersionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssetVersionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssetVersionInstance) => any
  ): Promise<AssetVersionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      assetSid: this.assetSid,
      path: this.path,
      visibility: this.visibility,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssetVersionListInstance {
  (sid: string): AssetVersionContext;
  get(sid: string): AssetVersionContext;

  /**
   * Streams AssetVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams AssetVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssetVersionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AssetVersionListInstanceEachOptions,
    callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage>;
  /**
   * Retrieve a single target page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage>;
  getPage(params?: any, callback?: any): Promise<AssetVersionPage>;
  /**
   * Lists AssetVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AssetVersionInstance[]) => any
  ): Promise<AssetVersionInstance[]>;
  /**
   * Lists AssetVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssetVersionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AssetVersionListInstanceOptions,
    callback?: (error: Error | null, items: AssetVersionInstance[]) => any
  ): Promise<AssetVersionInstance[]>;
  list(params?: any, callback?: any): Promise<AssetVersionInstance[]>;
  /**
   * Retrieve a single page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage>;
  /**
   * Retrieve a single page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssetVersionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AssetVersionListInstancePageOptions,
    callback?: (error: Error | null, items: AssetVersionPage) => any
  ): Promise<AssetVersionPage>;
  page(params?: any, callback?: any): Promise<AssetVersionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssetVersionSolution {
  serviceSid?: string;
  assetSid?: string;
}

interface AssetVersionListInstanceImpl extends AssetVersionListInstance {}
class AssetVersionListInstanceImpl implements AssetVersionListInstance {
  _version?: V1;
  _solution?: AssetVersionSolution;
  _uri?: string;
}

export function AssetVersionListInstance(
  version: V1,
  serviceSid: string,
  assetSid: string
): AssetVersionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(assetSid)) {
    throw new Error("Parameter 'assetSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as AssetVersionListInstanceImpl;

  instance.get = function get(sid): AssetVersionContext {
    return new AssetVersionContextImpl(version, serviceSid, assetSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, assetSid };
  instance._uri = `/Services/${serviceSid}/Assets/${assetSid}/Versions`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<AssetVersionPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssetVersionPage(operationVersion, payload, this._solution)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<AssetVersionPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new AssetVersionPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

export class AssetVersionPage extends Page<
  V1,
  AssetVersionPayload,
  AssetVersionResource,
  AssetVersionInstance
> {
  /**
   * Initialize the AssetVersionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AssetVersionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssetVersionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssetVersionPayload): AssetVersionInstance {
    return new AssetVersionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.assetSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
