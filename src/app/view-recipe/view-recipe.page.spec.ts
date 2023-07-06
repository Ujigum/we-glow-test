import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewRecipePageRoutingModule } from './view-recipe-routing.module';
import { ViewRecipePage } from './view-recipe.page';

describe('ViewMessagePage', () => {
  let component: ViewRecipePage;
  let fixture: ComponentFixture<ViewRecipePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewRecipePage],
      imports: [IonicModule.forRoot(), ViewRecipePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
