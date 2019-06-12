import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './container/tree/tree.component';
import { DataListComponent } from './container/data-list/data-list.component';
import { CustomerComponent } from './container/customer/customer.component';

const tree: Route = {
  path: 'tree',
  component: TreeComponent,
  data: {
    background: 'primary'
  }
};

const customer: Route = {
  path: 'customer',
  component: CustomerComponent,
  data: {
    background: 'primary'
  }
};

const datalist: Route = {
  path: 'datalist',
  component: DataListComponent,
  data: {
    background: 'primary'
  }
};

const appRoutes: Routes = [
  {
    ...tree,
    path: 'tree'
  },
  {
    ...customer,
    path: 'customer',
    children: [{
      ...datalist,
      path: '**'
    }]
  },
  {
    ...customer,
    path: '**', // Default
    children: [{
      ...datalist,
      path: '**'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
