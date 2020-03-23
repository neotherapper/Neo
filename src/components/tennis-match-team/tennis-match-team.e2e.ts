import { newE2EPage } from '@stencil/core/testing';

describe('tennis-match-team', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tennis-match-team></tennis-match-team>');

    const element = await page.find('tennis-match-team');
    expect(element).toHaveClass('hydrated');
  });
});
