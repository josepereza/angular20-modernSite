import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronCenter } from './jumbotron-center';

describe('JumbotronCenter', () => {
  let component: JumbotronCenter;
  let fixture: ComponentFixture<JumbotronCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbotronCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumbotronCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
