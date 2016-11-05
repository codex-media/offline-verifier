(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.OfflineVerifier = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./offline-verifier'));
console.log('look ma" im a best developer!!  ');

},{"./offline-verifier":2}],2:[function(require,module,exports){
"use strict";
/**
 * Main class for expose
 *
 * @export
 * @class OfflineVerifier
 */
class OfflineVerifier {
    /**
     * Creates an instance of OfflineVerifier.
     *
     * @param {any} [options=<OfflineVerifierOptions>{
     *       onOnline: function () { },
     *       onOffline: function () { }
     *     }]
     *
     * @memberOf OfflineVerifier
     */
    constructor(options = {
            onOnline: function () { },
            onOffline: function () { }
        }) {
        this.options = options;
        /**
         * status connection
         *
         * @type {boolean}
         * @memberOf OfflineVerifier
         */
        this.status = true;
        /**
         * online connection listener
         *
         * @private
         *
         * @memberOf OfflineVerifier
         */
        this.updateOnlineStatus = () => {
            this.status = true;
            this.options.onOnline();
            return this.status;
        };
        /**
         * offline connection listener
         *
         * @private
         *
         * @memberOf OfflineVerifier
         */
        this.updateOfflineStatus = () => {
            this.status = false;
            this.options.onOffline();
            return this.status;
        };
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOfflineStatus);
    }
}
exports.OfflineVerifier = OfflineVerifier;

},{}]},{},[1])(1)
});