import { transition, trigger, query, style, animate, group } from '@angular/animations';


export const routeTransitionAnim =
  trigger('routeAnimations', [
      transition('Home => About, About => Projects, Projects => Contact, Home => Contact, Home => Projects, About => Contact', [
          query(':enter, :leave', style({ position: 'fixed', width: '100%', top: '0', bottom: '0' }), { optional: true }),
          group([
              query(':enter', [
                  style({ transform: 'translateX(100%)' }),
                  animate('0.6s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave', [
                  style({ transform: 'translateX(0%)' }),
                  animate('0.6s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
              ], { optional: true }),
          ])
      ]),
      transition('About => Home, Projects => Home, Contact => Home, Projects => About, Contact => About, Contact => Projects', [
          query(':enter, :leave', style({ position: 'fixed', width: '100%', top: '0', bottom: '0' }), { optional: true }),
          group([
              query(':enter', [
                  style({ transform: 'translateX(-100%)' }),
                  animate('0.6s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave', [
                  style({ transform: 'translateX(0%)' }),
                  animate('0.6s ease-in-out', style({ transform: 'translateX(100%)' }))
              ], { optional: true }),
          ])
      ]),
  ]);
