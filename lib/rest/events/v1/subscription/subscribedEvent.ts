/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to update a SubscribedEventInstance
 *
 * @property { number } [schemaVersion] The schema version that the subscription should use.
 */
export interface SubscribedEventContextUpdateOptions {
  schemaVersion?: number;
}

/**
 * Options to pass to create a SubscribedEventInstance
 *
 * @property { string } type Type of event being subscribed to.
 * @property { number } [schemaVersion] The schema version that the subscription should use.
 */
export interface SubscribedEventListInstanceCreateOptions {
  type: string;
  schemaVersion?: number;
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
export interface SubscribedEventListInstanceEachOptions {
  pageSize?: number;
  callback?: (
    item: SubscribedEventInstance,
    done: (err?: Error) => void
  ) => void;
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
export interface SubscribedEventListInstanceOptions {
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
export interface SubscribedEventListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface SubscribedEventContext {
  /**
   * Remove a SubscribedEventInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SubscribedEventInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedEventInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SubscribedEventInstance) => any
  ): Promise<SubscribedEventInstance>;

  /**
   * Update a SubscribedEventInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedEventInstance
   */
  update(
    callback?: (error: Error | null, item?: SubscribedEventInstance) => any
  ): Promise<SubscribedEventInstance>;
  /**
   * Update a SubscribedEventInstance
   *
   * @param { SubscribedEventContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedEventInstance
   */
  update(
    params: SubscribedEventContextUpdateOptions,
    callback?: (error: Error | null, item?: SubscribedEventInstance) => any
  ): Promise<SubscribedEventInstance>;
  update(params?: any, callback?: any): Promise<SubscribedEventInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SubscribedEventContextSolution {
  subscriptionSid?: string;
  type?: string;
}

export class SubscribedEventContextImpl implements SubscribedEventContext {
  protected _solution: SubscribedEventContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, subscriptionSid: string, type: string) {
    if (!isValidPathParam(subscriptionSid)) {
      throw new Error("Parameter 'subscriptionSid' is not valid.");
    }

    if (!isValidPathParam(type)) {
      throw new Error("Parameter 'type' is not valid.");
    }

    this._solution = { subscriptionSid, type };
    this._uri = `/Subscriptions/${subscriptionSid}/SubscribedEvents/${type}`;
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

  fetch(callback?: any): Promise<SubscribedEventInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SubscribedEventInstance(
          operationVersion,
          payload,
          this._solution.subscriptionSid,
          this._solution.type
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<SubscribedEventInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["schemaVersion"] !== undefined)
      data["SchemaVersion"] = params["schemaVersion"];

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
        new SubscribedEventInstance(
          operationVersion,
          payload,
          this._solution.subscriptionSid,
          this._solution.type
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

interface SubscribedEventPayload
  extends SubscribedEventResource,
    TwilioResponsePayload {}

interface SubscribedEventResource {
  account_sid?: string | null;
  type?: string | null;
  schema_version?: number | null;
  subscription_sid?: string | null;
  url?: string | null;
}

export class SubscribedEventInstance {
  protected _solution: SubscribedEventContextSolution;
  protected _context?: SubscribedEventContext;

  constructor(
    protected _version: V1,
    payload: SubscribedEventPayload,
    subscriptionSid: string,
    type?: string
  ) {
    this.accountSid = payload.account_sid;
    this.type = payload.type;
    this.schemaVersion = deserialize.integer(payload.schema_version);
    this.subscriptionSid = payload.subscription_sid;
    this.url = payload.url;

    this._solution = { subscriptionSid, type: type || this.type };
  }

  /**
   * Account SID.
   */
  accountSid?: string | null;
  /**
   * Type of event being subscribed to.
   */
  type?: string | null;
  /**
   * The schema version that the subscription should use.
   */
  schemaVersion?: number | null;
  /**
   * Subscription SID.
   */
  subscriptionSid?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  private get _proxy(): SubscribedEventContext {
    this._context =
      this._context ||
      new SubscribedEventContextImpl(
        this._version,
        this._solution.subscriptionSid,
        this._solution.type
      );
    return this._context;
  }

  /**
   * Remove a SubscribedEventInstance
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
   * Fetch a SubscribedEventInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedEventInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SubscribedEventInstance) => any
  ): Promise<SubscribedEventInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SubscribedEventInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedEventInstance
   */
  update(
    callback?: (error: Error | null, item?: SubscribedEventInstance) => any
  ): Promise<SubscribedEventInstance>;
  /**
   * Update a SubscribedEventInstance
   *
   * @param { SubscribedEventContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedEventInstance
   */
  update(
    params: SubscribedEventContextUpdateOptions,
    callback?: (error: Error | null, item?: SubscribedEventInstance) => any
  ): Promise<SubscribedEventInstance>;
  update(params?: any, callback?: any): Promise<SubscribedEventInstance> {
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
      type: this.type,
      schemaVersion: this.schemaVersion,
      subscriptionSid: this.subscriptionSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SubscribedEventListInstance {
  (type: string): SubscribedEventContext;
  get(type: string): SubscribedEventContext;

  /**
   * Create a SubscribedEventInstance
   *
   * @param { SubscribedEventListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribedEventInstance
   */
  create(
    params: SubscribedEventListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SubscribedEventInstance) => any
  ): Promise<SubscribedEventInstance>;
  create(params: any, callback?: any): Promise<SubscribedEventInstance>;

  /**
   * Streams SubscribedEventInstance records from the API.
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
    callback?: (
      item: SubscribedEventInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams SubscribedEventInstance records from the API.
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
   * @param { SubscribedEventListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: SubscribedEventListInstanceEachOptions,
    callback?: (
      item: SubscribedEventInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of SubscribedEventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: SubscribedEventPage) => any
  ): Promise<SubscribedEventPage>;
  /**
   * Retrieve a single target page of SubscribedEventInstance records from the API.
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
    callback?: (error: Error | null, items: SubscribedEventPage) => any
  ): Promise<SubscribedEventPage>;
  getPage(params?: any, callback?: any): Promise<SubscribedEventPage>;
  /**
   * Lists SubscribedEventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SubscribedEventInstance[]) => any
  ): Promise<SubscribedEventInstance[]>;
  /**
   * Lists SubscribedEventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SubscribedEventListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: SubscribedEventListInstanceOptions,
    callback?: (error: Error | null, items: SubscribedEventInstance[]) => any
  ): Promise<SubscribedEventInstance[]>;
  list(params?: any, callback?: any): Promise<SubscribedEventInstance[]>;
  /**
   * Retrieve a single page of SubscribedEventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SubscribedEventPage) => any
  ): Promise<SubscribedEventPage>;
  /**
   * Retrieve a single page of SubscribedEventInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SubscribedEventListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: SubscribedEventListInstancePageOptions,
    callback?: (error: Error | null, items: SubscribedEventPage) => any
  ): Promise<SubscribedEventPage>;
  page(params?: any, callback?: any): Promise<SubscribedEventPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SubscribedEventSolution {
  subscriptionSid?: string;
}

interface SubscribedEventListInstanceImpl extends SubscribedEventListInstance {}
class SubscribedEventListInstanceImpl implements SubscribedEventListInstance {
  _version?: V1;
  _solution?: SubscribedEventSolution;
  _uri?: string;
}

export function SubscribedEventListInstance(
  version: V1,
  subscriptionSid: string
): SubscribedEventListInstance {
  if (!isValidPathParam(subscriptionSid)) {
    throw new Error("Parameter 'subscriptionSid' is not valid.");
  }

  const instance = ((type) =>
    instance.get(type)) as SubscribedEventListInstanceImpl;

  instance.get = function get(type): SubscribedEventContext {
    return new SubscribedEventContextImpl(version, subscriptionSid, type);
  };

  instance._version = version;
  instance._solution = { subscriptionSid };
  instance._uri = `/Subscriptions/${subscriptionSid}/SubscribedEvents`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<SubscribedEventInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["type"] === null || params["type"] === undefined) {
      throw new Error("Required parameter \"params['type']\" missing.");
    }

    let data: any = {};

    data["Type"] = params["type"];
    if (params["schemaVersion"] !== undefined)
      data["SchemaVersion"] = params["schemaVersion"];

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
        new SubscribedEventInstance(
          operationVersion,
          payload,
          this._solution.subscriptionSid
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
  ): Promise<SubscribedEventPage> {
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
        new SubscribedEventPage(operationVersion, payload, this._solution)
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
  ): Promise<SubscribedEventPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new SubscribedEventPage(this._version, payload, this._solution)
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

export class SubscribedEventPage extends Page<
  V1,
  SubscribedEventPayload,
  SubscribedEventResource,
  SubscribedEventInstance
> {
  /**
   * Initialize the SubscribedEventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SubscribedEventSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SubscribedEventInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscribedEventPayload): SubscribedEventInstance {
    return new SubscribedEventInstance(
      this._version,
      payload,
      this._solution.subscriptionSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
