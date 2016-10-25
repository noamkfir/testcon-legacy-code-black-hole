export default class LocalStorageService {

    constructor() {
        this.storage = window.localStorage;
    }

    getData(name) {
        return JSON.parse(this.storage.getItem(name) || '[]')
    }

    setData(name, value) {
        this.storage.setItem(name, JSON.stringify(value));
    }

}