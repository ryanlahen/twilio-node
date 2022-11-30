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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { BuildStatusListInstance } from "./build/buildStatus";

type BuildRuntime = "node8" | "node10" | "node12" | "node14" | "node16";

type BuildStatus = "building" | "completed" | "failed";

/**
 * Options to pass to create a BuildInstance
 *
 * @property { Array<string> } [assetVersions] The list of Asset Version resource SIDs to include in the Build.
 * @property { Array<string> } [functionVersions] The list of the Function Version resource SIDs to include in the Build.
 * @property { string } [dependencies] A list of objects that describe the Dependencies included in the Build. Each object contains the `name` and `version` of the dependency.
 * @property { string } [runtime] The Runtime version that will be used to run the Build resource when it is deployed.
 */
export interface BuildListInstanceCreateOptions {
  assetVersions?: Array<string>;
  functionVersions?: Array<string>;
  dependencies?: string;
  runtime?: string;
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
export interface BuildListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: BuildInstance, done: (err?: Error) => void) => void;
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
export interface BuildListInstanceOptions {
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
export interface BuildListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}

export interface BuildContext {
  buildStatus: BuildStatusListInstance;

  /**
   * Remove a BuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BuildInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BuildInstance) => any
  ): Promise<BuildInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BuildContextSolution {
  serviceSid?: string;
  sid?: string;
}

export class BuildContextImpl implements BuildContext {
  protected _solution: BuildContextSolution;
  protected _uri: string;

  protected _buildStatus?: BuildStatusListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Builds/${sid}`;
  }

  get buildStatus(): BuildStatusListInstance {
    this._buildStatus =
      this._buildStatus ||
      BuildStatusListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._buildStatus;
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

  fetch(callback?: any): Promise<BuildInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BuildInstance(
          operationVersion,
          payload,
          this._solution.serviceSid,
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

interface BuildPayload extends BuildResource, Page.TwilioResponsePayload {}

interface BuildResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  status?: BuildStatus;
  asset_versions?: Array<any> | null;
  function_versions?: Array<any> | null;
  dependencies?: Array<any> | null;
  runtime?: BuildRuntime;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  links?: object | null;
}

export class BuildInstance {
  protected _solution: BuildContextSolution;
  protected _context?: BuildContext;

  constructor(
    protected _version: V1,
    payload: BuildPayload,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.status = payload.status;
    this.assetVersions = payload.asset_versions;
    this.functionVersions = payload.function_versions;
    this.dependencies = payload.dependencies;
    this.runtime = payload.runtime;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Build resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Build resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Build resource is associated with
   */
  serviceSid?: string | null;
  status?: BuildStatus;
  /**
   * The list of Asset Version resource SIDs that are included in the Build
   */
  assetVersions?: Array<any> | null;
  /**
   * The list of Function Version resource SIDs that are included in the Build
   */
  functionVersions?: Array<any> | null;
  /**
   * A list of objects that describe the Dependencies included in the Build
   */
  dependencies?: Array<any> | null;
  runtime?: BuildRuntime;
  /**
   * The ISO 8601 date and time in GMT when the Build resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Build resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Build resource
   */
  url?: string | null;
  links?: object | null;

  private get _proxy(): BuildContext {
    this._context =
      this._context ||
      new BuildContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a BuildInstance
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
   * Fetch a BuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BuildInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BuildInstance) => any
  ): Promise<BuildInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the buildStatus.
   */
  buildStatus(): BuildStatusListInstance {
    return this._proxy.buildStatus;
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
      status: this.status,
      assetVersions: this.assetVersions,
      functionVersions: this.functionVersions,
      dependencies: this.dependencies,
      runtime: this.runtime,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BuildListInstance {
  (sid: string): BuildContext;
  get(sid: string): BuildContext;

  /**
   * Create a BuildInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BuildInstance
   */
  create(
    callback?: (error: Error | null, item?: BuildInstance) => any
  ): Promise<BuildInstance>;
  /**
   * Create a BuildInstance
   *
   * @param { BuildListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed BuildInstance
   */
  create(
    params: BuildListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BuildInstance) => any
  ): Promise<BuildInstance>;
  create(params?: any, callback?: any): Promise<BuildInstance>;

  /**
   * Streams BuildInstance records from the API.
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
    callback?: (item: BuildInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams BuildInstance records from the API.
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
   * @param { BuildListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: BuildListInstanceEachOptions,
    callback?: (item: BuildInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of BuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: BuildPage) => any
  ): Promise<BuildPage>;
  /**
   * Retrieve a single target page of BuildInstance records from the API.
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
    callback?: (error: Error | null, items: BuildPage) => any
  ): Promise<BuildPage>;
  getPage(params?: any, callback?: any): Promise<BuildPage>;
  /**
   * Lists BuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BuildInstance[]) => any
  ): Promise<BuildInstance[]>;
  /**
   * Lists BuildInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BuildListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: BuildListInstanceOptions,
    callback?: (error: Error | null, items: BuildInstance[]) => any
  ): Promise<BuildInstance[]>;
  list(params?: any, callback?: any): Promise<BuildInstance[]>;
  /**
   * Retrieve a single page of BuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BuildPage) => any
  ): Promise<BuildPage>;
  /**
   * Retrieve a single page of BuildInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BuildListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: BuildListInstancePageOptions,
    callback?: (error: Error | null, items: BuildPage) => any
  ): Promise<BuildPage>;
  page(params?: any, callback?: any): Promise<BuildPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BuildSolution {
  serviceSid?: string;
}

interface BuildListInstanceImpl extends BuildListInstance {}
class BuildListInstanceImpl implements BuildListInstance {
  _version?: V1;
  _solution?: BuildSolution;
  _uri?: string;
}

export function BuildListInstance(
  version: V1,
  serviceSid: string
): BuildListInstance {
  const instance = ((sid) => instance.get(sid)) as BuildListInstanceImpl;

  instance.get = function get(sid): BuildContext {
    return new BuildContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Builds`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<BuildInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["assetVersions"] !== undefined)
      data["AssetVersions"] = serialize.map(params["assetVersions"], (e) => e);
    if (params["functionVersions"] !== undefined)
      data["FunctionVersions"] = serialize.map(
        params["functionVersions"],
        (e) => e
      );
    if (params["dependencies"] !== undefined)
      data["Dependencies"] = params["dependencies"];
    if (params["runtime"] !== undefined) data["Runtime"] = params["runtime"];

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
        new BuildInstance(operationVersion, payload, this._solution.serviceSid)
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
  ): Promise<BuildPage> {
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
      (payload) => new BuildPage(operationVersion, payload, this._solution)
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
  ): Promise<BuildPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new BuildPage(this._version, payload, this._solution)
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

export class BuildPage extends Page<
  V1,
  BuildPayload,
  BuildResource,
  BuildInstance
> {
  /**
   * Initialize the BuildPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: BuildSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BuildInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BuildPayload): BuildInstance {
    return new BuildInstance(this._version, payload, this._solution.serviceSid);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
