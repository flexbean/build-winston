# build-winston
Build a [winston][0] logger via JSON configuration.

## Depreciated

This project has been merged to [winston-config][2] and will no longer be developed.

## Installation

### Installing npm (node package manager)

``` sh
  $ curl http://npmjs.org/install.sh | sh
```

### Installing build-winston and desired winston transports

``` sh
  $ npm install build-winston winston-loggly
```

Remember to install desired transports like winston-loggly above. To see a list of potential transports:
``` sh
  $ npm search winston-
```

## Usage
``` js
  var winston = require('winston')
     , config = { "console": { "level": "info", "colorize": true } };
     
  var logger = require('build-winston').get(config, function(err, winston) {
    if (err) {
        logger.error(err);
    } else {
        logger = winston;
    }
  });
```

## Usage with [nconf][1]
``` js
  var winston = require('winston')
     , nconf = require('nconf');

  nconf.env('__');
  nconf.file({ file: __dirname + '/package.json' });
  nconf.defaults({
      "winston" : { "console": { "level": "info", "colorize": true } }
  });

  var logger = require('build-winston').get(nconf.get('winston'), function(err, winston) {
    if (err) {
      logger.error(err);
    } else {
      logger = winston;
    }
  });;
```

## Contributions Welcome

Let's make node great! Ideas, suggestions and assistance is welcome :-)

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

# The MIT License (MIT)

Copyright (c) 2013 Jim Kalac

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



[0]: https://github.com/flatiron/winston
[1]: https://github.com/flatiron/nconf
[2]: https://github.com/triplem/winston-config
