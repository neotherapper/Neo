import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { TennisMatchI } from './tennis-match.model';

@Component({
  tag: "tennis-match",
  styleUrl: "tennis-match.css",
  shadow: false
})
export class TennisMatch implements ComponentInterface {
  @Prop() match: TennisMatchI;

  render() {
    return (
      <Host class="opponents">
        <tennis-match-team team={this.match.teamA}></tennis-match-team>
        <tennis-match-team team={this.match.teamB}></tennis-match-team>
      </Host>
    );
  }
}
