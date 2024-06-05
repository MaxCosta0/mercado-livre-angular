import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ItemsShowcaseComponent } from './components/items-showcase/items-showcase.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';

export const routes: Routes = [
    { path: 'home', component: ItemsShowcaseComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: CustomerRegisterComponent },
    { path: 'payment', component: PaymentCardComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];