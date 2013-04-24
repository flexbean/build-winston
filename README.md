# build-winston
Build a [winston][0] logger via JSON configuration.

## Installation

### Installing npm (node package manager)

``` sh
  $ curl http://npmjs.org/install.sh | sh
```

### Installing build-winston and desired winston transports

``` sh
  $ npm install winston
  $ npm install build-winston
  $ npm install winston-loggly
```

Remember to install desired transports like winston-loggly above. To see a list of potential transports:
``` sh
  $ npm search winston-
```

## Usage
``` js
  var winston = require('winston')
     , config = { "console": { "level": "info", "colorize": true };
  logger = require('build-winston').get(config, function(err, winston){
  if (err) {
    logger.error(err);
  } else {
    logger = winston;
  }
});;
```

## Usage with [nconf][1]
``` js
  var winston = require('winston')
     , nconf = require('nconf');

  nconf.env('__');
  nconf.file({ file: __dirname + '/package.json' });
  nconf.defaults({
      "cookie_key" : "replace this",
      "host" : "localhost",
      "port" : 3000,
      "development": true,
      "winston" : { "console": { "level": "info", "colorize": true } }
  });

  logger = require('build-winston').get(nconf.get('winston'), function(err, winston){
  if (err) {
    logger.error(err);
  } else {
    logger = winston;
  }
});;
```

## Contributions Welcome

Let's make node great! Idea, suggestions and assistance is welcome :-)

## Outstanding Testing
- unit testing
- winston-airbrake      An airbrake transport for winston
- winston-amazon-ses    A mail transport for winston using Amazon Simple Email Service (SES)
- winston-amon          Winston transport for Amon logging
- winston-amqp          An AMQP transport for winston
- winston-couchdb       A CouchDB transport for winston
- winston-crashlog      Winston transport for crashlog.io
- winston-dynamodb      A Winston transport for Amazon DynamoDB
- winston-email         An email transport for winston
- winston-gelfling      Winston transport using Gelfling
- winston-graylog2      A graylog2 transport for winston
- winston-graylogger    Winston graylog2 transport
- winston-growl         A growl transport for winston
- winston-hbase         A HBase transport for winston
- winston-irc           an IRC transport for Winston
- winston-loggly        A Loggly transport for winston
- winston-mail          A mail transport for winston
- winston-mail2         A mail transport for winston
- winston-mailer        Winston transport based on mailer. It buffers errors, and packs them in one email
- winston-memory        A Memory transport for winston
- winston-mongodb       A MongoDB transport for winston
- winston-nodemail      A mail transport for winston
- winston-nodemailer    An email transport layer for winston
- winston-nssocket      nssocket transport for winston
- winston-packed-zmq    A 0MQ + msgpack2 transport for winston
- winston-papertrail    A Papertrail transport for winston
- winston-postmark      Winston transport using Postmark
- winston-pushover      A transport for Winston that uses the Pushover
- winston-ravendb       A RavenDb transport
- winston-redis         A fixed-length Redis transport
- winston-riak          A Riak transport
- winston-s3            S3 transport
- winston-scribe        A scribe transport
- winston-sentry        Sentry transport
- winston-ses           Winston transport using Amazon SES
- winston-simpledb      A Winston transport for Amazon SimpleDB
- winston-skywriter     A Windows Azure table storage transport
- winston-sns           A Simple Notification System Transport
- winston-sns-iam       An SNS transport that works with or without explicitly passed AWS credentials
- winston-socket        A socket transport
- winston-splunk        A Splunk transport
- winston-sqs           An Amazon Simple Queue Service Transport
- winston-syslog        A syslog transport
- winston-syslog-ain2   An ain2 based syslog transport
- winston-syslogudp     A UDP only syslog transport
- winston-zmq           A 0MQ transport

## License

# MIT

[0]: https://github.com/flatiron/winston
[1]: https://github.com/flatiron/nconf