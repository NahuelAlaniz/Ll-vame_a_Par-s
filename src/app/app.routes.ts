import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ConjuntosBralettesBodysComponent } from './components/conjuntos_bralettes_bodys/conjuntos_bralettes_bodys';
import { pijamas_camisolines } from './components/pijamas_camisolines/pijamas_camisolines';
import { BoxersComponent } from './components/boxers/boxers.component';
import { RuanasComponent } from './components/ruanas/ruanas.component';
import { VestidosComponent } from './components/vestidos/vestidos.component';
import { RemerasComponent } from './components/remeras/remeras.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PantalonesComponent } from './components/pantalones/pantalones.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { guardGuard } from './utils/guard.guard';
import { ProductComponent } from './components/product/product.component';
export const routes: Routes = [
    { path: 'logIn', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'signIn', component: SignInComponent },
    // { path: 'maintenance', component: MaintenanceComponent },
    // { path: 'errorPage', component: ErrorPageComponent },
    // { path: '**', redirectTo: '/errorPage', pathMatch: 'full' },
    { path: 'inicio', component: MainComponent, canActivate: [guardGuard] },
    { path: 'conjuntos_bralettes_bodys', component: ConjuntosBralettesBodysComponent },
    { path: 'pijamas_camisolines', component: pijamas_camisolines },
    { path: 'boxers', component: BoxersComponent },
    { path: 'ruanas', component: RuanasComponent },
    { path: 'vestidos', component: VestidosComponent },
    { path: 'remeras', component: RemerasComponent },
    { path: 'pantalones', component: PantalonesComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'product', component: ProductComponent }



];

NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [CheckoutComponent],
    exports: [RouterModule],
});

export class AppRoutingModule { }
