import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoloNumerosDirective } from './directives/solo-numeros.directive';
import { NoEspaciosDirective } from './directives/no-espacios.directive';

@NgModule({
  declarations: [
    AppComponent,
    SoloNumerosDirective,
    NoEspaciosDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
