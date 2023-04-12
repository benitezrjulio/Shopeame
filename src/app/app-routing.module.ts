import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
   path:"products", component: ProductsPageComponent
  },
  {
    path: "management", component : ManagementPageComponent
  },
  // {
  //   path: "product/:id", component: ProductComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
