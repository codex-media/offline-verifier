
/**
 * used as template options
 * 
 * @interface VerifierOptions
 */
interface VerifierOptions {
  onOnline?: any;
  onOffline?: any;
}

interface Window {
  addEventListener: any;
}
declare var window: Window;

/**
 * Main class for expose
 * 
 * @export
 * @class Verifier
 */
export class Verifier {

  /**
   * status connection
   * 
   * @type {boolean}
   * @memberOf Verifier
   */
  status: boolean = true;

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
  constructor(
    public options = <VerifierOptions>{
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
   * @memberOf Verifier
   */
  private updateOnlineStatus = () => {
    this.status = true;
    this.options.onOnline();
    return this.status;
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
    this.getStatus();
    return this.status;
  }

  private getStatus(): boolean {
    return this.status;
  }

}
