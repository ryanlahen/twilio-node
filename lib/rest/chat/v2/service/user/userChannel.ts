/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type UserChannelChannelStatus = "joined" | "invited" | "not_participating";

type UserChannelNotificationLevel = "default" | "muted";

type UserChannelWebhookEnabledType = "true" | "false";

/**
 * Options to pass to remove a UserChannelInstance
 *
 * @property { UserChannelWebhookEnabledType } [xTwilioWebhookEnabled] The X-Twilio-Webhook-Enabled HTTP request header
 */
export interface UserChannelContextRemoveOptions {
  xTwilioWebhookEnabled?: UserChannelWebhookEnabledType;
}

/**
 * Options to pass to update a UserChannelInstance
 *
 * @property { UserChannelNotificationLevel } [notificationLevel]
 * @property { number } [lastConsumedMessageIndex] The index of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) in the [Channel](https://www.twilio.com/docs/chat/channels) that the Member has read.
 * @property { Date } [lastConsumptionTimestamp] The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp of the last [Message](https://www.twilio.com/docs/chat/rest/message-resource) read event for the Member within the [Channel](https://www.twilio.com/docs/chat/channels).
 */
export interface UserChannelContextUpdateOptions {
  notificationLevel?: UserChannelNotificationLevel;
  lastConsumedMessageIndex?: number;
  lastConsumptionTimestamp?: Date;
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
export interface UserChannelListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void;
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
export interface UserChannelListInstanceOptions {
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
export interface UserChannelListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface UserChannelContext {
  /**
   * Remove a UserChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a UserChannelInstance
   *
   * @param { UserChannelContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  remove(
    params: UserChannelContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean>;

  /**
   * Fetch a UserChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserChannelInstance) => any
  ): Promise<UserChannelInstance>;

  /**
   * Update a UserChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: UserChannelInstance) => any
  ): Promise<UserChannelInstance>;
  /**
   * Update a UserChannelInstance
   *
   * @param { UserChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  update(
    params: UserChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: UserChannelInstance) => any
  ): Promise<UserChannelInstance>;
  update(params?: any, callback?: any): Promise<UserChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserChannelContextSolution {
  serviceSid?: string;
  userSid?: string;
  channelSid?: string;
}

export class UserChannelContextImpl implements UserChannelContext {
  protected _solution: UserChannelContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2,
    serviceSid: string,
    userSid: string,
    channelSid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(userSid)) {
      throw new Error("Parameter 'userSid' is not valid.");
    }

    if (!isValidPathParam(channelSid)) {
      throw new Error("Parameter 'channelSid' is not valid.");
    }

    this._solution = { serviceSid, userSid, channelSid };
    this._uri = `/Services/${serviceSid}/Users/${userSid}/Channels/${channelSid}`;
  }

  remove(params?: any, callback?: any): Promise<boolean> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    const headers: any = {};
    if (params["xTwilioWebhookEnabled"] !== undefined)
      headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];

    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
        params: data,
        headers,
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<UserChannelInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UserChannelInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.userSid,
          this._solution.channelSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<UserChannelInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["notificationLevel"] !== undefined)
      data["NotificationLevel"] = params["notificationLevel"];
    if (params["lastConsumedMessageIndex"] !== undefined)
      data["LastConsumedMessageIndex"] = params["lastConsumedMessageIndex"];
    if (params["lastConsumptionTimestamp"] !== undefined)
      data["LastConsumptionTimestamp"] = serialize.iso8601DateTime(
        params["lastConsumptionTimestamp"]
      );

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
        new UserChannelInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
          this._solution.userSid,
          this._solution.channelSid
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

interface UserChannelPayload
  extends UserChannelResource,
    TwilioResponsePayload {}

interface UserChannelResource {
  account_sid?: string | null;
  service_sid?: string | null;
  channel_sid?: string | null;
  user_sid?: string | null;
  member_sid?: string | null;
  status?: UserChannelChannelStatus;
  last_consumed_message_index?: number | null;
  unread_messages_count?: number | null;
  links?: object | null;
  url?: string | null;
  notification_level?: UserChannelNotificationLevel;
}

export class UserChannelInstance {
  protected _solution: UserChannelContextSolution;
  protected _context?: UserChannelContext;

  constructor(
    protected _version: V2,
    payload: UserChannelPayload,
    serviceSid: string,
    userSid: string,
    channelSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.channelSid = payload.channel_sid;
    this.userSid = payload.user_sid;
    this.memberSid = payload.member_sid;
    this.status = payload.status;
    this.lastConsumedMessageIndex = deserialize.integer(
      payload.last_consumed_message_index
    );
    this.unreadMessagesCount = deserialize.integer(
      payload.unread_messages_count
    );
    this.links = payload.links;
    this.url = payload.url;
    this.notificationLevel = payload.notification_level;

    this._solution = {
      serviceSid,
      userSid,
      channelSid: channelSid || this.channelSid,
    };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Channel the resource belongs to
   */
  channelSid?: string | null;
  /**
   * The SID of the User the User Channel belongs to
   */
  userSid?: string | null;
  /**
   * The SID of the User as a Member in the Channel
   */
  memberSid?: string | null;
  status?: UserChannelChannelStatus;
  /**
   * The index of the last Message in the Channel the Member has read
   */
  lastConsumedMessageIndex?: number | null;
  /**
   * The number of unread Messages in the Channel for the User
   */
  unreadMessagesCount?: number | null;
  /**
   * Absolute URLs to access the Members, Messages , Invites and, if it exists, the last Message for the Channel
   */
  links?: object | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;
  notificationLevel?: UserChannelNotificationLevel;

