import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { TournamentCategoryList } from './tournament-category-list.model';

@Component({
  tag: "neo-tournament-category-list-view",
  styleUrl: "neo-tournament-category-list-view.css",
  shadow: false
})
export class NeoTournamentCategoryListView implements ComponentInterface {
  @Prop() data: TournamentCategoryList;

  render() {
     if (this.data) {
       return (
         <Host>
           <ion-card>
             <ion-card-content>
               <ion-list>
                 {this.data.categories.map(categoryData => (
                   <neo-tournament-category-list-item-view
                     data={categoryData}
                   ></neo-tournament-category-list-item-view>
                 ))}
               </ion-list>
             </ion-card-content>
           </ion-card>

           <slot></slot>
         </Host>
       );
     } else {
       return (
         <h1>Test</h1>
       );
     }
  }
}
