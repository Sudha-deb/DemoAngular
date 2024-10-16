import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div routerLinkActive="active-link">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/concepts">Concepts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/employee-manager">Employee Manager</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/contact">Contact</a>
          </li>
        </ul>
    <div>
  `,
  styles: ``
})
export class MenuListComponent {

}
