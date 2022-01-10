import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  
  it('Should render title', async () => {
    const ele = await fixture(html `<basic-details></basic-details>`);
    const h2 = ele.shadowRoot?.querySelector('h2');
    expect(h2).to.exist;
  });

  it('Should render LionInput', async () => {
    const ele = await fixture(html `<basic-details></basic-details>`);
    const lionInput = await fixture(html `<lion-input></lion-input>`);
    expect(lionInput).to.be.accessible();
  });
});