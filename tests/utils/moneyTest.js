import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: format currency function', () => {
    it('convert cents into dollars', () => {
        expect(formatCurrency(2059)).toEqual('20.59');

    });
    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');

    });
    it('rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');

    });
    it('rounds down to the nearest cent', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
    it('rounds negative values to the nearest cent', () => {
        expect(formatCurrency(-2000.1)).toEqual('-20.00');
    });

});