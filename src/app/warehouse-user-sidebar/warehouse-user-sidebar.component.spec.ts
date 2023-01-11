import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseUserSidebarComponent } from './warehouse-user-sidebar.component';

describe('WarehouseUserSidebarComponent', () => {
  let component: WarehouseUserSidebarComponent;
  let fixture: ComponentFixture<WarehouseUserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseUserSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseUserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
