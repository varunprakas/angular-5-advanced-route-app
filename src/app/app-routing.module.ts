import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { BooksComponentComponent } from './books-component/books-component.component';
import { CustomersComponentComponent } from './customers-component/customers-component.component';
import { LoansComponentComponent } from './loans-component/loans-component.component';

import { BookDetailsComponentComponent } from './book-details-component/book-details-component.component';
import { CustDetailsComponentComponent } from './cust-details-component/cust-details-component.component';
import { CustEditComponentComponent } from './cust-edit-component/cust-edit-component.component';
import { BookGuardComponent } from './book-guard/book-guard.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { BookGuardGuard } from './book-guard.guard';


const routes: Routes =   [
    {
      path: '',
      component: WelcomeComponentComponent
    },
    {
      path: 'books',
      component: BooksComponentComponent
    },
    {
      path: 'book/:Id/:Price',
      component: BookDetailsComponentComponent,
      canActivate: [BookGuardGuard]
	},
  {
    path: 'customers',
    component: CustomersComponentComponent,
      children: [
        {
          path: 'edit',
          component: CustEditComponentComponent
        },
        {
          path: 'details',
          component: CustDetailsComponentComponent
        }
      ]
    },
  {
    path: 'loans',
    component: LoansComponentComponent

  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
