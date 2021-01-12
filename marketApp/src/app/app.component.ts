import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  animations: [ 
    trigger('router', [
      transition('* => *', [ 
        group([ 
          query(':enter', [
            style({ 
              transform: 'translateX(0)'
            }), 
            animate(500, style({ 
              transform: 'translateX(100%)'
            }))
          ], {optional: true}),
          query(':enter', [
            style({ 
              transform: 'translateX(-100%)'
            }), 
            animate(500, style({ 
              transform: 'translateX(0)'
            }))
          ], {optional: true})
        ])
      ])
    ])
   ] 


  })
    
export class AppComponent {
  title = 'appProject';
 
}
