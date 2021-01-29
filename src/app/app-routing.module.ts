import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceexitComponent } from './invoiceexit/invoiceexit.component';
import { EmployeesComponent } from './employees/employees.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { WebComponent } from './web/web.component';
import { HomeComponent } from './home/home.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { ComicsComponent } from './comics/comics.component';
import { SearchComponent } from './search/search.component';
import { AnimationsComponent } from './animations/animations.component';

const routes: Routes = [
{ path: 'drawings', component: DrawingsComponent },
{ path: 'comics', component: ComicsComponent },
{ path: 'search', component: SearchComponent },
{ path: 'invoice-exit', component: InvoiceexitComponent },
{ path: 'employees', component: EmployeesComponent },
{ path: 'invoices', component: InvoicesComponent },
{ path: 'animations', component: AnimationsComponent },
{ path: 'web', component: WebComponent },
{ path: 'home', component: HomeComponent },
{ path: '**',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
