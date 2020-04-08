import { Configuration } from './configuration';
/**
 * Class to load Configuration class by given file with configuration JSON data as a map
 * Created by Rostislav Petr
 * Component on 2017-01-30
 */
export class ConfigurationLoader {

    private url: string;
    private async = true;
    private objHttpReq: XMLHttpRequest;
    public configuration: Configuration;
    private callbackFunction: () => any;

    constructor(configurationPath: string) {
        this.url = configurationPath;
        this.configuration = Configuration.getConfig();
    }

    public load(callbackFunction: () => any): void {
        this.callbackFunction = callbackFunction;
        this.objHttpReq = new XMLHttpRequest();
        this.objHttpReq.overrideMimeType('application/json');
        this.objHttpReq.onreadystatechange = () => this.onReadyStateChangeHandler();
        this.objHttpReq.open('GET', this.url, this.async);
        this.objHttpReq.send();
    }

    /**
     * After load configuration parse to JSON object and set to Configuration singleton
     */
    private onReadyStateChangeHandler() {
        if (this.objHttpReq.readyState === XMLHttpRequest.DONE && this.objHttpReq.status === 200) {
            this.configuration.setByLoader(JSON.parse(this.objHttpReq.response));
            this.callbackFunction();
        }
    }

}
