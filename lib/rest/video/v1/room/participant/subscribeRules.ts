/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");


export class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules {
  "type"?: string;
  "all"?: boolean;
  "publisher"?: string;
  "track"?: string;
  "kind"?: string;
  "priority"?: string;
}



/**
 * Options to pass to update a SubscribeRulesInstance
 *
 * @property { any } [rules] A JSON-encoded array of subscribe rules. See the [Specifying Subscribe Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr) section for further information.
 */
export interface SubscribeRulesListInstanceUpdateOptions {
  "rules"?: any;
}

export interface SubscribeRulesListInstance {


  /**
   * Fetch a SubscribeRulesInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribeRulesInstance
   */
  fetch(callback?: (error: Error | null, item?: SubscribeRulesInstance) => any): Promise<SubscribeRulesInstance>


  /**
   * Update a SubscribeRulesInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribeRulesInstance
   */
  update(callback?: (error: Error | null, item?: SubscribeRulesInstance) => any): Promise<SubscribeRulesInstance>;
  /**
   * Update a SubscribeRulesInstance
   *
   * @param { SubscribeRulesListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SubscribeRulesInstance
   */
  update(params: SubscribeRulesListInstanceUpdateOptions, callback?: (error: Error | null, item?: SubscribeRulesInstance) => any): Promise<SubscribeRulesInstance>;
  update(params?: any, callback?: any): Promise<SubscribeRulesInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SubscribeRulesSolution {
  roomSid?: string;
  participantSid?: string;
}

interface SubscribeRulesListInstanceImpl extends SubscribeRulesListInstance {}
class SubscribeRulesListInstanceImpl implements SubscribeRulesListInstance {
  _version?: V1;
  _solution?: SubscribeRulesSolution;
  _uri?: string;

}

export function SubscribeRulesListInstance(version: V1, roomSid: string, participantSid: string): SubscribeRulesListInstance {
  const instance = {} as SubscribeRulesListInstanceImpl;

  instance._version = version;
  instance._solution = { roomSid, participantSid };
  instance._uri = `/Rooms/${roomSid}/Participants/${participantSid}/SubscribeRules`;

  instance.fetch = function fetch(callback?: any): Promise<SubscribeRulesInstance> {

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new SubscribeRulesInstance(operationVersion, payload, this._solution.roomSid, this._solution.participantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.update = function update(params?: any, callback?: any): Promise<SubscribeRulesInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["rules"] !== undefined)
    data["Rules"] = serialize.object(params["rules"]);


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new SubscribeRulesInstance(operationVersion, payload, this._solution.roomSid, this._solution.participantSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface SubscribeRulesPayload extends SubscribeRulesResource{
}

interface SubscribeRulesResource {
  participant_sid?: string | null;
  room_sid?: string | null;
  rules?: Array<VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
}

export class SubscribeRulesInstance {

  constructor(protected _version: V1, payload: SubscribeRulesPayload, roomSid: string, participantSid?: string) {
    this.participantSid = payload.participant_sid;
    this.roomSid = payload.room_sid;
    this.rules = payload.rules;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

  }

  /**
   * The SID of the Participant resource for the Subscribe Rules
   */
  participantSid?: string | null;
  /**
   * The SID of the Room resource for the Subscribe Rules
   */
  roomSid?: string | null;
  /**
   * A collection of Subscribe Rules that describe how to include or exclude matching tracks
   */
  rules?: Array<VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules> | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      participantSid: this.participantSid, 
      roomSid: this.roomSid, 
      rules: this.rules, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

