import { newE2EPage } from '@stencil/core/testing';

describe('tennis-matches', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tennis-matches></tennis-matches>');

    const element = await page.find('tennis-matches');
    expect(element).toHaveClass('hydrated');
  });
});
