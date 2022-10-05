import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichasTecnicasComponent } from './fichas-tecnicas.component';

describe('FichasTecnicasComponent', () => {
  let component: FichasTecnicasComponent;
  let fixture: ComponentFixture<FichasTecnicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichasTecnicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichasTecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
