import { newSpecPage } from '@stencil/core/testing';
import { NeoTournamentCategoryListItemView } from './neo-tournament-category-list-item-view';

describe('neo-tournament-category-list-item-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NeoTournamentCategoryListItemView],
      html: `<neo-tournament-category-list-item-view></neo-tournament-category-list-item-view>`,
    });
    expect(page.root).toEqualHtml(`
      <neo-tournament-category-list-item-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </neo-tournament-category-list-item-view>
    `);
  });
});
