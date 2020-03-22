import { newSpecPage } from '@stencil/core/testing';
import { TennisMatch } from './tennis-match';

describe('tennis-match', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TennisMatch],
      html: `<tennis-match></tennis-match>`,
    });
    expect(page.root).toEqualHtml(`
      <tennis-match>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tennis-match>
    `);
  });
});
