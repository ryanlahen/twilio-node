/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
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

type InteractionResourceStatus =
  | "accepted"
  | "answered"
  | "busy"
  | "canceled"
  | "completed"
  | "deleted"
  | "delivered"
  | "delivery-unknown"
  | "failed"
  | "in-progress"
  | "initiated"
  | "no-answer"
  | "queued"
  | "received"
  | "receiving"
  | "ringing"
  | "scheduled"
  | "sending"
  | "sent"
  | "undelivered"
  | "unknown";

type InteractionType = "message" | "voice" | "unknown";

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
export interface InteractionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: InteractionInstance, done: (err?: Error) => void) => void;
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
export interface InteractionListInstanceOptions {
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
export interface InteractionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface InteractionContext {
  /**
   * Remove a InteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a InteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InteractionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InteractionInstance) => any
  ): Promise<InteractionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InteractionContextSolution {
  serviceSid?: string;
  sessionSid?: string;
  sid?: string;
}

export class InteractionContextImpl implements InteractionContext {
  protected _solution: InteractionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    serviceSid: string,
    sessionSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sessionSid)) {
      throw new Error("Parameter 'sessionSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sessionSid, sid };
    this._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Interactions/${sid}`;
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

  fetch(callback?: any): Promise<InteractionInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InteractionInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.sessionSid,
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

interface InteractionPayload
  extends InteractionResource,
    TwilioResponsePayload {}

interface InteractionResource {
  sid?: string | null;
  session_sid?: string | null;
  service_sid?: string | null;
  account_sid?: string | null;
  data?: string | null;
  type?: InteractionType;
  inbound_participant_sid?: string | null;
  inbound_resource_sid?: string | null;
  inbound_resource_status?: InteractionResourceStatus;
  inbound_resource_type?: string | null;
  inbound_resource_url?: string | null;
  outbound_participant_sid?: string | null;
  outbound_resource_sid?: string | null;
  outbound_resource_status?: InteractionResourceStatus;
  outbound_resource_type?: string | null;
  outbound_resource_url?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class InteractionInstance {
  protected _solution: InteractionContextSolution;
  protected _context?: InteractionContext;

  constructor(
    protected _version: V1,
    payload: InteractionPayload,
    serviceSid: string,
    sessionSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.sessionSid = payload.session_sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.data = payload.data;
    this.type = payload.type;
    this.inboundParticipantSid = payload.inbound_participant_sid;
    this.inboundResourceSid = payload.inbound_resource_sid;
    this.inboundResourceStatus = payload.inbound_resource_status;
    this.inboundResourceType = payload.inbound_resource_type;
    this.inboundResourceUrl = payload.inbound_resource_url;
    this.outboundParticipantSid = payload.outbound_participant_sid;
    this.outboundResourceSid = payload.outbound_resource_sid;
    this.outboundResourceStatus = payload.outbound_resource_status;
    this.outboundResourceType = payload.outbound_resource_type;
    this.outboundResourceUrl = payload.outbound_resource_url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, sessionSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the resource\'s parent Session
   */
  sessionSid?: string | null;
  /**
   * The SID of the resource\'s parent Service
   */
  serviceSid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * A JSON string that includes the message body of message interactions
   */
  data?: string | null;
  type?: InteractionType;
  /**
   * The SID of the inbound Participant resource
   */
  inboundParticipantSid?: string | null;
  /**
   * The SID of the inbound resource
   */
  inboundResourceSid?: string | null;
  inboundResourceStatus?: InteractionResourceStatus;
  /**
   * The inbound resource type
   */
  inboundResourceType?: string | null;
  /**
   * The URL of the Twilio inbound resource
   */
  inboundResourceUrl?: string | null;
  /**
   * The SID of the outbound Participant
   */
  outboundParticipantSid?: string | null;
  /**
   * The SID of the outbound resource
   */
  outboundResourceSid?: string | null;
  outboundResourceStatus?: InteractionResourceStatus;
  /**
   * The outbound resource type
   */
  outboundResourceType?: string | null;
  /**
   * The URL of the Twilio outbound resource
   */
  outboundResourceUrl?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Interaction was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Interaction resource
   */
  url?: string | null;

  private get _proxy(): InteractionContext {
    this._context =
      this._context ||
      new InteractionContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sessionSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a InteractionInstance
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
   * Fetch a InteractionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed InteractionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InteractionInstance) => any
  ): Promise<InteractionInstance> {
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
      sessionSid: this.sessionSid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      data: this.data,
      type: this.type,
      inboundParticipantSid: this.inboundParticipantSid,
      inboundResourceSid: this.inboundResourceSid,
      inboundResourceStatus: this.inboundResourceStatus,
      inboundResourceType: this.inboundResourceType,
      inboundResourceUrl: this.inboundResourceUrl,
      outboundParticipantSid: this.outboundParticipantSid,
      outboundResourceSid: this.outboundResourceSid,
      outboundResourceStatus: this.outboundResourceStatus,
      outboundResourceType: this.outboundResourceType,
      outboundResourceUrl: this.outboundResourceUrl,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InteractionListInstance {
  (sid: string): InteractionContext;
  get(sid: string): InteractionContext;

  /**
   * Streams InteractionInstance records from the API.
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
    callback?: (item: InteractionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams InteractionInstance records from the API.
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
   * @param { InteractionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: InteractionListInstanceEachOptions,
    callback?: (item: InteractionInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: InteractionPage) => any
  ): Promise<InteractionPage>;
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
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
    callback?: (error: Error | null, items: InteractionPage) => any
  ): Promise<InteractionPage>;
  getPage(params?: any, callback?: any): Promise<InteractionPage>;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: InteractionInstance[]) => any
  ): Promise<InteractionInstance[]>;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: InteractionListInstanceOptions,
    callback?: (error: Error | null, items: InteractionInstance[]) => any
  ): Promise<InteractionInstance[]>;
  list(params?: any, callback?: any): Promise<InteractionInstance[]>;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InteractionPage) => any
  ): Promise<InteractionPage>;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InteractionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: InteractionListInstancePageOptions,
    callback?: (error: Error | null, items: InteractionPage) => any
  ): Promise<InteractionPage>;
  page(params?: any, callback?: any): Promise<InteractionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InteractionSolution {
  serviceSid?: string;
  sessionSid?: string;
}

interface InteractionListInstanceImpl extends InteractionListInstance {}
class InteractionListInstanceImpl implements InteractionListInstance {
  _version?: V1;
  _solution?: InteractionSolution;
  _uri?: string;
}

export function InteractionListInstance(
  version: V1,
  serviceSid: string,
  sessionSid: string
): InteractionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(sessionSid)) {
    throw new Error("Parameter 'sessionSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as InteractionListInstanceImpl;

  instance.get = function get(sid): InteractionContext {
    return new InteractionContextImpl(version, serviceSid, sessionSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, sessionSid };
  instance._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Interactions`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<InteractionPage> {
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
        new InteractionPage(operationVersion, payload, this._solution)
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
  ): Promise<InteractionPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new InteractionPage(this._version, payload, this._solution)
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

export class InteractionPage extends Page<
  V1,
  InteractionPayload,
  InteractionResource,
  InteractionInstance
> {
  /**
   * Initialize the InteractionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: InteractionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InteractionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InteractionPayload): InteractionInstance {
    return new InteractionInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.sessionSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
