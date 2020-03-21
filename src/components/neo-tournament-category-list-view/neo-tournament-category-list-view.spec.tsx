import { newSpecPage } from '@stencil/core/testing';
import { NeoTournamentCategoryListView } from './neo-tournament-category-list-view';

describe('neo-tournament-category-list-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NeoTournamentCategoryListView],
      html: `<neo-tournament-category-list-view></neo-tournament-category-list-view>`,
    });
    expect(page.root).toEqualHtml(`
      <neo-tournament-category-list-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </neo-tournament-category-list-view>
    `);
  });
});
