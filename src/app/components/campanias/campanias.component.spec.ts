import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniasComponent } from './campanias.component';

describe('CampaniasComponent', () => {
  let component: CampaniasComponent;
  let fixture: ComponentFixture<CampaniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
