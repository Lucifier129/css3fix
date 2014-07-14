/*==================================================
 Copyright 2014 Jade Gu
 http://weibo.com/islucifier
 Released under the MIT license
jQuery.css3fix.js 2014.7.14
 ==================================================*/
;(function($, document, undefined) {
	'use strict';
	var style = document.getElementsByTagName('body')[0].style,
		prefix = ['', '-webkit-', '-moz-', '-ms-', '-o-'],
		len = prefix.length,
		camelCase = $.camelCase;

	$.css3fix = function(prop) {
		var i = 0,
			fixed;
		for (; i < len; i += 1) {
			fixed = camelCase(prefix[i] + prop);
			if (fixed in style) {
				return fixed;
			}
		}
		return false;
	};
})(jQuery, document);
