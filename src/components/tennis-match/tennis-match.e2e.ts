import { newE2EPage } from '@stencil/core/testing';

describe('tennis-match', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tennis-match></tennis-match>');

    const element = await page.find('tennis-match');
    expect(element).toHaveClass('hydrated');
  });
});
