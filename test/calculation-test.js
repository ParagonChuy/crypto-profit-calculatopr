const assert = require('assert');
const calculate = require('../app/calculate')

describe('Calculation Tests', () => {
  it('Calculation for 1 hr, 24hrs, 7d', () => {
    let price = 16840;
    let percent_change = 0.53 / 100;
    let result = price + (price * percent_change);
    result = Math.round(100 * result)/100;
    assert.equal(result, 16929.25);
  });
  it('Calculation with negative percentage', () => {
    let price = 16840;
    let percent_change = (-0.53) / 100;
    let result = price + (price * percent_change);
    result = Math.round(100 * result)/100;

    assert.equal(result, 16750.75);
  });
});
