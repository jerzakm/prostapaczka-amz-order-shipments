import { expect } from 'chai';
import 'mocha';

import { isAmazonOrder } from './entryParsing'



describe('PARSER => Check if string contains valid Amazon order Id and return', () => {

  it('match order and return id', () => {
    const result = isAmazonOrder(`'41861686618adasda; asdasdasd 206-8562183-9433933 Mr john pope Idk wht test 618618618-1615651-5165'`);
    expect(result.matched).to.equal(true);
    expect(result.orderId).to.equal('206-8562183-9433933');
  });

  it(`no match and return null id`, () => {
    const result = isAmazonOrder(`'41861686618adasda; asdasdasd 206-85683-943 Mr john pope Idk wht test 618618618-1615651-5165'`);
    expect(result.matched).to.equal(false);
    expect(result.orderId).to.equal(null);
  });

});