'use strict';

module.exports = function (options) {
  options.pattern = options.pattern || ['koa-*', 'koa.*', '@*/koa{-,.}*'];
  options.replaceString = options.replaceString || /^koa(-|\.)/;
  return require('gulp-load-plugins')(options);
};