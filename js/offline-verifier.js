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
//# sourceMappingURL=offline-verifier.js.map