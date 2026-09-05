import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

import { App } from './app/app';
import { AppRoutingModule } from './app/app-routing-module';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(AppRoutingModule)
  ]
}).catch((err: unknown) => console.error(err));