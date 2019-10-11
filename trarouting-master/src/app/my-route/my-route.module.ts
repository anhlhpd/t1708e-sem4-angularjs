import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from '../module/hero/hero-list/hero-list.component';
import {HeroFormComponent} from '../module/hero/hero-form/hero-form.component';
import {ProductListComponent} from '../module/product/product-list/product-list.component';
import {ProductFormComponent} from '../module/product/product-form/product-form.component';

export const ROUTER_GROUPS = {
  HERO_MANAGER: {
    path: 'heroes',
    name: 'Hero Management',
    children: [
      {
        path: 'list',
        component: HeroListComponent,
        data: {
          name: 'List Hero',
          display: true
        }
      },
      {
        path: 'create',
        component: HeroFormComponent,
        data: {
          name: 'Create Hero',
          display: true
        }
      }
    ] as Routes
  } as Route,
  PRODUCT_MANAGER: {
    path: 'products',
    name: 'Product Management',
    children: [
      {
        path: 'list',
        component: ProductListComponent,
        data: {
          name: 'List Product',
          display: true
        }
      },
      {
        path: 'create',
        component: ProductFormComponent,
        data: {
          name: 'Create Product',
          display: true
        }
      }
    ] as Routes
  } as Route
};

const appRoutes: Routes = [
  {
    path: '',
    component: HeroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class MyRouteModule {
}
