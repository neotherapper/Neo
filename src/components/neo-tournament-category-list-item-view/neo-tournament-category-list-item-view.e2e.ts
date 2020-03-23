import { newE2EPage } from '@stencil/core/testing';

describe('neo-tournament-category-list-item-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neo-tournament-category-list-item-view></neo-tournament-category-list-item-view>');

    const element = await page.find('neo-tournament-category-list-item-view');
    expect(element).toHaveClass('hydrated');
  });
});
