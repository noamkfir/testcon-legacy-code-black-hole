export default class LocalStorageService {

    constructor() {
        this.storage = window.localStorage;
    }

    getData(name) {
        return JSON.parse(this.storage.getItem(name) || '[]')
    }

    setData(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

}