import { Injectable } from '@angular/core';

export interface Recipes {
  id: number;
}

@Injectable({
  providedIn: 'root'
})


/**
 * @param {String} myuri
 */
export class DataService {
  //public messages: Message[] = [

  public Recipes = [];
  public linkLocation = '';

  constructor() {
    this.set_url(this.linkLocation);

  }

  public set_url(uri:any){
    this.linkLocation =  uri;
  }

  public getData(){
    return 'schmekel';
  }

  public getURL() {
    return this.linkLocation;
  }

  public getRecipes(): Recipes[] {
    return this.Recipes;
  }

  public getRecipeById(id: number):Recipes {
    return this.Recipes[id];
  }
}

