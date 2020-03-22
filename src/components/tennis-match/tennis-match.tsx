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
        <li>
          <a href="http://">
            <div class="match-link">
              <div class="match-container">
                <table class="livescore over">
                  <tbody>
                    <tr class="winner">
                      <th>
                        <div class="pl-container">
                          <div class="avatar">
                            <img
                              src="https://images.prismic.io/fft-rg-site/f68d31a6cab4148d2740fbb6f860a096dd663b91_djokovic.png?auto=compress,format"
                              title="DJOKOVIC"
                              alt=""
                            />
                          </div>
                          <img
                            src="https://www.rolandgarros.com/img/flags-svg/SRB.svg"
                            alt=""
                            class="flag"
                          />
                          <p class="player troncate-long-name">
                            N.Djokovic
                            <span class="num">(1)</span>
                          </p>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </a>
        </li>
        {this.match.id}
        <slot></slot>
      </Host>
    );
  }
}
