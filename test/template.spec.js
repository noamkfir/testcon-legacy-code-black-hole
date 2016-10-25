import Template from '../src/template';
import { expect } from 'chai';

describe('Template', () => {

    describe('itemCounter', () => {

        it('should return "0 items left" when no active items remain', () => {

            const template = new Template();

            const result = template.itemCounter(0);

            expect(result).to.equal('5 items left');
        });

        it('should return "1 item left" when only one active item remains', () => {

            const template = new Template();

            const result = template.itemCounter(1);

            expect(result).to.equal('5 items left');
        });

        it('should return "2 items left" when only two active items remain', () => {

            const template = new Template();

            const result = template.itemCounter(2);

            expect(result).to.equal('5 items left');
        });

    });

});