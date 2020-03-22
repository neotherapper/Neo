import { newSpecPage } from '@stencil/core/testing';
import { TennisMatches } from './tennis-matches';

describe('tennis-matches', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TennisMatches],
      html: `<tennis-matches></tennis-matches>`,
    });
    expect(page.root).toEqualHtml(`
      <tennis-matches>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tennis-matches>
    `);
  });
});
