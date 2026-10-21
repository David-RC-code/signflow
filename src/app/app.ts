import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { Title } from './services/title';
import { filter, map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  private router = inject(Router);
  private titleService = inject(Title);
  protected readonly title = this.titleService.title


  protected isDisplay = toSignal(this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => !['/login', '/register'].includes(this.router.url)),
  ),{initialValue: !['/login', '/register'].includes(this.router.url)});


}
