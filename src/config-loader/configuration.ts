import { MissingKeyConfigurationEnum } from './types';
import { AbstractConfiguration } from './abstract-configuration';

/**
 * Singleton implementation of AbstractConfiguration
 */
export class Configuration extends AbstractConfiguration {
    private static instance: Configuration;

    protected constructor() {
      super();
    }

    /**
     * return instance of Configuration
     */
    public static getConfig(): Configuration {
        if (!this.instance) {
            this.instance = new Configuration();
        }
        return this.instance;
    }

    /**
     * static method to get value from configuration by key
     * this is shortcut for confortable usage if you want use one configuration
     * instance
     *
     * ### Example
     *
     * ```typescript
     * //simple
     * Configuration.get('api.caseUrl')
     * ```
     *
     * @param key -  item name
     * @param missingKeyConfig - for backward compatibility supports also boolean that enables throwing error
     * when true, logging warning otherwise
     */
    public static get(
      key: string,
      missingKeyConfig: boolean | MissingKeyConfigurationEnum = MissingKeyConfigurationEnum.Warn,
      defaultValue?: string
    ) {
        return this.getConfig().getByKey(key, missingKeyConfig, defaultValue);
    }

    /**
     * store configuration  - called after loading configuration
     */
   public setByLoader(conf: any) {
        this.config = conf;
        this._isLoaded = true;
    }
}
