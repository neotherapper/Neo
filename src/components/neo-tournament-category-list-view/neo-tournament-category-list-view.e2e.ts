import { newE2EPage } from '@stencil/core/testing';

describe('neo-tournament-category-list-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-tournament-category-list-view></neo-tournament-category-list-view>');

    const element = await page.find('neo-tournament-category-list-view');
    expect(element).toHaveClass('hydrated');
  });
});
