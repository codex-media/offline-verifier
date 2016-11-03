
/**
 * used as template options
 * 
 * @interface OfflinerOptions
 */
interface OfflinerOptions {
  onOnline?: any;
  onOffline?: any;
}

/**
 * Main class for expose
 * 
 * @export
 * @class Offliner
 */
export class Offliner {

  /**
   * status connection
   * 
   * @type {boolean}
   * @memberOf Offliner
   */
  status: boolean = true

  /**
   * Creates an instance of Offliner.
   * 
   * @param {any} [options=<OfflinerOptions>{
   *       onOnline: function () { },
   *       onOffline: function () { }
   *     }]
   * 
   * @memberOf Offliner
   */
  constructor(
    public options = <OfflinerOptions>{
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
   * @memberOf Offliner
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
   * @memberOf Offliner
   */
  private updateOfflineStatus = () => {
    this.status = false;
    this.options.onOffline();
    return this.status
  }

}