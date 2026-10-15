import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('SignFlow');

  protected changeTitle(newTitle: string) {
    this.title.set(newTitle);
  }

  protected inputValid = computed(() => {
    return this.title().length >= 4;
  });

  protected inputEmpty = computed(() => {
    return this.title().length === 0;
  });

}
