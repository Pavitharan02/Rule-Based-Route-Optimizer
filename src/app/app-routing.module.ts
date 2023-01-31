import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OutletUserHomeComponent } from './outlet-user-home/outlet-user-home.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { WarehouseUserHomeComponent } from './warehouse-user-home/warehouse-user-home.component';

const routes: Routes = [
  {
  path: '',
  component: LoginComponent},
  {
  path: 'outletuser',
  component: OutletUserHomeComponent},
  {
  path: 'warehouseuser',
  component: WarehouseUserHomeComponent},
  {
  path: 'orderhistory',
  component: OrderHistoryComponent},
  {
  path: 'stockmanagement',
  component: StockManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


