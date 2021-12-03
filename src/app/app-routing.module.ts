import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesempenoComponent } from './pages/desempeno/desempeno.component';
import { Empeno1Component } from './pages/empeno1/empeno1.component';
import { Empeno2Component } from './pages/empeno2/empeno2.component';
import { Empeno3Component } from './pages/empeno3/empeno3.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { Pago1Component } from './pages/pago1/pago1.component';
import { Pago2Component } from './pages/pago2/pago2.component';
import { Pago3Component } from './pages/pago3/pago3.component';

const routes: Routes = [
  { path: '', component: OperacionesComponent},
  { path: 'empeno1', component: Empeno1Component},
  { path: 'empeno1/empeno2', component: Empeno2Component},
  { path: 'empeno3', component: Empeno3Component},
  { path: 'pago1', component: Pago1Component},
  { path: 'pago2', component: Pago2Component},
  { path: 'pago3', component: Pago3Component},
  { path: 'desempeno', component: DesempenoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
