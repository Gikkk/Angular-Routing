import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'My-Portfolio-New';

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
   }

  constructor() {
  }
}

