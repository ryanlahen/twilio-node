/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
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

type VideoParticipantSummaryCodec = "VP8" | "H264" | "VP9";

type VideoParticipantSummaryEdgeLocation =
  | "ashburn"
  | "dublin"
  | "frankfurt"
  | "singapore"
  | "sydney"
  | "sao_paulo"
  | "roaming"
  | "umatilla"
  | "tokyo";

type VideoParticipantSummaryRoomStatus = "in_progress" | "completed";

type VideoParticipantSummaryTwilioRealm =
  | "us1"
  | "us2"
  | "au1"
  | "br1"
  | "ie1"
  | "jp1"
  | "sg1"
  | "in1"
  | "de1"
  | "gll";

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
export interface ParticipantListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
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
export interface ParticipantListInstanceOptions {
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
export interface ParticipantListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface ParticipantContext {
  /**
   * Fetch a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ParticipantContextSolution {
  roomSid?: string;
  participantSid?: string;
}

export class ParticipantContextImpl implements ParticipantContext {
  protected _solution: ParticipantContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, roomSid: string, participantSid: string) {
    if (!isValidPathParam(roomSid)) {
      throw new Error("Parameter 'roomSid' is not valid.");
    }

    if (!isValidPathParam(participantSid)) {
      throw new Error("Parameter 'participantSid' is not valid.");
    }

    this._solution = { roomSid, participantSid };
    this._uri = `/Video/Rooms/${roomSid}/Participants/${participantSid}`;
  }

  fetch(callback?: any): Promise<ParticipantInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ParticipantInstance(
          operationVersion,
          payload,
          this._solution.roomSid,
          this._solution.participantSid
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

interface ParticipantPayload
  extends ParticipantResource,
    TwilioResponsePayload {}

interface ParticipantResource {
  participant_sid?: string | null;
  participant_identity?: string | null;
  join_time?: Date | null;
  leave_time?: Date | null;
  duration_sec?: number | null;
  account_sid?: string | null;
  room_sid?: string | null;
  status?: VideoParticipantSummaryRoomStatus;
  codecs?: Array<VideoParticipantSummaryCodec> | null;
  end_reason?: string | null;
  error_code?: number | null;
  error_code_url?: string | null;
  media_region?: VideoParticipantSummaryTwilioRealm;
  properties?: any | null;
  edge_location?: VideoParticipantSummaryEdgeLocation;
  publisher_info?: any | null;
  url?: string | null;
}

export class ParticipantInstance {
  protected _solution: ParticipantContextSolution;
  protected _context?: ParticipantContext;

  constructor(
    protected _version: V1,
    payload: ParticipantPayload,
    roomSid: string,
    participantSid?: string
  ) {
    this.participantSid = payload.participant_sid;
    this.participantIdentity = payload.participant_identity;
    this.joinTime = deserialize.iso8601DateTime(payload.join_time);
    this.leaveTime = deserialize.iso8601DateTime(payload.leave_time);
    this.durationSec = payload.duration_sec;
    this.accountSid = payload.account_sid;
    this.roomSid = payload.room_sid;
    this.status = payload.status;
    this.codecs = payload.codecs;
    this.endReason = payload.end_reason;
    this.errorCode = deserialize.integer(payload.error_code);
    this.errorCodeUrl = payload.error_code_url;
    this.mediaRegion = payload.media_region;
    this.properties = payload.properties;
    this.edgeLocation = payload.edge_location;
    this.publisherInfo = payload.publisher_info;
    this.url = payload.url;

    this._solution = {
      roomSid,
      participantSid: participantSid || this.participantSid,
    };
  }

  /**
   * Unique identifier for the participant.
   */
  participantSid?: string | null;
  /**
   * The application-defined string that uniquely identifies the participant within a Room.
   */
  participantIdentity?: string | null;
  /**
   * When the participant joined the room.
   */
  joinTime?: Date | null;
  /**
   * When the participant left the room
   */
  leaveTime?: Date | null;
  /**
   * Amount of time in seconds the participant was in the room.
   */
  durationSec?: number | null;
  /**
   * Account SID associated with the room.
   */
  accountSid?: string | null;
  /**
   * Unique identifier for the room.
   */
  roomSid?: string | null;
  status?: VideoParticipantSummaryRoomStatus;
  /**
   * Codecs detected from the participant.
   */
  codecs?: Array<VideoParticipantSummaryCodec> | null;
  /**
   * Reason the participant left the room.
   */
  endReason?: string | null;
  /**
   * Errors encountered by the participant.
   */
  errorCode?: number | null;
  /**
   * Twilio error code dictionary link.
   */
  errorCodeUrl?: string | null;
  mediaRegion?: VideoParticipantSummaryTwilioRealm;
  /**
   * Object containing information about the participant\'s data from the room.
   */
  properties?: any | null;
  edgeLocation?: VideoParticipantSummaryEdgeLocation;
  /**
   * Object containing information about the SDK name and version.
   */
  publisherInfo?: any | null;
  /**
   * URL of the participant resource.
   */
  url?: string | null;

