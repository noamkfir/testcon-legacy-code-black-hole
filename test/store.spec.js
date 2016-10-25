import Store from "../src/store";
import { expect } from 'chai';
import StorageService from '../src/storageService';

describe('Store', () => {

    describe('find', () => {

        it('should pass an empty array to the callback', (done) => {

            const storageService = new StorageService('store-name');
            const store = new Store(storageService);

            store.find({}, (items) => {
                expect(items).to.have.length(0);
                done();
            });

        });

        it('should pass a non-empty array to the callback', (done) => {

            const storageService = new StorageService('store-name');
            storageService.setData([{
                title: 'sample item'
            }]);
            const store = new Store(storageService);

            store.find({}, (items) => {
                expect(items).to.have.length(1);
                done();
            });

        });

        it('should pass an empty array to the promise callback', (done) => {

            const storageService = new StorageService('store-name');
            const store = new Store(storageService);

            store.find({})
                .then((items) => {
                    expect(items).to.have.length(0);
                    done();
                });

        });

        it('should pass a non-empty array to the promise callback', (done) => {

            const storageService = new StorageService('store-name');
            storageService.setData([{
                title: 'sample item'
            }]);
            const store = new Store(storageService);

            store.find({})
                .then((items) => {
                    expect(items).to.have.length(1);
                    done();
                });

        });

    });

});