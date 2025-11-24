import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { routes } from '../../app.routes';
import { AvailableLocal, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class Navbar {


  public _localService = inject(LocalService);
  public currentLang: AvailableLocal = this._localService.getLocal;

  setLanguage = (local: AvailableLocal) =>  {
    this._localService.ChangeLocal(local)
  }

  public routes = routes.map( route => ({
    title: route.title ?? '',
    path: route.path ?? ''
  }));


}
