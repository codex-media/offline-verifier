
/**
 * used as template options
 * 
 * @interface OfflineVerifierOptions
 */
interface OfflineVerifierOptions {
  onOnline?: any;
  onOffline?: any;
}

/**
 * Main class for expose
 * 
 * @export
 * @class OfflineVerifier
 */
export class OfflineVerifier {

  /**
   * status connection
   * 
   * @type {boolean}
   * @memberOf OfflineVerifier
   */
  status: boolean = true

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
  constructor(
    public options = <OfflineVerifierOptions>{
      onOnline: function () { },
      onOffline: function () { }
    }
  ) {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOfflineStatus);
  }

  /**
   * online connection listener
   * 
   * @private
   * 
   * @memberOf OfflineVerifier
   */
  private updateOnlineStatus = () => {
    this.status = true;
    this.options.onOnline();
    return this.status
  }

  /**
   * offline connection listener
   * 
   * @private
   * 
   * @memberOf OfflineVerifier
   */
  private updateOfflineStatus = () => {
    this.status = false;
    this.options.onOffline();
    return this.status
  }

}