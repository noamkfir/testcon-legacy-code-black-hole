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

    });

});