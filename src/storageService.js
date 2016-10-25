export default class StorageService {

    constructor(name) {
        this.name = name;
        this.data = {};
    }

    getData(defaultValue) {
        return this.data[this.name] || defaultValue;
    }

    setData(value) {
        this.data[this.name] = value;
    }

}