import { expect } from 'chai';
import 'mocha';

import { isAmazonOrder, formatDate } from './entryParsing'



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

describe('PARSER => format PP date for Amazon file', () => {

  it('example formatting', () => {
    const result = formatDate(`2019-01-28T08:24:02.224Z`);
    expect(result).to.equal('2019-01-28');
  });
});