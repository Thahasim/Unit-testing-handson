import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  it('Should render lion header title', async () => {
    const ele = await fixture(html `<loan-header></loan-header>`);
    const p = ele.shadowRoot?.querySelector('div > header > p');
    expect(p).to.exist;
  });

  it('Should render LoanHeader button', async () => {
    const ele = await fixture(html `<loan-header></loan-header>`);
    const btn = ele.shadowRoot?.querySelector('div > header > div');
    expect(btn).to.exist;
  });
});
