import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'tennis-matches',
  styleUrl: 'tennis-matches.css',
  shadow: true,
})
export class TennisMatches implements ComponentInterface {
  data = 1;

  render() {
    return (
      <Host>
        <h1>Tenni Matches</h1>
        <div class="matches-container">
          <section class="matches">{this.data}</section>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
