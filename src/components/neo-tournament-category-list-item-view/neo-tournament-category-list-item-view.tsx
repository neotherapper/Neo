import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { TournamentCategoryListItemI } from '../neo-tournament-category-list-view/tournament-category-list-item.model';

@Component({
  tag: "neo-tournament-category-list-item-view",
  styleUrl: "neo-tournament-category-list-item-view.css",
  shadow: false
})
export class NeoTournamentCategoryListItemView implements ComponentInterface {
  @Prop() data: TournamentCategoryListItemI;

  componentDidLoad() {
    console.log(this);
  }

  render() {
    return (
      <Host>
        <ion-card class="pointer ion-hide-lg-down">
          <ion-card-header>
            <ion-card-subtitle>{this.data.title}</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        <ion-item lines="inset" detail class="ion-hide-lg-up">
          <ion-label>{this.data.title}</ion-label>
        </ion-item>
        <slot></slot>
      </Host>
    );
  }
}




