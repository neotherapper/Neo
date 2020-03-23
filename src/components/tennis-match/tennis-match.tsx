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
      <Host>
        <a href="http://">
          <div class="match-link">
            <div class="match-container">
              <table class="livescore over">
                <tbody>
                  <tennis-match-team
                    team={this.match.teamA}
                  ></tennis-match-team>
                  <tennis-match-team
                    team={this.match.teamB}
                  ></tennis-match-team>
                </tbody>
              </table>
            </div>
          </div>
        </a>
      </Host>
    );
  }
}
