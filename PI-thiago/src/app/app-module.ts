import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { ListaEx1Module } from './lista-ex1/lista-ex1-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaEx1Module
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}