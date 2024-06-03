import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ItemsShowcaseComponent } from './items-showcase/items-showcase.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';

export const routes: Routes = [
    {path: 'home', component: ItemsShowcaseComponent},
    {path:'login', component: LoginComponent},
    {path:'payment', component: PaymentCardComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }