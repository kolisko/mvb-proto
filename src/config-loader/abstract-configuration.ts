import { MissingKeyConfigurationEnum } from './types';

/**
 * Abstract class to keep application configuration as a map key -> value
 */
export abstract class AbstractConfiguration {

  protected config: object = {};
  protected _isLoaded = false; /* tslint:disable-line:variable-name */

  /**
   *  return configuration item
   * @param key -  item name
   * @param missingKeyConfig - for backward compatibility supports also boolean that enables throwing error
   * when true, logging warning otherwise
   */
  public getByKey(
    key: string,
    missingKeyConfig: boolean | MissingKeyConfigurationEnum = MissingKeyConfigurationEnum.Warn,
    defaultValue?: string
  ): any {
    if (!this.isLoaded) {
      throw Error(`Configuration is not loaded yet! This key: "${key}" could not be loaded`);
    }
    if (!this.config) {
      throw Error('Configuration is empty!');
    }

    let result = (this.config as any)[key];
    if (result === undefined) {
      let msg = `Configuration for this key: "${key}" does not exists!`;
      if (defaultValue) {
        result = defaultValue;
        msg += ` Used default value: "${defaultValue}" instead.`;
      }
      if (missingKeyConfig !== MissingKeyConfigurationEnum.Ignore) {
        if (!missingKeyConfig) { // true also for MissingKeyConfigurationEnum.Warn
          console.warn(msg);
        } else {
          throw Error(`Configuration for this key: "${key}" does not exists!`);
        }
      }
    }
    return result;
  }

  /**
   * return complete configuration data
   */
  public getAllItems(): object {
    return {...this.config};
  }

  /**
   * configuration loaded flag
   */
  get isLoaded(): boolean {
    return this._isLoaded;
  }
}
