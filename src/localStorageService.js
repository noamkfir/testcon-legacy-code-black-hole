import StorageService from './storageService';

export default class LocalStorageService extends StorageService {

    constructor(name) {
        super(name);
        this.storage = window.localStorage;
    }

    getData(defaultValue) {
        return JSON.parse(this.storage.getItem(this.name)) || defaultValue;
    }

    setData(value) {
        this.storage.setItem(this.name, JSON.stringify(value));
    }

}