  private get _proxy(): ParticipantContext {
    this._context =
      this._context ||
      new ParticipantContextImpl(
        this._version,
        this._solution.roomSid,
        this._solution.participantSid
      );
    return this._context;
  }

  /**
   * Fetch a ParticipantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ParticipantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      participantSid: this.participantSid,
      participantIdentity: this.participantIdentity,
      joinTime: this.joinTime,
      leaveTime: this.leaveTime,
      durationSec: this.durationSec,
      accountSid: this.accountSid,
      roomSid: this.roomSid,
      status: this.status,
      codecs: this.codecs,
      endReason: this.endReason,
      errorCode: this.errorCode,
      errorCodeUrl: this.errorCodeUrl,
      mediaRegion: this.mediaRegion,
      properties: this.properties,
      edgeLocation: this.edgeLocation,
      publisherInfo: this.publisherInfo,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ParticipantListInstance {
  (participantSid: string): ParticipantContext;
  get(participantSid: string): ParticipantContext;

  /**
   * Streams ParticipantInstance records from the API.
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
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams ParticipantInstance records from the API.
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
   * @param { ParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ParticipantListInstanceEachOptions,
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
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
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  getPage(params?: any, callback?: any): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ParticipantInstance[]) => any
  ): Promise<ParticipantInstance[]>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ParticipantListInstanceOptions,
    callback?: (error: Error | null, items: ParticipantInstance[]) => any
  ): Promise<ParticipantInstance[]>;
  list(params?: any, callback?: any): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ParticipantListInstancePageOptions,
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  page(params?: any, callback?: any): Promise<ParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ParticipantSolution {
  roomSid?: string;
}

interface ParticipantListInstanceImpl extends ParticipantListInstance {}
class ParticipantListInstanceImpl implements ParticipantListInstance {
  _version?: V1;
  _solution?: ParticipantSolution;
  _uri?: string;
}

export function ParticipantListInstance(
  version: V1,
  roomSid: string
): ParticipantListInstance {
  if (!isValidPathParam(roomSid)) {
    throw new Error("Parameter 'roomSid' is not valid.");
  }

  const instance = ((participantSid) =>
    instance.get(participantSid)) as ParticipantListInstanceImpl;

  instance.get = function get(participantSid): ParticipantContext {
    return new ParticipantContextImpl(version, roomSid, participantSid);
  };

  instance._version = version;
  instance._solution = { roomSid };
  instance._uri = `/Video/Rooms/${roomSid}/Participants`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<ParticipantPage> {
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
        new ParticipantPage(operationVersion, payload, this._solution)
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
  ): Promise<ParticipantPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new ParticipantPage(this._version, payload, this._solution)
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

export class ParticipantPage extends Page<
  V1,
  ParticipantPayload,
  ParticipantResource,
  ParticipantInstance
> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ParticipantSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance {
    return new ParticipantInstance(
      this._version,
      payload,
      this._solution.roomSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
