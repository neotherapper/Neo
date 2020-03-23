import { newSpecPage } from '@stencil/core/testing';
import { TennisMatchTeam } from './tennis-match-team';

describe('tennis-match-team', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TennisMatchTeam],
      html: `<tennis-match-team></tennis-match-team>`,
    });
    expect(page.root).toEqualHtml(`
      <tennis-match-team>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tennis-match-team>
    `);
  });
});
