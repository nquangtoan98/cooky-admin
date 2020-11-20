import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditContestComponent } from './create-edit-contest.component';

describe('CreateEditContestComponent', () => {
  let component: CreateEditContestComponent;
  let fixture: ComponentFixture<CreateEditContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditContestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
