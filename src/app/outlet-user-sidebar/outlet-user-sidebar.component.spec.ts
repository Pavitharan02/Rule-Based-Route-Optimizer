import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletUserSidebarComponent } from './outlet-user-sidebar.component';

describe('OutletUserSidebarComponent', () => {
  let component: OutletUserSidebarComponent;
  let fixture: ComponentFixture<OutletUserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletUserSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletUserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
