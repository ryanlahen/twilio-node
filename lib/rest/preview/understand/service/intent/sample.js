'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var SampleList;
var SamplePage;
var SampleInstance;
var SampleContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.IntentContext.SampleList
 * @description Initialize the SampleList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 * @param {string} intentSid - The intent_sid
 */
/* jshint ignore:end */
SampleList = function SampleList(version, serviceSid, intentSid) {
  /* jshint ignore:start */
  /**
   * @function samples
   * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Understand.ServiceContext.IntentContext.SampleContext}
   */
  /* jshint ignore:end */
  function SampleListInstance(sid) {
    return SampleListInstance.get(sid);
  }

  SampleListInstance._version = version;
  // Path Solution
  SampleListInstance._solution = {serviceSid: serviceSid, intentSid: intentSid};
  SampleListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Intents/<%= intentSid %>/Samples' // jshint ignore:line
  )(SampleListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams SampleInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.language] - The language
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  SampleListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists SampleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.language] - The language
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SampleListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of SampleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.language] - The language
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SampleListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Language': _.get(opts, 'language'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SamplePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of SampleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleList
   * @instance
   *
   * @param {string} [opts.language] - The language
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SampleListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SamplePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * create a SampleInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.language - The language
   * @param {string} opts.taggedText - The tagged_text
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SampleInstance
   */
  /* jshint ignore:end */
  SampleListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.language)) {
      throw new Error('Required parameter "opts.language" missing.');
    }
    if (_.isUndefined(opts.taggedText)) {
      throw new Error('Required parameter "opts.taggedText" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Language': _.get(opts, 'language'),
      'TaggedText': _.get(opts, 'taggedText')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SampleInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.intentSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a sample
   *
   * @function get
   * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Understand.ServiceContext.IntentContext.SampleContext}
   */
  /* jshint ignore:end */
  SampleListInstance.get = function get(sid) {
    return new SampleContext(this._version, this._solution.serviceSid, this._solution.intentSid, sid);
  };

  return SampleListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.IntentContext.SamplePage
 * @augments Page
 * @description Initialize the SamplePage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns SamplePage
 */
/* jshint ignore:end */
SamplePage = function SamplePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(SamplePage.prototype, Page.prototype);
SamplePage.prototype.constructor = SamplePage;

/* jshint ignore:start */
/**
 * Build an instance of SampleInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SamplePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SampleInstance
 */
/* jshint ignore:end */
SamplePage.prototype.getInstance = function getInstance(payload) {
  return new SampleInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.intentSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.IntentContext.SampleInstance
 * @description Initialize the SampleContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} accountSid - The account_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} intentSid - The intent_sid
 * @property {string} language - The language
 * @property {string} serviceSid - The service_sid
 * @property {string} sid - The sid
 * @property {string} taggedText - The tagged_text
 * @property {string} url - The url
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} serviceSid - The service_sid
 * @param {sid_like} intentSid - The intent_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
SampleInstance = function SampleInstance(version, payload, serviceSid,
                                          intentSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.intentSid = payload.intent_sid; // jshint ignore:line
  this.language = payload.language; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.taggedText = payload.tagged_text; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, intentSid: intentSid, sid: sid || this.sid, };
};

Object.defineProperty(SampleInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new SampleContext(
        this._version,
        this._solution.serviceSid,
        this._solution.intentSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a SampleInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SampleInstance
 */
/* jshint ignore:end */
SampleInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a SampleInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.language] - The language
 * @param {string} [opts.taggedText] - The tagged_text
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SampleInstance
 */
/* jshint ignore:end */
SampleInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a SampleInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SampleInstance
 */
/* jshint ignore:end */
SampleInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.ServiceContext.IntentContext.SampleContext
 * @description Initialize the SampleContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {sid_like} serviceSid - The service_sid
 * @param {sid_like} intentSid - The intent_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
SampleContext = function SampleContext(version, serviceSid, intentSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, intentSid: intentSid, sid: sid, };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Intents/<%= intentSid %>/Samples/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a SampleInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SampleInstance
 */
/* jshint ignore:end */
SampleContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new SampleInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.intentSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a SampleInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.language] - The language
 * @param {string} [opts.taggedText] - The tagged_text
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SampleInstance
 */
/* jshint ignore:end */
SampleContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Language': _.get(opts, 'language'),
    'TaggedText': _.get(opts, 'taggedText')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new SampleInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.intentSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a SampleInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.ServiceContext.IntentContext.SampleContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SampleInstance
 */
/* jshint ignore:end */
SampleContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  SampleList: SampleList,
  SamplePage: SamplePage,
  SampleInstance: SampleInstance,
  SampleContext: SampleContext
};