import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditRecipesComponent } from './create-edit-recipes.component';

describe('CreateEditRecipesComponent', () => {
  let component: CreateEditRecipesComponent;
  let fixture: ComponentFixture<CreateEditRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
