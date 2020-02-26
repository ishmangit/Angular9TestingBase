import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <counter></counter>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-jest-testing';
}
