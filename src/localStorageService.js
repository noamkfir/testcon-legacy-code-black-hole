export default class LocalStorageService {

    constructor(name) {
        this.name = name;
        this.storage = window.localStorage;
    }

    getData() {
        return JSON.parse(this.storage.getItem(this.name) || '[]')
    }

    setData(value) {
        this.storage.setItem(this.name, JSON.stringify(value));
    }

}