  private get _proxy(): UserChannelContext {
    this._context =
      this._context ||
      new UserChannelContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.userSid,
        this._solution.channelSid
      );
    return this._context;
  }

  /**
   * Remove a UserChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  /**
   * Remove a UserChannelInstance
   *
   * @param { UserChannelContextRemoveOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  remove(
    params: UserChannelContextRemoveOptions,
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;
  remove(params?: any, callback?: any): Promise<boolean> {
    return this._proxy.remove(params, callback);
  }

  /**
   * Fetch a UserChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserChannelInstance) => any
  ): Promise<UserChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a UserChannelInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  update(
    callback?: (error: Error | null, item?: UserChannelInstance) => any
  ): Promise<UserChannelInstance>;
  /**
   * Update a UserChannelInstance
   *
   * @param { UserChannelContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UserChannelInstance
   */
  update(
    params: UserChannelContextUpdateOptions,
    callback?: (error: Error | null, item?: UserChannelInstance) => any
  ): Promise<UserChannelInstance>;
  update(params?: any, callback?: any): Promise<UserChannelInstance> {
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
      serviceSid: this.serviceSid,
      channelSid: this.channelSid,
      userSid: this.userSid,
      memberSid: this.memberSid,
      status: this.status,
      lastConsumedMessageIndex: this.lastConsumedMessageIndex,
      unreadMessagesCount: this.unreadMessagesCount,
      links: this.links,
      url: this.url,
      notificationLevel: this.notificationLevel,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserChannelListInstance {
  (channelSid: string): UserChannelContext;
  get(channelSid: string): UserChannelContext;

  /**
   * Streams UserChannelInstance records from the API.
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
    callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams UserChannelInstance records from the API.
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
   * @param { UserChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: UserChannelListInstanceEachOptions,
    callback?: (item: UserChannelInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
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
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  getPage(params?: any, callback?: any): Promise<UserChannelPage>;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: UserChannelInstance[]) => any
  ): Promise<UserChannelInstance[]>;
  /**
   * Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: UserChannelListInstanceOptions,
    callback?: (error: Error | null, items: UserChannelInstance[]) => any
  ): Promise<UserChannelInstance[]>;
  list(params?: any, callback?: any): Promise<UserChannelInstance[]>;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: UserChannelListInstancePageOptions,
    callback?: (error: Error | null, items: UserChannelPage) => any
  ): Promise<UserChannelPage>;
  page(params?: any, callback?: any): Promise<UserChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserChannelSolution {
  serviceSid?: string;
  userSid?: string;
}

interface UserChannelListInstanceImpl extends UserChannelListInstance {}
class UserChannelListInstanceImpl implements UserChannelListInstance {
  _version?: V2;
  _solution?: UserChannelSolution;
  _uri?: string;
}

export function UserChannelListInstance(
  version: V2,
  serviceSid: string,
  userSid: string
): UserChannelListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(userSid)) {
    throw new Error("Parameter 'userSid' is not valid.");
  }

  const instance = ((channelSid) =>
    instance.get(channelSid)) as UserChannelListInstanceImpl;

  instance.get = function get(channelSid): UserChannelContext {
    return new UserChannelContextImpl(version, serviceSid, userSid, channelSid);
  };

  instance._version = version;
  instance._solution = { serviceSid, userSid };
  instance._uri = `/Services/${serviceSid}/Users/${userSid}/Channels`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<UserChannelPage> {
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
        new UserChannelPage(operationVersion, payload, this._solution)
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
  ): Promise<UserChannelPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new UserChannelPage(this._version, payload, this._solution)
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

export class UserChannelPage extends Page<
  V2,
  UserChannelPayload,
  UserChannelResource,
  UserChannelInstance
> {
  /**
   * Initialize the UserChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: UserChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UserChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserChannelPayload): UserChannelInstance {
    return new UserChannelInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.userSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
