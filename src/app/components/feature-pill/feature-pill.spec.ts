import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePill } from './feature-pill';

describe('FeaturePill', () => {
  let component: FeaturePill;
  let fixture: ComponentFixture<FeaturePill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
