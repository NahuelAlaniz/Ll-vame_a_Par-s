import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntosBralettesBodysComponent } from './conjuntos_bralettes_bodys';

describe('conjuntos_bralettes_bodys', () => {
  let component: ConjuntosBralettesBodysComponent;
  let fixture: ComponentFixture<ConjuntosBralettesBodysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConjuntosBralettesBodysComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConjuntosBralettesBodysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
