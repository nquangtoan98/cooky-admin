import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditTipComponent } from './create-edit-tip.component';

describe('CreateEditTipComponent', () => {
  let component: CreateEditTipComponent;
  let fixture: ComponentFixture<CreateEditTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
