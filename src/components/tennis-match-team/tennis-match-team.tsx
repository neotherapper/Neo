import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { TennisTeamI } from './tennis-match-team.model';

@Component({
  tag: "tennis-match-team",
  styleUrl: "tennis-match-team.css",
  shadow: false
})
export class TennisMatchTeam implements ComponentInterface {
  @Prop() team: TennisTeamI;
  numberOfSets = 4;

  render() {
    return (
      <Host class="table">
        <tr class={this.team.winner ? "winner" : ""}>
          <th>
            <div class="pl-container">
              <div class="avatar">
                <img
                  src={this.team.players[0].imageUrl}
                  title={this.team.players[0].shortName}
                  alt=""
                />
              </div>
              <img
                src={
                  "https://www.rolandgarros.com/img/flags-svg/" +
                  this.team.players[0].country +
                  ".svg"
                }
                alt=""
                class="flag"
              />
              <p class="player troncate-long-name">
                {this.team.players[0].firstName.charAt(0) +
                  "." +
                  this.team.players[0].lastName.toLowerCase()}
                <span class="num">
                  {this.team.seed
                    ? `(${this.team.seed})`
                    : this.team.entryStatus
                    ? `(${this.team.entryStatus})`
                    : ""}
                </span>
              </p>
            </div>
          </th>
          {[...Array(this.numberOfSets)].map((e, i) => (
            <td
              class={
                this.team.sets[i]
                  ? this.team.sets[i].winner
                    ? "set-winner"
                    : ""
                  : ""
              }
            >
              {this.team.sets[i] ? this.team.sets[i].score : "-"}
            </td>
          ))}
        </tr>
      </Host>
    );
  }
}
