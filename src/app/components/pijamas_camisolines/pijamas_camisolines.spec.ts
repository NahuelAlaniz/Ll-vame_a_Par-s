import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pijamas_camisolines } from './pijamas_camisolines';

describe('pijamas_camisolines', () => {
  let component: pijamas_camisolines;
  let fixture: ComponentFixture<pijamas_camisolines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [pijamas_camisolines]
    })
      .compileComponents();

    fixture = TestBed.createComponent(pijamas_camisolines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
