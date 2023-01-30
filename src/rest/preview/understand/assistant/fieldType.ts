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
import { FieldValueListInstance } from "./fieldType/fieldValue";

/**
 * Options to pass to update a FieldTypeInstance
 */
export interface FieldTypeContextUpdateOptions {
  /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
  friendlyName?: string;
  /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
  uniqueName?: string;
}

/**
 * Options to pass to create a FieldTypeInstance
 */
export interface FieldTypeListInstanceCreateOptions {
  /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
  uniqueName: string;
  /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
  friendlyName?: string;
}
/**
 * Options to pass to each
 */
export interface FieldTypeListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FieldTypeListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FieldTypeListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FieldTypeContext {
  fieldValues: FieldValueListInstance;

  /**
   * Remove a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance>;

  /**
   * Update a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldTypeInstance
   */
  update(
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance>;
  /**
   * Update a FieldTypeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldTypeInstance
   */
  update(
    params: FieldTypeContextUpdateOptions,
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FieldTypeContextSolution {
  assistantSid: string;
  sid: string;
}

export class FieldTypeContextImpl implements FieldTypeContext {
  protected _solution: FieldTypeContextSolution;
  protected _uri: string;

  protected _fieldValues?: FieldValueListInstance;

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
    this._uri = `/Assistants/${assistantSid}/FieldTypes/${sid}`;
  }

  get fieldValues(): FieldValueListInstance {
    this._fieldValues =
      this._fieldValues ||
      FieldValueListInstance(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._fieldValues;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldTypeInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | FieldTypeContextUpdateOptions
      | ((error: Error | null, item?: FieldTypeInstance) => any),
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldTypeInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
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

interface FieldTypePayload extends TwilioResponsePayload {
  field_types: FieldTypeResource[];
}

interface FieldTypeResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: Record<string, string>;
  assistant_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

export class FieldTypeInstance {
  protected _solution: FieldTypeContextSolution;
  protected _context?: FieldTypeContext;

  constructor(
    protected _version: Understand,
    payload: FieldTypeResource,
    assistantSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.links = payload.links;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Field Type.
   */
  accountSid: string;
  /**
   * The date that this resource was created
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated
   */
  dateUpdated: Date;
  /**
   * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
   */
  friendlyName: string;
  links: Record<string, string>;
  /**
   * The unique ID of the Assistant.
   */
  assistantSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   */
  uniqueName: string;
  url: string;

  private get _proxy(): FieldTypeContext {
    this._context =
      this._context ||
      new FieldTypeContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldTypeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FieldTypeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldTypeInstance
   */
  update(
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance>;
  /**
   * Update a FieldTypeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldTypeInstance
   */
  update(
    params: FieldTypeContextUpdateOptions,
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the fieldValues.
   */
  fieldValues(): FieldValueListInstance {
    return this._proxy.fieldValues;
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
      friendlyName: this.friendlyName,
      links: this.links,
      assistantSid: this.assistantSid,
      sid: this.sid,
      uniqueName: this.uniqueName,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FieldTypeSolution {
  assistantSid: string;
}

export interface FieldTypeListInstance {
  _version: Understand;
  _solution: FieldTypeSolution;
  _uri: string;

  (sid: string): FieldTypeContext;
  get(sid: string): FieldTypeContext;

  /**
   * Create a FieldTypeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FieldTypeInstance
   */
  create(
    params: FieldTypeListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance>;

  /**
   * Streams FieldTypeInstance records from the API.
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
   * @param { FieldTypeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: FieldTypeListInstanceEachOptions,
    callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of FieldTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FieldTypePage) => any
  ): Promise<FieldTypePage>;
  /**
   * Lists FieldTypeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldTypeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FieldTypeInstance[]) => any
  ): Promise<FieldTypeInstance[]>;
  list(
    params: FieldTypeListInstanceOptions,
    callback?: (error: Error | null, items: FieldTypeInstance[]) => any
  ): Promise<FieldTypeInstance[]>;
  /**
   * Retrieve a single page of FieldTypeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FieldTypeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FieldTypePage) => any
  ): Promise<FieldTypePage>;
  page(
    params: FieldTypeListInstancePageOptions,
    callback?: (error: Error | null, items: FieldTypePage) => any
  ): Promise<FieldTypePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FieldTypeListInstance(
  version: Understand,
  assistantSid: string
): FieldTypeListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as FieldTypeListInstance;

  instance.get = function get(sid): FieldTypeContext {
    return new FieldTypeContextImpl(version, assistantSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/FieldTypes`;

  instance.create = function create(
    params: FieldTypeListInstanceCreateOptions,
    callback?: (error: Error | null, items: FieldTypeInstance) => any
  ): Promise<FieldTypeInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error("Required parameter \"params['uniqueName']\" missing.");
    }

    let data: any = {};

    data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldTypeInstance(
          operationVersion,
          payload,
          instance._solution.assistantSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | FieldTypeListInstancePageOptions
      | ((error: Error | null, items: FieldTypePage) => any),
    callback?: (error: Error | null, items: FieldTypePage) => any
  ): Promise<FieldTypePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FieldTypePage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: FieldTypePage) => any
  ): Promise<FieldTypePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new FieldTypePage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class FieldTypePage extends Page<
  Understand,
  FieldTypePayload,
  FieldTypeResource,
  FieldTypeInstance
> {
  /**
   * Initialize the FieldTypePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Understand,
    response: Response<string>,
    solution: FieldTypeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FieldTypeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldTypeResource): FieldTypeInstance {
    return new FieldTypeInstance(
      this._version,
      payload,
      this._solution.assistantSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}