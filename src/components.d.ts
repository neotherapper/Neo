/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TournamentCategoryListItemI, } from "./components/neo-tournament-category-list-item-view/tournament-category-list-item.model";
import { TournamentCategoryList, } from "./components/neo-tournament-category-list-view/tournament-category-list.model";
export namespace Components {
    interface NeoTournamentCategoryListItemView {
        "data": TournamentCategoryListItemI;
    }
    interface NeoTournamentCategoryListView {
        "data": TournamentCategoryList;
    }
}
declare global {
    interface HTMLNeoTournamentCategoryListItemViewElement extends Components.NeoTournamentCategoryListItemView, HTMLStencilElement {
    }
    var HTMLNeoTournamentCategoryListItemViewElement: {
        prototype: HTMLNeoTournamentCategoryListItemViewElement;
        new (): HTMLNeoTournamentCategoryListItemViewElement;
    };
    interface HTMLNeoTournamentCategoryListViewElement extends Components.NeoTournamentCategoryListView, HTMLStencilElement {
    }
    var HTMLNeoTournamentCategoryListViewElement: {
        prototype: HTMLNeoTournamentCategoryListViewElement;
        new (): HTMLNeoTournamentCategoryListViewElement;
    };
    interface HTMLElementTagNameMap {
        "neo-tournament-category-list-item-view": HTMLNeoTournamentCategoryListItemViewElement;
        "neo-tournament-category-list-view": HTMLNeoTournamentCategoryListViewElement;
    }
}
declare namespace LocalJSX {
    interface NeoTournamentCategoryListItemView {
        "data"?: TournamentCategoryListItemI;
    }
    interface NeoTournamentCategoryListView {
        "data"?: TournamentCategoryList;
    }
    interface IntrinsicElements {
        "neo-tournament-category-list-item-view": NeoTournamentCategoryListItemView;
        "neo-tournament-category-list-view": NeoTournamentCategoryListView;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "neo-tournament-category-list-item-view": LocalJSX.NeoTournamentCategoryListItemView & JSXBase.HTMLAttributes<HTMLNeoTournamentCategoryListItemViewElement>;
            "neo-tournament-category-list-view": LocalJSX.NeoTournamentCategoryListView & JSXBase.HTMLAttributes<HTMLNeoTournamentCategoryListViewElement>;
        }
    }
}
