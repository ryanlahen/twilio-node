/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type ModelBuildStatus =
  | "enqueued"
  | "building"
  | "completed"
  | "failed"
  | "canceled";

/**
 * Options to pass to update a ModelBuildInstance
 *
 * @property { string } [uniqueName] A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1
 */
export interface ModelBuildContextUpdateOptions {
  uniqueName?: string;
}

/**
 * Options to pass to create a ModelBuildInstance
 *
 * @property { string } [statusCallback]
 * @property { string } [uniqueName] A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1
 */
export interface ModelBuildListInstanceCreateOptions {
  statusCallback?: string;
  uniqueName?: string;
}
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
export interface ModelBuildListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void;
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
export interface ModelBuildListInstanceOptions {
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
export interface ModelBuildListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ModelBuildContext {
  /**
   * Remove a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;

  /**
   * Update a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  update(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  /**
   * Update a ModelBuildInstance
   *
   * @param { ModelBuildContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  update(
    params: ModelBuildContextUpdateOptions,
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  update(params?: any, callback?: any): Promise<ModelBuildInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ModelBuildContextSolution {
  assistantSid?: string;
  sid?: string;
}

export class ModelBuildContextImpl implements ModelBuildContext {
  protected _solution: ModelBuildContextSolution;
  protected _uri: string;

  constructor(
    protected _version: Understand,
    assistantSid: string,
    sid: string
  ) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/ModelBuilds/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<ModelBuildInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ModelBuildInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ModelBuildInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ModelBuildInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
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

interface ModelBuildPayload extends ModelBuildResource, TwilioResponsePayload {}

interface ModelBuildResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  assistant_sid?: string | null;
  sid?: string | null;
  status?: ModelBuildStatus;
  unique_name?: string | null;
  url?: string | null;
  build_duration?: number | null;
  error_code?: number | null;
}

export class ModelBuildInstance {
  protected _solution: ModelBuildContextSolution;
  protected _context?: ModelBuildContext;

  constructor(
    protected _version: Understand,
    payload: ModelBuildPayload,
    assistantSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.status = payload.status;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;
    this.buildDuration = deserialize.integer(payload.build_duration);
    this.errorCode = deserialize.integer(payload.error_code);

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Model Build.
   */
  accountSid?: string | null;
  /**
   * The date that this resource was created
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The unique ID of the parent Assistant.
   */
  assistantSid?: string | null;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  status?: ModelBuildStatus;
  /**
   * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   */
  uniqueName?: string | null;
  url?: string | null;
  /**
   * The time in seconds it took to build the model.
   */
  buildDuration?: number | null;
  errorCode?: number | null;

  private get _proxy(): ModelBuildContext {
    this._context =
      this._context ||
      new ModelBuildContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  update(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  /**
   * Update a ModelBuildInstance
   *
   * @param { ModelBuildContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  update(
    params: ModelBuildContextUpdateOptions,
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  update(params?: any, callback?: any): Promise<ModelBuildInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      assistantSid: this.assistantSid,
      sid: this.sid,
      status: this.status,
      uniqueName: this.uniqueName,
      url: this.url,
      buildDuration: this.buildDuration,
      errorCode: this.errorCode,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ModelBuildListInstance {
  (sid: string): ModelBuildContext;
  get(sid: string): ModelBuildContext;

  /**
   * Create a ModelBuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  create(
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  /**
   * Create a ModelBuildInstance
   *
   * @param { ModelBuildListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ModelBuildInstance
   */
  create(
    params: ModelBuildListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ModelBuildInstance) => any
  ): Promise<ModelBuildInstance>;
  create(params?: any, callback?: any): Promise<ModelBuildInstance>;

  /**
   * Streams ModelBuildInstance records from the API.
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
    callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ModelBuildInstance records from the API.
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
   * @param { ModelBuildListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ModelBuildListInstanceEachOptions,
    callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ModelBuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage>;
  /**
   * Retrieve a single target page of ModelBuildInstance records from the API.
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
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage>;
  getPage(params?: any, callback?: any): Promise<ModelBuildPage>;
  /**
   * Lists ModelBuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ModelBuildInstance[]) => any
  ): Promise<ModelBuildInstance[]>;
  /**
   * Lists ModelBuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ModelBuildListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ModelBuildListInstanceOptions,
    callback?: (error: Error | null, items: ModelBuildInstance[]) => any
  ): Promise<ModelBuildInstance[]>;
  list(params?: any, callback?: any): Promise<ModelBuildInstance[]>;
  /**
   * Retrieve a single page of ModelBuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage>;
  /**
   * Retrieve a single page of ModelBuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ModelBuildListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ModelBuildListInstancePageOptions,
    callback?: (error: Error | null, items: ModelBuildPage) => any
  ): Promise<ModelBuildPage>;
  page(params?: any, callback?: any): Promise<ModelBuildPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ModelBuildSolution {
  assistantSid?: string;
}

interface ModelBuildListInstanceImpl extends ModelBuildListInstance {}
class ModelBuildListInstanceImpl implements ModelBuildListInstance {
  _version?: Understand;
  _solution?: ModelBuildSolution;
  _uri?: string;
}

export function ModelBuildListInstance(
  version: Understand,
  assistantSid: string
): ModelBuildListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ModelBuildListInstanceImpl;

  instance.get = function get(sid): ModelBuildContext {
    return new ModelBuildContextImpl(version, assistantSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/ModelBuilds`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<ModelBuildInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ModelBuildInstance(
          operationVersion,
          payload,
          this._solution.assistantSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<ModelBuildPage> {
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
      (payload) => new ModelBuildPage(operationVersion, payload, this._solution)
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
  ): Promise<ModelBuildPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ModelBuildPage(this._version, payload, this._solution)
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

export class ModelBuildPage extends Page<
  Understand,
  ModelBuildPayload,
  ModelBuildResource,
  ModelBuildInstance
> {
  /**
   * Initialize the ModelBuildPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Understand,
    response: Response<string>,
    solution: ModelBuildSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ModelBuildInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ModelBuildPayload): ModelBuildInstance {
    return new ModelBuildInstance(
      this._version,
      payload,
      this._solution.assistantSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
