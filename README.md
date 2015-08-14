# gulp-angular-sample-project [![Dependency Status][depstat-image]][depstat-url]

A sample project with [gulp-recipe-loader](https://github.com/PGSSoft/gulp-recipe-loader) using [angular](https://angularjs.org/) framework.

[depstat-url]: https://david-dm.org/PGSSoft/gulp-angular-sample-project
[depstat-image]: https://img.shields.io/david/PGSSoft/gulp-angular-sample-project.svg?style=flat

### Communication with backend api

1. In folder '/gulp-config' create a file 'browserSync.js' this will be konfiguration file for browsersync.io recepie 
Inside this file copy and paste below code (this is only proxy example of configuration there can be another):
--------
var url = require('url');
var proxy = require('proxy-middleware');
var apiProxyOptions = url.parse('http://localhost:8080/api');
apiProxyOptions.route = '/api';
var apiMiddleware = proxy(apiProxyOptions);
module.exports = {
  server: {
    middleware: apiMiddleware
  }
};
-------

2. This line:
var apiProxyOptions = url.parse('http://localhost:8080/api');
	also
apiProxyOptions.route = '/api';
It depends to your backend api adress
3. Now we need install dependencies 'npm install -s proxy-middleware'
4. In the end type in console: 'gulp serve'.