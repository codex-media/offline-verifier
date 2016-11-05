"use strict";
/**
 * Main class for expose
 *
 * @export
 * @class Verifier
 */
class Verifier {
    /**
     * Creates an instance of Verifier.
     *
     * @param {any} [options=<VerifierOptions>{
     *       onOnline: function () { },
     *       onOffline: function () { }
     *     }]
     *
     * @memberOf Verifier
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
         * @memberOf Verifier
         */
        this.status = true;
        /**
         * online connection listener
         *
         * @private
         *
         * @memberOf Verifier
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
    getStatus() {
        return this.status;
    }
}
exports.Verifier = Verifier;
//# sourceMappingURL=offline-verifier.js.map