import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es-DO'
import { LocalService } from './services/local.service';


registerLocaleData(localEs, 'es')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),





    {
      provide: LOCALE_ID,
      // useValue: 'es'

      deps:[LocalService],
      useFactory:(localservice: LocalService) => localservice.getLocal
    }
  ]
};
