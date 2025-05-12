import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemerasComponent } from './remeras.component';

describe('RemerasComponent', () => {
  let component: RemerasComponent;
  let fixture: ComponentFixture<RemerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemerasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
