import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OutletUserHomeComponent } from './outlet-user-home/outlet-user-home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { WarehouseUserHomeComponent } from './warehouse-user-home/warehouse-user-home.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { OutletUserSidebarComponent } from './outlet-user-sidebar/outlet-user-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { WarehouseUserSidebarComponent } from './warehouse-user-sidebar/warehouse-user-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OutletUserHomeComponent,
    OrderHistoryComponent,
    WarehouseUserHomeComponent,
    StockManagementComponent,
    OutletUserSidebarComponent,
    WarehouseUserSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
