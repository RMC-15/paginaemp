import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Empeno1Component } from './pages/empeno1/empeno1.component';
import { DesempenoComponent } from './pages/desempeno/desempeno.component';
import { Empeno2Component } from './pages/empeno2/empeno2.component';
import { Empeno3Component } from './pages/empeno3/empeno3.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { Pago1Component } from './pages/pago1/pago1.component';
import { Pago2Component } from './pages/pago2/pago2.component';
import { Pago3Component } from './pages/pago3/pago3.component';

import { HttpClientModule } from '@angular/common/http';
import { EmpenodstComponent } from './empenodst/empenodst.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    Empeno1Component,
    DesempenoComponent,
    Empeno2Component,
    Empeno3Component,
    OperacionesComponent,
    Pago1Component,
    Pago2Component,
    Pago3Component,
    EmpenodstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
