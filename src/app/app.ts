import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  standalone: false,
})
export class App {
  protected readonly title = signal('DarkTheme');
}
