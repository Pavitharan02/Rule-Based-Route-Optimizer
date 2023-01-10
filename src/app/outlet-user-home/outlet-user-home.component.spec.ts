import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletUserHomeComponent } from './outlet-user-home.component';

describe('OutletUserHomeComponent', () => {
  let component: OutletUserHomeComponent;
  let fixture: ComponentFixture<OutletUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletUserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
