/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import SyncBase from "../SyncBase";
import Version from "../../base/Version";
import { ServiceListInstance } from "./v1/service";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Sync
   *
   * @property { Twilio.Sync.V1.ServiceListInstance } services - services resource
   *
   * @param { Twilio.Sync } domain - The Twilio domain
   */
  constructor(domain: SyncBase) {
    super(domain, "v1");
  }

  protected _services?: ServiceListInstance;

  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }

}