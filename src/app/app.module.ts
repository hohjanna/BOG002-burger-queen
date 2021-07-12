import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocinaInitComponent } from './cocina-init/cocina-init.component';
import { MesasInitComponent } from './mesas-init/mesas-init.component';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent, 
    CocinaInitComponent,
    MesasInitComponent, 
    HomeComponent, PruebaComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
