'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('EventType', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'types': [
              {
                  'date_created': '2020-08-13T13:28:20Z',
                  'date_updated': '2020-08-13T13:28:20Z',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- delivered message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.delivered',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              },
              {
                  'date_created': '2020-08-13T13:28:19Z',
                  'date_updated': '2020-08-13T13:28:19Z',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- failed message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.failed',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 20,
              'first_page_url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };
      holodeck.mock(new Response(200, body));
      client.events.v1.eventTypes.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'types': [
              {
                  'date_created': '2020-08-13T13:28:20Z',
                  'date_updated': '2020-08-13T13:28:20Z',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- delivered message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.delivered',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              },
              {
                  'date_created': '2020-08-13T13:28:19Z',
                  'date_updated': '2020-08-13T13:28:19Z',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- failed message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.failed',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 20,
              'first_page_url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };
      holodeck.mock(new Response(200, body));
      client.events.v1.eventTypes.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://events.twilio.com/v1/Types',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'types': [
              {
                  'date_created': '2020-08-13T13:28:20Z',
                  'date_updated': '2020-08-13T13:28:20Z',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- delivered message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.delivered',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              },
              {
                  'date_created': '2020-08-13T13:28:19Z',
                  'date_updated': '2020-08-13T13:28:19Z',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- failed message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.failed',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 20,
              'first_page_url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };
      holodeck.mock(new Response(200, body));
      client.events.v1.eventTypes.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.events.v1.eventTypes.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://events.twilio.com/v1/Types';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'types': [],
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://events.twilio.com/v1/Types?PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Types?PageSize=10&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.eventTypes.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_results response',
    function(done) {
      var body = {
          'types': [
              {
                  'date_created': '2020-08-13T13:28:20Z',
                  'date_updated': '2020-08-13T13:28:20Z',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- delivered message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.delivered',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              },
              {
                  'date_created': '2020-08-13T13:28:19Z',
                  'date_updated': '2020-08-13T13:28:19Z',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- failed message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.failed',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 20,
              'first_page_url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Types?PageSize=20&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.eventTypes.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_results_with_schema_id response',
    function(done) {
      var body = {
          'types': [
              {
                  'date_created': '2020-08-13T13:28:20Z',
                  'date_updated': '2020-08-13T13:28:20Z',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- delivered message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.delivered',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              },
              {
                  'date_created': '2020-08-13T13:28:19Z',
                  'date_updated': '2020-08-13T13:28:19Z',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_id': 'Messaging.MessageStatus',
                  'public': true,
                  'description': 'Messaging- failed message',
                  'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.failed',
                  'links': {
                      'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 20,
              'first_page_url': 'https://events.twilio.com/v1/Types?SchemaId=Messaging.MessageStatus&PageSize=20&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Types?SchemaId=Messaging.MessageStatus&PageSize=20&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.eventTypes.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.events.v1.eventTypes('type').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var type = 'type';
      var url = `https://events.twilio.com/v1/Types/${type}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'date_created': '2020-08-13T13:28:20Z',
          'date_updated': '2020-08-13T13:28:20Z',
          'type': 'com.twilio.messaging.message.delivered',
          'schema_id': 'Messaging.MessageStatus',
          'public': true,
          'description': 'Messaging- delivered message',
          'url': 'https://events.twilio.com/v1/Types/com.twilio.messaging.message.delivered',
          'links': {
              'schema': 'https://events.twilio.com/v1/Schemas/Messaging.MessageStatus/Versions'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.eventTypes('type').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});