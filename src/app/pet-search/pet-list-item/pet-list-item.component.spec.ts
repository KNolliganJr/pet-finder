import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListItemComponent } from './pet-list-item.component';

describe('PetListItemComponent', () => {
  let component: PetListItemComponent;
  let fixture: ComponentFixture<PetListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
