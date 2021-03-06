(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	function foo () {}

	foo( globalFunction() );

	var baz = 2;
	foo( baz++ );

	assert.equal(baz, 3);

})));
