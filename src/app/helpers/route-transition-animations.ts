import { transition, trigger, query, style, animate, group } from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
      transition('Home => About, About => Projects, Projects => Contact, Home => Contact, Home => Projects, About => Contact', [
          query(':enter, :leave', style({ position: 'absolute', width: '100%', top: '10%', bottom: '0' }), { optional: true }),
          group([
              query(':enter', [
                  style({ transform: 'translateX(100%)' }),
                  animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave', [
                  style({ transform: 'translateX(0%)' }),
                  animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
              ], { optional: true }),
          ])
      ]),
      transition('About => Home, Projects => Home, Contact => Home, Projects => About, Contact => About, Contact => Projects', [
          query(':enter, :leave', style({ position: 'absolute', width: '100%', top: '10%', bottom: '0' }), { optional: true }),
          group([
              query(':enter', [
                  style({ transform: 'translateX(-100%)' }),
                  animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave', [
                  style({ transform: 'translateX(0%)' }),
                  animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))
              ], { optional: true }),
          ])
      ]),
  ]);
