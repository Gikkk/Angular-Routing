import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routeTransitionAnim } from './helpers/route-transition-animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnim]
})
export class AppComponent {
  title = 'My-Portfolio-New';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  //  constructor( translate: TranslateService){
  //   translate.setDefaultLang('en');
  // }

  constructor( ){}

}

