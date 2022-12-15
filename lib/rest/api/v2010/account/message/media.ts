/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to each
 *
 * @property { Date } [dateCreated] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
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
export interface MediaListInstanceEachOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  pageSize?: number;
  callback?: (item: MediaInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { Date } [dateCreated] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface MediaListInstanceOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { Date } [dateCreated] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedBefore] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { Date } [dateCreatedAfter] Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface MediaListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedBefore?: Date;
  dateCreatedAfter?: Date;
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface MediaContext {
  /**
   * Remove a MediaInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a MediaInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaInstance) => any
  ): Promise<MediaInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MediaContextSolution {
  accountSid?: string;
  messageSid?: string;
  sid?: string;
}

export class MediaContextImpl implements MediaContext {
  protected _solution: MediaContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    messageSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(messageSid)) {
      throw new Error("Parameter 'messageSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, messageSid, sid };
    this._uri = `/Accounts/${accountSid}/Messages/${messageSid}/Media/${sid}.json`;
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

  fetch(callback?: any): Promise<MediaInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MediaInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.messageSid,
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

interface MediaPayload extends MediaResource, TwilioResponsePayload {}

interface MediaResource {
  account_sid?: string | null;
  content_type?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  parent_sid?: string | null;
  sid?: string | null;
  uri?: string | null;
}

export class MediaInstance {
  protected _solution: MediaContextSolution;
  protected _context?: MediaContext;

  constructor(
    protected _version: V2010,
    payload: MediaPayload,
    accountSid: string,
    messageSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.contentType = payload.content_type;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.parentSid = payload.parent_sid;
    this.sid = payload.sid;
    this.uri = payload.uri;

    this._solution = { accountSid, messageSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created this resource
   */
  accountSid?: string | null;
  /**
   * The default mime-type of the media
   */
  contentType?: string | null;
  /**
   * The RFC 2822 date and time in GMT that this resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that this resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The SID of the resource that created the media
   */
  parentSid?: string | null;
  /**
   * The unique string that identifies this resource
   */
  sid?: string | null;
  /**
   * The URI of this resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): MediaContext {
    this._context =
      this._context ||
      new MediaContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.messageSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a MediaInstance
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
   * Fetch a MediaInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed MediaInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaInstance) => any
  ): Promise<MediaInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      contentType: this.contentType,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      parentSid: this.parentSid,
      sid: this.sid,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MediaListInstance {
  (sid: string): MediaContext;
  get(sid: string): MediaContext;

  /**
   * Streams MediaInstance records from the API.
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
    callback?: (item: MediaInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams MediaInstance records from the API.
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
   * @param { MediaListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: MediaListInstanceEachOptions,
    callback?: (item: MediaInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of MediaInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: MediaPage) => any
  ): Promise<MediaPage>;
  /**
   * Retrieve a single target page of MediaInstance records from the API.
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
    callback?: (error: Error | null, items: MediaPage) => any
  ): Promise<MediaPage>;
  getPage(params?: any, callback?: any): Promise<MediaPage>;
  /**
   * Lists MediaInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MediaInstance[]) => any
  ): Promise<MediaInstance[]>;
  /**
   * Lists MediaInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: MediaListInstanceOptions,
    callback?: (error: Error | null, items: MediaInstance[]) => any
  ): Promise<MediaInstance[]>;
  list(params?: any, callback?: any): Promise<MediaInstance[]>;
  /**
   * Retrieve a single page of MediaInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MediaPage) => any
  ): Promise<MediaPage>;
  /**
   * Retrieve a single page of MediaInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: MediaListInstancePageOptions,
    callback?: (error: Error | null, items: MediaPage) => any
  ): Promise<MediaPage>;
  page(params?: any, callback?: any): Promise<MediaPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MediaSolution {
  accountSid?: string;
  messageSid?: string;
}

interface MediaListInstanceImpl extends MediaListInstance {}
class MediaListInstanceImpl implements MediaListInstance {
  _version?: V2010;
  _solution?: MediaSolution;
  _uri?: string;
}

export function MediaListInstance(
  version: V2010,
  accountSid: string,
  messageSid: string
): MediaListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(messageSid)) {
    throw new Error("Parameter 'messageSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as MediaListInstanceImpl;

  instance.get = function get(sid): MediaContext {
    return new MediaContextImpl(version, accountSid, messageSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid, messageSid };
  instance._uri = `/Accounts/${accountSid}/Messages/${messageSid}/Media.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<MediaPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreated"] !== undefined)
      data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreated<"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreated>"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
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
      (payload) => new MediaPage(operationVersion, payload, this._solution)
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
  ): Promise<MediaPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new MediaPage(this._version, payload, this._solution)
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

export class MediaPage extends Page<
  V2010,
  MediaPayload,
  MediaResource,
  MediaInstance
> {
  /**
   * Initialize the MediaPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: MediaSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MediaInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MediaPayload): MediaInstance {
    return new MediaInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.messageSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
