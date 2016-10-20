import { expect } from 'chai';
import { spy } from 'sinon';

describe('smoke test', () => {

    it('Chai works!', () => {

        const value = 'You can test!';

        expect(value).to.be.a('string');

    });

    it('Sinon works!', () => {

        const callback = spy();

        const foo = fn => fn();
        foo(callback);

        expect(callback.called).to.be.true;

    });

});