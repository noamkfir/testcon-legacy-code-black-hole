import Store from "../src/store";
import { expect } from 'chai';

describe('Store', () => {

    describe('find', () => {

        it('should pass an empty array to the callback', (done) => {

            const store = new Store('store-name');

            store.find({}, (items) => {
                expect(items).to.have.length(0);
                done();
            });

        });

        it('should pass a non-empty array to the callback', (done) => {

            window.localStorage.setItem('store-name', {
                title: 'sample item'
            });
            const store = new Store('store-name');

            store.find({}, (items) => {
                expect(items).to.have.length(1);
                done();
            });

        });

    });

});