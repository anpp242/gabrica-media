import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesComercialesComponent } from './condiciones-comerciales.component';

describe('CondicionesComercialesComponent', () => {
  let component: CondicionesComercialesComponent;
  let fixture: ComponentFixture<CondicionesComercialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionesComercialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesComercialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
