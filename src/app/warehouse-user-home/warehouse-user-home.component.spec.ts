import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseUserHomeComponent } from './warehouse-user-home.component';

describe('WarehouseUserHomeComponent', () => {
  let component: WarehouseUserHomeComponent;
  let fixture: ComponentFixture<WarehouseUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseUserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
