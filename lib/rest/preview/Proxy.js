'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var ServiceList = require('./proxy/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Proxy version of Preview
 *
 * @constructor Twilio.Preview.Proxy
 *
 * @property {Twilio.Preview.Proxy.ServiceList} services - services resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Proxy(domain) {
  Version.prototype.constructor.call(this, domain, 'Proxy');

  // Resources
  this._services = undefined;
}

_.extend(Proxy.prototype, Version.prototype);
Proxy.prototype.constructor = Proxy;

Object.defineProperty(Proxy.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

module.exports = Proxy;