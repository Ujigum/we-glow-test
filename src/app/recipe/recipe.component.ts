import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import {DataService, Recipes } from '../services/data.service.connections';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent {
  private platform = inject(Platform);
  @Input() recipe ? : Recipes;
  isIos() {
    return this.platform.is('ios')
  }
}
