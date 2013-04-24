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

## License

# MIT

[0]: https://github.com/flatiron/winston
[1]: https://github.com/flatiron/nconf