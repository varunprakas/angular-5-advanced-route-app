import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BooksComponentComponent } from './books-component/books-component.component';
import { CustomersComponentComponent } from './customers-component/customers-component.component';
import { LoansComponentComponent } from './loans-component/loans-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { BookDetailsComponentComponent } from './book-details-component/book-details-component.component';
import { CustDetailsComponentComponent } from './cust-details-component/cust-details-component.component';
import { CustEditComponentComponent } from './cust-edit-component/cust-edit-component.component';
import { BookGuardComponent } from './book-guard/book-guard.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { CustEditComponent } from './cust-edit/cust-edit.component';
import { CustDetailsComponent } from './cust-details/cust-details.component';
import { BookGuardGuard } from './book-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponentComponent,
    CustomersComponentComponent,
    LoansComponentComponent,
    WelcomeComponentComponent,
    BookDetailsComponentComponent,
    CustDetailsComponentComponent,
    CustEditComponentComponent,
    BookGuardComponent,
    PageNotFoundComponentComponent,
    CustEditComponent,
    CustDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
