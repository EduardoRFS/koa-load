'use strict';
var findup = require('findup-sync');
var path = require('path');

module.exports = function (options) {
  options = options || {};
  options.pattern = options.pattern || ['koa-*', 'koa.*', '@*/koa{-,.}*', '!koa-load'];
  options.replaceString = options.replaceString || /^koa(-|\.)/;
  options.config = options.config || findup('package.json', {cwd: parentDir});
  return require('gulp-load-plugins')(options);
};

var parentDir = path.dirname(module.parent.filename);