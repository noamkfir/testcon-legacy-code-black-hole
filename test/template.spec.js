import Template from '../src/template';
import { expect } from 'chai';

describe('Template', () => {

    describe('itemCounter', () => {

        const testCases = [
            {
                when: 'no active items remain',
                input: 0,
                output: 'No items left'
            },
            {
                when: 'only one active item remains',
                input: 1,
                output: '1 item left'
            },
            {
                when: 'only two active items remain',
                input: 2,
                output: '2 items left'
            }
        ];

        testCases.forEach(testCase => {

            it(`should return "${testCase.output}" when ${testCase.when}`, () => {

                const template = new Template();

                const result = template.itemCounter(testCase.input);

                expect(result).to.equal(testCase.output);

            });

        });

    });

});