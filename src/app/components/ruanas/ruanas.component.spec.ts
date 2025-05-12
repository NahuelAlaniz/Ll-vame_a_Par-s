import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuanasComponent } from './ruanas.component';

describe('JerseysComponent', () => {
  let component: RuanasComponent;
  let fixture: ComponentFixture<RuanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuanasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RuanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
