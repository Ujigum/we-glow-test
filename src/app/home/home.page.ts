import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { RecipeComponentModule } from '../recipe/recipe.module'; // i'm lost now

//import { DataService, Message } from '../services/data.service';
//import { DataService, Recipes } from '../services/data.service';
import { DataService, Recipes } from '../services/data.service.connections';

const API_REPO = `https://jsonplaceholder.typicode.com/posts`;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  public data = inject(Platform);

  public recipes!: Recipes[];

  public linkLocation = '';

  constructor() {
    this.recipes = this.setRecipes(this.linkLocation);

  };

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);};

   setRecipes(theRecipe:any): Recipes[] {
      this.recipes = theRecipe
      return this.recipes;
    };

}
