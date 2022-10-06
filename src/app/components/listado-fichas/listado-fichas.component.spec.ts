import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFichasComponent } from './listado-fichas.component';

describe('ListadoFichasComponent', () => {
  let component: ListadoFichasComponent;
  let fixture: ComponentFixture<ListadoFichasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoFichasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
